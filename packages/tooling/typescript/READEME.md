# ForgeMCP TypeScript Configuration

This directory contains the shared TypeScript configuration used across
the ForgeMCP monorepo.

## Files

### base.json

Defines compiler settings shared by every project.

### library.json

Configuration for publishable libraries.

### application.json

Configuration for executable applications.

## Design Principles

- Strict by default
- ESM only
- NodeNext module resolution
- Zero duplicated compiler settings
- Convention over configuration