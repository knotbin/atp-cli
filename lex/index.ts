/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  type FetchHandler,
  type FetchHandlerOptions,
  XrpcClient,
} from "@atp/xrpc";
import { schemas } from "./lexicons.ts";
import type * as ComAtprotoRepoListMissingBlobs from "./types/com/atproto/repo/listMissingBlobs.ts";
import * as ComAtprotoRepoCreateRecord from "./types/com/atproto/repo/createRecord.ts";
import * as ComAtprotoRepoDeleteRecord from "./types/com/atproto/repo/deleteRecord.ts";
import * as ComAtprotoRepoPutRecord from "./types/com/atproto/repo/putRecord.ts";
import type * as ComAtprotoRepoUploadBlob from "./types/com/atproto/repo/uploadBlob.ts";
import type * as ComAtprotoRepoImportRepo from "./types/com/atproto/repo/importRepo.ts";
import type * as ComAtprotoRepoDescribeRepo from "./types/com/atproto/repo/describeRepo.ts";
import * as ComAtprotoRepoGetRecord from "./types/com/atproto/repo/getRecord.ts";
import * as ComAtprotoRepoApplyWrites from "./types/com/atproto/repo/applyWrites.ts";
import type * as ComAtprotoRepoListRecords from "./types/com/atproto/repo/listRecords.ts";

export * as ComAtprotoRepoStrongRef from "./types/com/atproto/repo/strongRef.ts";
export * as ComAtprotoRepoDefs from "./types/com/atproto/repo/defs.ts";
export * as ComAtprotoRepoListMissingBlobs from "./types/com/atproto/repo/listMissingBlobs.ts";
export * as ComAtprotoRepoCreateRecord from "./types/com/atproto/repo/createRecord.ts";
export * as ComAtprotoRepoDeleteRecord from "./types/com/atproto/repo/deleteRecord.ts";
export * as ComAtprotoRepoPutRecord from "./types/com/atproto/repo/putRecord.ts";
export * as ComAtprotoRepoUploadBlob from "./types/com/atproto/repo/uploadBlob.ts";
export * as ComAtprotoRepoImportRepo from "./types/com/atproto/repo/importRepo.ts";
export * as ComAtprotoRepoDescribeRepo from "./types/com/atproto/repo/describeRepo.ts";
export * as ComAtprotoRepoGetRecord from "./types/com/atproto/repo/getRecord.ts";
export * as ComAtprotoRepoApplyWrites from "./types/com/atproto/repo/applyWrites.ts";
export * as ComAtprotoRepoListRecords from "./types/com/atproto/repo/listRecords.ts";

export class AtpBaseClient extends XrpcClient {
  com: ComNS;

  constructor(options: FetchHandler | FetchHandlerOptions) {
    super(options, schemas);
    this.com = new ComNS(this);
  }

  /** @deprecated use `this` instead */
  get xrpc(): XrpcClient {
    return this;
  }
}

export class ComNS {
  _client: XrpcClient;
  atproto: ComAtprotoNS;

  constructor(client: XrpcClient) {
    this._client = client;
    this.atproto = new ComAtprotoNS(client);
  }
}

export class ComAtprotoNS {
  _client: XrpcClient;
  repo: ComAtprotoRepoNS;

  constructor(client: XrpcClient) {
    this._client = client;
    this.repo = new ComAtprotoRepoNS(client);
  }
}

export class ComAtprotoRepoNS {
  _client: XrpcClient;

  constructor(client: XrpcClient) {
    this._client = client;
  }

  listMissingBlobs(
    params?: ComAtprotoRepoListMissingBlobs.QueryParams,
    opts?: ComAtprotoRepoListMissingBlobs.CallOptions,
  ): Promise<ComAtprotoRepoListMissingBlobs.Response> {
    return this._client
      .call("com.atproto.repo.listMissingBlobs", params, undefined, opts);
  }

  createRecord(
    data?: ComAtprotoRepoCreateRecord.InputSchema,
    opts?: ComAtprotoRepoCreateRecord.CallOptions,
  ): Promise<ComAtprotoRepoCreateRecord.Response> {
    return this._client
      .call("com.atproto.repo.createRecord", opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoRepoCreateRecord.toKnownErr(e);
      });
  }

  deleteRecord(
    data?: ComAtprotoRepoDeleteRecord.InputSchema,
    opts?: ComAtprotoRepoDeleteRecord.CallOptions,
  ): Promise<ComAtprotoRepoDeleteRecord.Response> {
    return this._client
      .call("com.atproto.repo.deleteRecord", opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoRepoDeleteRecord.toKnownErr(e);
      });
  }

  putRecord(
    data?: ComAtprotoRepoPutRecord.InputSchema,
    opts?: ComAtprotoRepoPutRecord.CallOptions,
  ): Promise<ComAtprotoRepoPutRecord.Response> {
    return this._client
      .call("com.atproto.repo.putRecord", opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoRepoPutRecord.toKnownErr(e);
      });
  }

  uploadBlob(
    data?: ComAtprotoRepoUploadBlob.InputSchema,
    opts?: ComAtprotoRepoUploadBlob.CallOptions,
  ): Promise<ComAtprotoRepoUploadBlob.Response> {
    return this._client
      .call("com.atproto.repo.uploadBlob", opts?.qp, data, opts);
  }

  importRepo(
    data?: ComAtprotoRepoImportRepo.InputSchema,
    opts?: ComAtprotoRepoImportRepo.CallOptions,
  ): Promise<ComAtprotoRepoImportRepo.Response> {
    return this._client
      .call("com.atproto.repo.importRepo", opts?.qp, data, opts);
  }

  describeRepo(
    params?: ComAtprotoRepoDescribeRepo.QueryParams,
    opts?: ComAtprotoRepoDescribeRepo.CallOptions,
  ): Promise<ComAtprotoRepoDescribeRepo.Response> {
    return this._client
      .call("com.atproto.repo.describeRepo", params, undefined, opts);
  }

  getRecord(
    params?: ComAtprotoRepoGetRecord.QueryParams,
    opts?: ComAtprotoRepoGetRecord.CallOptions,
  ): Promise<ComAtprotoRepoGetRecord.Response> {
    return this._client
      .call("com.atproto.repo.getRecord", params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoRepoGetRecord.toKnownErr(e);
      });
  }

  applyWrites(
    data?: ComAtprotoRepoApplyWrites.InputSchema,
    opts?: ComAtprotoRepoApplyWrites.CallOptions,
  ): Promise<ComAtprotoRepoApplyWrites.Response> {
    return this._client
      .call("com.atproto.repo.applyWrites", opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoRepoApplyWrites.toKnownErr(e);
      });
  }

  listRecords(
    params?: ComAtprotoRepoListRecords.QueryParams,
    opts?: ComAtprotoRepoListRecords.CallOptions,
  ): Promise<ComAtprotoRepoListRecords.Response> {
    return this._client
      .call("com.atproto.repo.listRecords", params, undefined, opts);
  }
}
