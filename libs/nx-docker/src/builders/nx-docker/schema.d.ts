import { JsonObject } from '@angular-devkit/core';

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface NxDockerBuilderSchema extends JsonObject {
  /**
   * Docker repository to tag the image with
   */
  repository: string;
  /**
   * Username used to log in to a Docker registry. If not set then no login will occur
   */
  username?: string;
  /**
   * Password or personal access token used to log in to a Docker registry. If not set then no login will occur
   */
  password?: string;
  /**
   * Server address of Docker registry. If not set then will default to Docker Hub
   */
  registry?: string;
  /**
   * Comma-delimited list of tags. These will be added to the registry/repository to form the image's tags
   */
  tags?: string;
  /**
   * Automatically tags the built image with the git reference. The format of the tag depends on the type of git reference with all forward slashes replaced with -.
   */
  tag_with_ref?: string;
  /**
   * Automatically tags the built image with the git short SHA prefixed with sha-
   */
  tag_with_sha?: string;
  /**
   * Path to run the docker build from.
   */
  path?: string;
  /**
   * Name of the Dockerfile.
   */
  dockerfile?: string;
  /**
   * Sets the target stage to build
   */
  target?: string;
  /**
   * Comma-delimited list of build-time variables (build_args: arg1=value1,arg2=value2)
   */
  build_args?: string;
  /**
   * Comma-delimited list of labels to add to the built image (labels: label_name_1=label_value_1,label_name_2=label_value_2)
   */
  labels?: string;
  /**
   * Adds labels with git repository information to the built image based on the standards set out in https://github.com/opencontainers/image-spec/blob/master/annotations.md
   */
  add_git_labels?: boolean;
  /**
   * Whether to push the built image
   */
  push?: boolean;
  [k: string]: any;
}
