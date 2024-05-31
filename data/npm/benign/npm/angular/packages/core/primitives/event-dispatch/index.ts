/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export {Dispatcher, registerDispatcher} from './src/dispatcher';
export {EventContractContainer} from './src/event_contract_container';
export type {EarlyJsactionDataContainer} from './src/earlyeventcontract';
export {EventContract} from './src/eventcontract';
export {bootstrapEarlyEventContract} from './src/register_events';

export type {EventContractTracker} from './src/register_events';
export {EventInfoWrapper} from './src/event_info';
export {isSupportedEvent, isCaptureEvent} from './src/event_type';
