/**
 * GENERATED CODE - DO NOT MODIFY
 */
import type { HeadersMap } from "@atp/xrpc";

export type QueryParams = globalThis.Record<PropertyKey, never>;
export type InputSchema = string | Uint8Array | Blob;

export interface CallOptions {
  signal?: AbortSignal;
  headers?: HeadersMap;
  qp?: QueryParams;
  encoding?: "application/vnd.ipld.car";
}

export interface Response {
  success: boolean;
  headers: HeadersMap;
}

export function toKnownErr(e: unknown): unknown {
  return e;
}
