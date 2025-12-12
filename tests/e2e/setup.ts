import { TransformStream, WritableStream } from 'web-streams-polyfill';

global.TransformStream = TransformStream;
global.WritableStream = WritableStream;
