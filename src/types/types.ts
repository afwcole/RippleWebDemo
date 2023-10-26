export interface PostPayload {
  USERID: string
  MSISDN: string
  USERDATA: string
  MSGTYPE: boolean
  NETWORK: string
  SESSIONID: string
}

export interface SIMMessage {
    TO: string
    MESSAGE: string
}

export interface ResponsePayload {
  USERID: string
  MSISDN: string
  USERDATA: string
  MSGTYPE: boolean
  MSG: string
  SIM_MESSAGE: Array<SIMMessage>
}