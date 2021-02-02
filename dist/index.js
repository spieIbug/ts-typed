"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedSerializer = exports.Typed = void 0;
const typed_serializer_1 = require("./typed.serializer");
Object.defineProperty(exports, "TypedSerializer", { enumerable: true, get: function () { return typed_serializer_1.TypedSerializer; } });
const typed_decorator_1 = require("./typed.decorator");
exports.Typed = typed_decorator_1.default;
