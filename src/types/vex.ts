// VEX Protocol & Application Types
export type VexRegisterAddress = '#00' | '#01' | '#02' | '#03' | '#04' | '#05' | '#06' | '#07';

export type VexPrimitive = 
  | '@server'
  | '@sandbox'
  | '@ledger'
  | '@pkg'
  | '@schema'
  | '@adapt'
  | '@state'
  | '@stream'
  | '@fn'
  | '@rpc'
  | '@auth'
  | '@route'
  | '@ui'
  | '@meta';

export interface VexJsonRpcRequest<T = any> {
  jsonrpc: '2.0';
  id: string | number;
  method: string;
  params: T;
  signature?: string;
  digest?: string;
}

export interface VexJsonRpcResponse<T = any> {
  jsonrpc: '2.0';
  id: string | number;
  result?: T;
  error?: {
    code: number;
    message: string;
    data?: any;
  };
}

export interface VexStateCommitResult {
  status: 'COMMITTED' | 'ROLLBACK' | 'PENDING' | 'REJECTED';
  register: VexRegisterAddress;
  state_root: string;
  block_height: number;
  block_hash: string;
  verified_signature: boolean;
  gas_consumed: number;
  delta_applied?: any;
  timestamp: number;
}

export interface VexBlockHistoryItem {
  blockHeight: number;
  hash: string;
  method: string;
  register: string;
  delta: string;
  timestamp: string;
  stateSnapshot?: string;
}

export interface ByokConfig {
  provider: 'openai' | 'gemini' | 'groq' | 'openrouter';
  apiKey: string;
  model: string;
  temperature: number;
}