const GuildChannel = require("./GuildChannel");
const TextBasedChannel = require("./interfaces/TextBasedChannel");
const Collection = require("../util/Collection");

/**
 * Represents a guild text channel on Discord.
 * @extends {GuildChannel}
 * @implements {TextBasedChannel}
 */
class TextChannel extends GuildChannel {
  constructor(guild, data) {
    super(guild, data);
    this.type = "text";
    /**
     * A collection containing the messages sent to this channel
     * @type {Collection<Snowflake, Message>}
     */
    this.messages = new Collection();
    this._typing = new Map();
  }

  setup(data) {
    super.setup(data);

    /**
     * The topic of the text channel
     * @type {?string}
     */
    this.topic = data.topic;

    /**
     * If the Discord considers this channel NSFW
     * @type {boolean}
     * @readonly
     */
    this.nsfw = Boolean(data.nsfw);

    /**
     * The ID of the last message sent in this channel, if one was sent
     * @type {?Snowflake}
     */
    this.lastMessageID = data.last_message_id;

    /**
     * The timestamp when the last pinned message was pinned, if there was one
     * @type {?number}
     */
    this.lastPinTimestamp = data.last_pin_timestamp
      ? new Date(data.last_pin_timestamp).getTime()
      : null;

    /**
     * The ratelimit per user for this channel in seconds
     * @type {number}
     */
    this.rateLimitPerUser = data.rate_limit_per_user || 0;
  }

  /**
   * A collection of members that can see this channel, mapped by their ID
   * @type {Collection<Snowflake, GuildMember>}
   * @readonly
   */
  get members() {
    const members = new Collection();
    for (const member of this.guild.members.values()) {
      if (this.permissionsFor(member).has("READ_MESSAGES")) {
        members.set(member.id, member);
      }
    }
    return members;
  }

  /**
   * Fetch all webhooks for the channel.
   * @returns {Promise<Collection<Snowflake, Webhook>>}
   * @example
   * // Fetch webhooks
   * channel.fetchWebhooks()
   *   .then(hooks => console.log(`This channel has ${hooks.size} hooks`))
   *   .catch(console.error);
   */
  fetchWebhooks() {
    return this.client.rest.methods.getChannelWebhooks(this);
  }

  /**
   * Sets whether this channel is flagged as NSFW.
   * @param {boolean} nsfw Whether the channel should be considered NSFW
   * @param {string} [reason] Reason for changing the channel's NSFW flag
   * @returns {Promise<TextChannel>}
   */
  setNSFW(nsfw, reason) {
    return this.edit({ nsfw }, reason);
  }

  /**
   * Create a webhook for the channel.
   * @param {string} name The name of the webhook
   * @param {BufferResolvable|Base64Resolvable} [avatar] The avatar for the webhook
   * @param {string} [reason] Reason for creating this webhook
   * @returns {Promise<Webhook>} webhook The created webhook
   * @example
   * channel.createWebhook('Snek', 'https://i.imgur.com/mI8XcpG.jpg')
   *   .then(webhook => console.log(`Created webhook ${webhook}`))
   *   .catch(console.error)
   */
  createWebhook(name, avatar, reason) {
    if (typeof avatar === "string" && avatar.startsWith("data:")) {
      return this.client.rest.methods.createWebhook(this, name, avatar, reason);
    } else {
      return this.client.resolver
        .resolveImage(avatar)
        .then(data =>
          this.client.rest.methods.createWebhook(this, name, data, reason)
        );
    }
  }

  /**
   * Sets the rate limit per user for this channel.
   * @param {number} rateLimitPerUser The new ratelimit in seconds
   * @param {string} [reason] Reason for changing the channel's ratelimits
   * @returns {Promise<TextChannel>}
   */
  setRateLimitPerUser(rateLimitPerUser, reason) {
    return this.edit({ rateLimitPerUser }, reason);
  }

  // These are here only for documentation purposes - they are implemented by TextBasedChannel
  /* eslint-disable no-empty-function */
  get lastMessage() {}
  get lastPinAt() {}
  send() {}
  sendMessage() {}
  sendEmbed() {}
  sendFile() {}
  sendFiles() {}
  sendCode() {}
  fetchMessage() {}
  fetchMessages() {}
  fetchPinnedMessages() {}
  search() {}
  startTyping() {}
  stopTyping() {}
  get typing() {}
  get typingCount() {}
  createCollector() {}
  createMessageCollector() {}
  awaitMessages() {}
  bulkDelete() {}
  acknowledge() {}
  _cacheMessage() {}
}

TextBasedChannel.applyToClass(TextChannel, true);

module.exports = TextChannel;
