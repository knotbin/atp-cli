/**
 * GENERATED CODE - DO NOT MODIFY
 */
import type { HeadersMap } from "@atp/xrpc";
import { validate as _validate } from "../../../../lexicons.ts";
import type { ValidationResult } from "@atp/lexicon";
import { is$typed as _is$typed } from "../../../../util.ts";

const is$typed = _is$typed, validate = _validate;
const id = "com.atproto.repo.listMissingBlobs";

export type QueryParams = {
  limit?: number;
  cursor?: string;
};
export type InputSchema = undefined;

export interface OutputSchema {
  cursor?: string;
  blobs: (RecordBlob)[];
}

export interface CallOptions {
  signal?: AbortSignal;
  headers?: HeadersMap;
}

export interface Response {
  success: boolean;
  headers: HeadersMap;
  data: OutputSchema;
}

export function toKnownErr(e: unknown): unknown {
  return e;
}

export interface RecordBlob {
  $type?: "com.atproto.repo.listMissingBlobs#recordBlob";
  cid: string;
  recordUri: string;
}

const hashRecordBlob = "recordBlob";

export function isRecordBlob<V>(v: V): v is RecordBlob & V {
  return is$typed(v, id, hashRecordBlob);
}

export function validateRecordBlob<V>(v: V): ValidationResult<RecordBlob & V> {
  return validate<RecordBlob & V>(v, id, hashRecordBlob);
}
