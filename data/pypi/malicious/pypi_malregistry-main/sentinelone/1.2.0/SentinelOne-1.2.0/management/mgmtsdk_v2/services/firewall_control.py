import logging

from management.common.query_filter import QueryFilter, FullScopeFilter
from management.mgmtsdk_v2.endpoints import *
from management.mgmtsdk_v2.entities.firewall_control import Rule
from management.mgmtsdk_v2.exceptions import raise_from_response, SentinelBaseException

logger = logging.getLogger('DeviceControl')


class FCAutocompleteQueryFilter(QueryFilter):

    QUERY_ARGS = {
        'accountIds': ['eq'],
        'groupIds': ['eq'],
        'ids': ['eq'],
        'limit': ['eq'],
        'scopes': ['eq'],
        'siteIds': ['eq'],
        'tenant': ['eq'],
    }

    def __init__(self):
        super(FCAutocompleteQueryFilter, self).__init__()


class FirewallControlQueryFilter(QueryFilter):

    QUERY_ARGS = {
        'accountIds': ['eq'],
        'action': ['eq'],
        'application': ['contains'],
        'countOnly': ['eq'],
        'createdAt': ['gt', 'gte', 'lt', 'lte'],
        'cursor': ['eq'],
        'deviceClass': ['eq'],
        'groupIds': ['eq'],
        'ids': ['eq'],
        'interface': ['eq'],
        'limit': ['eq'],
        'name': ['contains'],
        'osType': ['eq'],
        'osTypes': ['eq'],
        'productId': ['eq'],
        'query': ['eq'],
        'ruleName': ['eq'],
        'scopes': ['eq'],
        'service': ['contains'],
        'serviceClass': ['eq'],
        'siteIds': ['eq'],
        'skip': ['eq'],
        'skipCount': ['eq'],
        'sortBy': ['eq'],
        'sortOrder': ['eq'],
        'status': ['eq'],
        'tagIds': ['eq'],
        'tagName': ['contains'],
        'tenant': ['eq'],
        'uId': ['eq'],
        'vendorId': ['eq'],
    }

    def __init__(self):
        super(FirewallControlQueryFilter, self).__init__()


class FirewallControlReorderQueryFilter(QueryFilter):

    QUERY_ARGS = {
        'accountIds': ['eq'],
        'groupIds': ['eq'],
        'osTypes': ['eq'],
        'siteIds': ['eq'],
        'tenant': ['eq'],
    }

    def __init__(self):
        super(FirewallControlReorderQueryFilter, self).__init__()


class FirewallControl(object):

    def __init__(self, client):
        self.client = client

    def create_rule(self, rule, query_filter=None, **rule_args):
        query_params = FullScopeFilter.get_query_params(query_filter, rule_args)
        data = rule.to_json()
        logging.info('Creating FC Rule with filter={}, with data="{}"'.format(query_params, data))
        res = self.client.post(endpoint=FIREWALL_CONTROL, query_filter=query_params, data=data)
        if res.status_code != 200:
            logger.warning("Failed to create rule, response_code: {}".format(res.status_code))
            raise_from_response(res)
        res.data = Rule(**res.data)
        return res

    def get_rules(self, query_filter=None, **rule_args):
        query_params = FirewallControlQueryFilter.get_query_params(query_filter, rule_args)
        ret = []
        res = self.client.get(endpoint=FIREWALL_CONTROL, params=query_params)
        if res.status_code != 200:
            logger.warning("Failed to get rules, response_code: {}".format(res.status_code))
            raise_from_response(res)
        rules = res.data
        for rule in rules:
            ret.append(Rule(**rule))
        res.data = ret
        return res

    def delete_rules(self, query_filter=None, **rule_args):  # delete
        query_params = FirewallControlQueryFilter.get_query_params(query_filter, rule_args)
        res = self.client.delete(endpoint=FIREWALL_CONTROL, data={}, payload={'filter': query_params})
        if res.status_code != 200:
            logger.warning("Failed to delete rules, response_code: {}".format(res.status_code))
            raise_from_response(res)
        res.data = res.data['affected']
        return res

    def reorder_rules(self, reordered_ids_list, query_filter=None, **query_args):
        query_params = FirewallControlReorderQueryFilter.get_query_params(query_filter, query_args)
        res = self.client.put(endpoint=FIREWALL_CONTROL_REORDER, data=reordered_ids_list, query_filter=query_params)
        if res.status_code != 200:
            logger.warning("Failed to reorder rules, response_code: {}".format(res.status_code))
            raise_from_response(res)
        res.data = res.data['success']
        return res

    def update_rule(self, rule_id, tenant=False, accountIds=None, siteIds=None, groupIds=None, **kwargs):  # put
        if siteIds:
            rule = self.get_rules(ids=rule_id,siteIds=siteIds).data[0].to_json()
        elif accountIds:
            rule = self.get_rules(ids=rule_id, accountIds=accountIds).data[0].to_json()
        elif groupIds:
            rule = self.get_rules(ids=rule_id, groupIds=groupIds).data[0].to_json()
        elif tenant is True:
            rule = self.get_rules(ids=rule_id, tenant=True).data[0].to_json()
        else:
            raise SentinelBaseException('Scope info not provided')
        rule.update(kwargs)
        logging.info('Updating FC Rule (id={}) with data="{}"'.format(rule_id, rule))
        res = self.client.put(endpoint=FIREWALL_CONTROL_UPDATE_RULE.format(rule_id), data=rule)
        if res.status_code != 200:
            logger.warning("Failed to update rule, response_code: {}".format(res.json))
            raise_from_response(res)
        res.data = Rule(**res.data)
        return res

    def count_by_filters(self, query_filter=None, **rule_args):
        query_params = FirewallControlQueryFilter.get_query_params(query_filter, rule_args)
        res = self.client.get(endpoint=FIREWALL_CONTROL_PRIVATE_FILTERS_COUNT, params=query_params)
        if res.status_code != 200:
            logger.warning("Failed to count agents, response_code: {}".format(res.status_code))
            raise_from_response(res)
        return res

    def get_settings(self, scope_filter=None, **scope_args):
        query_params = FullScopeFilter.get_query_params(scope_filter, scope_args)
        res = self.client.get(endpoint=FIREWALL_CONTROL_SETTINGS, params=query_params)
        if res.status_code != 200:
            logger.warning("Failed to get settings, response_code: {}".format(res.json))
            raise_from_response(res)
        return res

    def update_settings(self, filter=None, **kwargs):
        res = self.client.put(endpoint=FIREWALL_CONTROL_SETTINGS, query_filter=filter, data=kwargs)
        if res.status_code != 200:
            logger.warning("Failed to update settings, response_code: {}".format(res.json))
            raise_from_response(res)
        return res

    def copy_rules(self, data, query_filter=None, **rule_args):
        query_params = FirewallControlQueryFilter.get_query_params(query_filter, rule_args)
        res = self.client.post(endpoint=FIREWALL_CONTROL_COPY_RULES, query_filter=query_params, data=data)
        if res.status_code != 200:
            logger.warning("Failed to copy rule, response_code: {}".format(res.status_code))
            raise_from_response(res)
        return res

    def move_rules(self, data, query_filter=None, **rule_args):
        query_params = FirewallControlQueryFilter.get_query_params(query_filter, rule_args)
        res = self.client.post(endpoint=FIREWALL_CONTROL_MOVE_RULES, query_filter=query_params, data=data)
        if res.status_code != 200:
            logger.warning("Failed to move rule, response_code: {}".format(res.status_code))
            raise_from_response(res)
        return res

    def change_rules_status(self, status, query_filter=None, **rule_args):
        query_params = FirewallControlQueryFilter.get_query_params(query_filter, rule_args)
        res = self.client.put(endpoint=FIREWALL_CONTROL_STATUS, query_filter=query_params, data={'status': status})
        if res.status_code != 200:
            logger.warning("Failed to change rules status, response_code: {}".format(res.json))
            raise_from_response(res)
        res.data = res.data['affected']
        return res

    def get_free_text_filters(self):
        res = self.client.get(endpoint=FIREWALL_CONTROL_FREE_TEXT_FILTERS)
        if res.status_code != 200:
            logger.warning("Failed to get free text filters for firewall control, "
                           "response_code: {}".format(res.status_code))
            raise_from_response(res)
        return res

    def filters_auto_complete(self, key, text, query_filter=None, **rule_args):
        query_params = FCAutocompleteQueryFilter.get_query_params(query_filter, rule_args)
        query_params['key'] = key
        query_params['text'] = text
        res = self.client.get(endpoint=FIREWALL_CONTROL_FILTER_AUTO_COMPLETE, params=query_params)
        if res.status_code != 200:
            logger.warning("Failed to get firewall control autocomplete, response_code: {}".format(res.status_code))
            raise_from_response(res)
        return res

    def add_firewall_tags(self, tag_ids, query_filter=None, **rule_args):
        query_params = FirewallControlQueryFilter.get_query_params(query_filter, rule_args)
        res = self.client.post(endpoint=FIREWALL_CONTROL_ADD_TAGS, query_filter=query_params, data={'tagIds': tag_ids})
        if res.status_code != 200:
            logger.warning("Failed to add firewall tags, response_code: {}".format(res.status_code))
            raise_from_response(res)
        res.data = int(res.data['affected'])
        return res

    def remove_firewall_tags(self, tag_ids, query_filter=None, **rule_args):
        query_params = FirewallControlQueryFilter.get_query_params(query_filter, rule_args)
        res = self.client.post(endpoint=FIREWALL_CONTROL_REMOVE_TAGS, query_filter=query_params, data={'tagIds': tag_ids})
        if res.status_code != 200:
            logger.warning("Failed to remove firewall tags, response_code: {}".format(res.status_code))
            raise_from_response(res)
        res.data = int(res.data['affected'])
        return res
