import { TransformStream, ReadableStream, WritableStream } from 'web-streams-polyfill/ponyfill';

global.TransformStream = TransformStream;
global.ReadableStream = ReadableStream;
global.WritableStream = WritableStream;
