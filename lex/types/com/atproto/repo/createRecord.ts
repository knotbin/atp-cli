/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atp/xrpc";
import type * as ComAtprotoRepoDefs from "./defs.ts";

export type QueryParams = globalThis.Record<PropertyKey, never>;

export interface InputSchema {
  /** The handle or DID of the repo (aka, current account). */
  repo: string;
  /** The NSID of the record collection. */
  collection: string;
  /** The Record Key. */
  rkey?: string;
  /** Can be set to 'false' to skip Lexicon schema validation of record data, 'true' to require it, or leave unset to validate only for known Lexicons. */
  validate?: boolean;
  /** The record itself. Must contain a $type field. */
  record: { [_ in string]: unknown };
  /** Compare and swap with the previous commit by CID. */
  swapCommit?: string;
}

export interface OutputSchema {
  uri: string;
  cid: string;
  commit?: ComAtprotoRepoDefs.CommitMeta;
  validationStatus?:
    | "valid"
    | "unknown"
    | (string & globalThis.Record<PropertyKey, never>);
}

export interface CallOptions {
  signal?: AbortSignal;
  headers?: HeadersMap;
  qp?: QueryParams;
  encoding?: "application/json";
}

export interface Response {
  success: boolean;
  headers: HeadersMap;
  data: OutputSchema;
}

export class InvalidSwapError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src });
  }
}

export function toKnownErr(e: unknown): unknown {
  if (e instanceof XRPCError) {
    if (e.error === "InvalidSwap") return new InvalidSwapError(e);
  }

  return e;
}
