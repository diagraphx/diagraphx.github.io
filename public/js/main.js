(function(){
'use strict';
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c);
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))));
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)));
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1);
  }
  $throwClassCastException(arg0, arg1);
}
function $throwArrayIndexOutOFBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))));
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))));
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException());
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException());
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException();
  }
  return arg0;
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0));
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name;
      } else {
        return $throwNullPointerException();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.hashCode__I.call(instance);
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 / arg1) | 0);
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 % arg1) | 0);
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_StringIndexOutOfBoundsException(arg1));
  } else {
    return r;
  }
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOFBoundsException(null);
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4);
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4);
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)]);
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4);
    } else {
      $throwArrayStoreException(null);
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4);
  } else {
    $throwArrayStoreException(null);
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"));
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"));
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"));
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"));
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"));
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"));
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"));
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"));
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"));
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"));
}
/** @constructor */
function $c_O() {
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)));
});
$c_O.prototype.toString = (function() {
  return this.toString__T();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null;
    }
  } else {
    this.u = arg;
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice());
});
function $ah_O() {
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false;
    }
  } else {
    this.u = arg;
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Uint16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int8Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0;
    }
  } else {
    this.u = arg;
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float64Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice());
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0);
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = ({});
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass);
  }
  return this;
});
$TypeData.prototype.initClass = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (kindOrCtor === 2);
  this.name = fullName;
  this.isInterface = (kindOrCtor === 1);
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this;
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException();
      }
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null;
      }
    } else {
      this.u = arg;
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOFBoundsException(i);
    }
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v);
    }
    this.u[i] = v;
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice());
  });
  ArrayClass.prototype.$classData = this;
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this);
  }
  return this._arrayOf;
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that));
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))));
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth);
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Z", depth);
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "C", depth);
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "B", depth);
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "S", depth);
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "I", depth);
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "J", depth);
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "F", depth);
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "D", depth);
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = ({});
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
function $s_Lcom_diagraphx_web_Main__main__AT__V(args) {
  $m_Lcom_diagraphx_web_Main$().main__AT__V(args);
}
/** @constructor */
function $c_Lcom_diagraphx_web_Main$() {
}
$c_Lcom_diagraphx_web_Main$.prototype = new $h_O();
$c_Lcom_diagraphx_web_Main$.prototype.constructor = $c_Lcom_diagraphx_web_Main$;
/** @constructor */
function $h_Lcom_diagraphx_web_Main$() {
}
$h_Lcom_diagraphx_web_Main$.prototype = $c_Lcom_diagraphx_web_Main$.prototype;
$c_Lcom_diagraphx_web_Main$.prototype.main__AT__V = (function(args) {
  document.addEventListener("DOMContentLoaded", ((e) => {
    $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(document.body, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_components_Header$().Lcom_diagraphx_web_components_Header$__f_pageHeader])));
    $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(document.body, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_components_SvgBody$().Lcom_diagraphx_web_components_SvgBody$__f_svgBody])));
    $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(document.body, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_components_ToolBar$().Lcom_diagraphx_web_components_ToolBar$__f_toolBar])));
    return $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(document.body, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_components_PageFooter$().Lcom_diagraphx_web_components_PageFooter$__f_pageFooter])));
  }));
  $m_Lcom_diagraphx_web_extensions_package$().mup__Lorg_scalajs_dom_Document__F1__Lorg_scalajs_dom_Document($m_Lcom_diagraphx_web_extensions_package$().mmove__Lorg_scalajs_dom_Document__F1__Lorg_scalajs_dom_Document($m_Lcom_diagraphx_web_extensions_package$().mclick__Lorg_scalajs_dom_Document__F1__Lorg_scalajs_dom_Document(document, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$2) => {
    $m_Lcom_diagraphx_web_objects_Cache$().clearClicked__V();
  }))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$3) => {
    var this$1 = $n($m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseDownElement);
    if ((!this$1.isEmpty__Z())) {
      var x0 = this$1.get__O();
      var element = $as_Lcom_diagraphx_web_components_ElementX(x0);
      var dx = ($uD(e$3.clientX) - $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialX);
      var dy = ($uD(e$3.clientY) - $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialY);
      $n(element).move__D__D__V(dx, dy);
      $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialX = $uD(e$3.clientX);
      $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialY = $uD(e$3.clientY);
      var \u03b41$ = $n(element).Lcom_diagraphx_web_components_ElementX__f_fo.style;
      \u03b41$.setProperty("pointer-events", "none");
    }
  }))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$4) => {
    var this$2 = $n($m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseDownElement);
    if ((!this$2.isEmpty__Z())) {
      var x0$1 = this$2.get__O();
      var element$1 = $as_Lcom_diagraphx_web_components_ElementX(x0$1);
      var \u03b42$ = $n(element$1).Lcom_diagraphx_web_components_ElementX__f_fo.style;
      \u03b42$.setProperty("cursor", "grab");
      var \u03b43$ = $n(element$1).Lcom_diagraphx_web_components_ElementX__f_fo.style;
      \u03b43$.setProperty("pointer-events", "auto");
      var this$3 = $n($m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseHoverElement);
      if ((!this$3.isEmpty__Z())) {
        var x0$2 = this$3.get__O();
        var hoverElement = $as_Lcom_diagraphx_web_components_Container(x0$2);
        if ((hoverElement === null)) {
          var $x_1 = (element$1 === null);
        } else {
          var this$4 = $n(hoverElement);
          var $x_1 = (this$4 === element$1);
        }
        if ((!$x_1)) {
          var currentSvg = $n(element$1).Lcom_diagraphx_web_components_ElementX__f_fo.parentElement;
          var targetSvg = $n(hoverElement).Lcom_diagraphx_web_components_Container__f_contentDiv;
          if ((((currentSvg !== null) && (targetSvg !== null)) && (!$m_sr_BoxesRunTime$().equals__O__O__Z(currentSvg, targetSvg)))) {
            currentSvg.removeChild($n(element$1).Lcom_diagraphx_web_components_ElementX__f_fo);
            $n(element$1).setOrigin__D__D__V(10.0, 10.0);
            targetSvg.appendChild($n(element$1).Lcom_diagraphx_web_components_ElementX__f_fo);
          }
        }
      }
    }
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseDownElement = $m_s_None$();
  })));
});
var $d_Lcom_diagraphx_web_Main$ = new $TypeData().initClass($c_Lcom_diagraphx_web_Main$, "com.diagraphx.web.Main$", ({
  Lcom_diagraphx_web_Main$: 1
}));
var $n_Lcom_diagraphx_web_Main$;
function $m_Lcom_diagraphx_web_Main$() {
  if ((!$n_Lcom_diagraphx_web_Main$)) {
    $n_Lcom_diagraphx_web_Main$ = new $c_Lcom_diagraphx_web_Main$();
  }
  return $n_Lcom_diagraphx_web_Main$;
}
function $ct_Lcom_diagraphx_web_components_ElementX__T__D__D__D__D__T__T__I__($thiz, id, x, y, width, height, text, bgColor, fontSize) {
  $thiz.Lcom_diagraphx_web_components_ElementX__f_id = id;
  $thiz.Lcom_diagraphx_web_components_ElementX__f_x = x;
  $thiz.Lcom_diagraphx_web_components_ElementX__f_y = y;
  $thiz.Lcom_diagraphx_web_components_ElementX__f_width = width;
  $thiz.Lcom_diagraphx_web_components_ElementX__f_height = height;
  $thiz.Lcom_diagraphx_web_components_ElementX__f_text = text;
  $thiz.Lcom_diagraphx_web_components_ElementX__f_bgColor = bgColor;
  var $x_4 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_3 = $m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().foreignObject__Lorg_scalajs_dom_HTMLElement(), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("width", "max-content"), new $c_T2("height", "max-content"), new $c_T2("overflow", "visible"), new $c_T2("cursor", "grab")])));
  var $x_2 = $m_sr_ScalaRunTime$();
  var y$1 = ("" + $thiz.Lcom_diagraphx_web_components_ElementX__f_x);
  var $x_1 = new $c_T2("x", y$1);
  var y$2 = ("" + $thiz.Lcom_diagraphx_web_components_ElementX__f_y);
  $thiz.Lcom_diagraphx_web_components_ElementX__f_fo = $x_4.attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_3, $x_2.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([$x_1, new $c_T2("y", y$2)])));
  var $x_13 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_12 = $m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement();
  var $x_11 = $m_sr_ScalaRunTime$();
  var $x_10 = new $c_T2("resize", "none");
  var $x_9 = new $c_T2("overflow", "auto");
  var y$3 = ($thiz.Lcom_diagraphx_web_components_ElementX__f_width + "px");
  var $x_8 = new $c_T2("width", y$3);
  var y$4 = ($thiz.Lcom_diagraphx_web_components_ElementX__f_height + "px");
  var $x_7 = new $c_T2("height", y$4);
  var $x_6 = new $c_T2("position", "relative");
  var $x_5 = new $c_T2("box-shadow", "0 8px 16px 0 rgba(0,0,0,0.22), 0 8px 16px 0 rgba(255,255,255,0.10) inset");
  var y$5 = $thiz.Lcom_diagraphx_web_components_ElementX__f_bgColor;
  $thiz.Lcom_diagraphx_web_components_ElementX__f_resizeDiv = $x_13.styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_12, $x_11.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([$x_10, $x_9, $x_8, $x_7, $x_6, $x_5, new $c_T2("background-color", y$5), new $c_T2("border-radius", "8px"), new $c_T2("padding", "10px")])));
  $thiz.Lcom_diagraphx_web_components_ElementX__f_observer = new ResizeObserver(((entries, _$1) => {
    var len = $uI(entries.length);
    var i = 0;
    while ((i < len)) {
      var x0 = entries[i];
      var x$1 = x0.target;
      var y$6 = $thiz.resizeDiv__Lorg_scalajs_dom_HTMLElement();
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y$6)) {
        var this$35 = $m_s_Console$();
        var this$36 = $n(this$35.out__Ljava_io_PrintStream());
        this$36.java$lang$JSConsoleBasedPrintStream$$printString__T__V("ResizeObserver: Element resized\n");
        var this$37 = $n($m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseHoverElement);
        if ((!this$37.isEmpty__Z())) {
          var x0$1 = this$37.get__O();
          var hoverElement = $as_Lcom_diagraphx_web_components_Container(x0$1);
          var \u03b41$ = $n(hoverElement).Lcom_diagraphx_web_components_ElementX__f_fo.style;
          \u03b41$.setProperty("cursor", "grab");
          var \u03b42$ = $n(hoverElement).Lcom_diagraphx_web_components_ElementX__f_fo.style;
          \u03b42$.setProperty("pointer-events", "auto");
        }
        $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseDownElement = $m_s_None$();
      }
      i = ((1 + i) | 0);
    }
  }));
  $thiz.Lcom_diagraphx_web_components_ElementX__f_contentDiv = $m_Lcom_diagraphx_web_extensions_package$().mclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().mdown__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().editableOnDblClick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("width", "100%"), new $c_T2("height", "100%"), new $c_T2("white-space", "pre-wrap"), new $c_T2("word-break", "break-word"), new $c_T2("overflow-wrap", "break-word"), new $c_T2("box-sizing", "border-box"), new $c_T2("overflow", "auto"), new $c_T2("outline", "none"), new $c_T2("align-items", "center"), new $c_T2("justify-content", "center"), new $c_T2("text-align", "center"), new $c_T2("display", "grid"), new $c_T2("position", "relative")]))), $thiz.Lcom_diagraphx_web_components_ElementX__f_text), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((newText) => {
    var newText$1 = $as_T(newText);
    $thiz.Lcom_diagraphx_web_components_ElementX__f_text = newText$1;
  }))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => {
    var this$65 = $m_s_Console$();
    var this$66 = $n(this$65.out__Ljava_io_PrintStream());
    this$66.java$lang$JSConsoleBasedPrintStream$$printString__T__V("mouse down on element\n");
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialX = $uD(e.clientX);
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialY = $uD(e.clientY);
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseDownElement = new $c_s_Some($thiz);
    var \u03b43$ = $thiz.Lcom_diagraphx_web_components_ElementX__f_fo.style;
    \u03b43$.setProperty("cursor", "grabbing");
    e.stopPropagation();
  }))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$2) => {
    $m_Lcom_diagraphx_web_objects_Cache$().clearClicked__V();
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_clickedElement = new $c_s_Some($thiz);
    var \u03b44$ = $thiz.resizeDiv__Lorg_scalajs_dom_HTMLElement().style;
    \u03b44$.setProperty("resize", "both");
    e$2.stopPropagation();
  })));
  return $thiz;
}
/** @constructor */
function $c_Lcom_diagraphx_web_components_ElementX() {
  this.Lcom_diagraphx_web_components_ElementX__f_id = null;
  this.Lcom_diagraphx_web_components_ElementX__f_x = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_y = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_width = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_height = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_text = null;
  this.Lcom_diagraphx_web_components_ElementX__f_bgColor = null;
  this.Lcom_diagraphx_web_components_ElementX__f_fo = null;
  this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv = null;
  this.Lcom_diagraphx_web_components_ElementX__f_observer = null;
  this.Lcom_diagraphx_web_components_ElementX__f_contentDiv = null;
}
$c_Lcom_diagraphx_web_components_ElementX.prototype = new $h_O();
$c_Lcom_diagraphx_web_components_ElementX.prototype.constructor = $c_Lcom_diagraphx_web_components_ElementX;
/** @constructor */
function $h_Lcom_diagraphx_web_components_ElementX() {
}
$h_Lcom_diagraphx_web_components_ElementX.prototype = $c_Lcom_diagraphx_web_components_ElementX.prototype;
$c_Lcom_diagraphx_web_components_ElementX.prototype.resizeDiv__Lorg_scalajs_dom_HTMLElement = (function() {
  return this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv;
});
$c_Lcom_diagraphx_web_components_ElementX.prototype.setOrigin__D__D__V = (function(x1, y1) {
  this.Lcom_diagraphx_web_components_ElementX__f_x = x1;
  this.Lcom_diagraphx_web_components_ElementX__f_y = y1;
  var $x_4 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_3 = this.Lcom_diagraphx_web_components_ElementX__f_fo;
  var $x_2 = $m_sr_ScalaRunTime$();
  var y = ("" + this.Lcom_diagraphx_web_components_ElementX__f_x);
  var $x_1 = new $c_T2("x", y);
  var y$1 = ("" + this.Lcom_diagraphx_web_components_ElementX__f_y);
  $x_4.attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_3, $x_2.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([$x_1, new $c_T2("y", y$1)])));
});
$c_Lcom_diagraphx_web_components_ElementX.prototype.move__D__D__V = (function(dx, dy) {
  this.Lcom_diagraphx_web_components_ElementX__f_x = (this.Lcom_diagraphx_web_components_ElementX__f_x + dx);
  this.Lcom_diagraphx_web_components_ElementX__f_y = (this.Lcom_diagraphx_web_components_ElementX__f_y + dy);
  var $x_4 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_3 = this.Lcom_diagraphx_web_components_ElementX__f_fo;
  var $x_2 = $m_sr_ScalaRunTime$();
  var y = ("" + this.Lcom_diagraphx_web_components_ElementX__f_x);
  var $x_1 = new $c_T2("x", y);
  var y$1 = ("" + this.Lcom_diagraphx_web_components_ElementX__f_y);
  $x_4.attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_3, $x_2.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([$x_1, new $c_T2("y", y$1)])));
});
function $as_Lcom_diagraphx_web_components_ElementX(obj) {
  return (((obj instanceof $c_Lcom_diagraphx_web_components_ElementX) || (obj === null)) ? obj : $throwClassCastException(obj, "com.diagraphx.web.components.ElementX"));
}
function $isArrayOf_Lcom_diagraphx_web_components_ElementX(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_diagraphx_web_components_ElementX)));
}
function $asArrayOf_Lcom_diagraphx_web_components_ElementX(obj, depth) {
  return (($isArrayOf_Lcom_diagraphx_web_components_ElementX(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.diagraphx.web.components.ElementX;", depth));
}
/** @constructor */
function $c_Lcom_diagraphx_web_components_Header$() {
  this.Lcom_diagraphx_web_components_Header$__f_pageHeader = null;
  $n_Lcom_diagraphx_web_components_Header$ = this;
  this.Lcom_diagraphx_web_components_Header$__f_pageHeader = $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().header__Lorg_scalajs_dom_HTMLElement(), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("position", "fixed"), new $c_T2("height", "40px"), new $c_T2("left", "10px"), new $c_T2("top", "10px"), new $c_T2("border-radius", "8px"), new $c_T2("padding", "0 16px"), new $c_T2("background", "#008476"), new $c_T2("color", "#f1f1f1"), new $c_T2("display", "flex"), new $c_T2("align-items", "center"), new $c_T2("justify-content", "center"), new $c_T2("font-size", "20px"), new $c_T2("font-weight", "bold"), new $c_T2("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")]))), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().img__Lorg_scalajs_dom_HTMLElement(), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("src", "public/images/favicon.svg")]))), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("height", "24px"), new $c_T2("margin-right", "8px")]))), $m_Lcom_diagraphx_web_extensions_package$().itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), "Diagraphx")])));
}
$c_Lcom_diagraphx_web_components_Header$.prototype = new $h_O();
$c_Lcom_diagraphx_web_components_Header$.prototype.constructor = $c_Lcom_diagraphx_web_components_Header$;
/** @constructor */
function $h_Lcom_diagraphx_web_components_Header$() {
}
$h_Lcom_diagraphx_web_components_Header$.prototype = $c_Lcom_diagraphx_web_components_Header$.prototype;
var $d_Lcom_diagraphx_web_components_Header$ = new $TypeData().initClass($c_Lcom_diagraphx_web_components_Header$, "com.diagraphx.web.components.Header$", ({
  Lcom_diagraphx_web_components_Header$: 1
}));
var $n_Lcom_diagraphx_web_components_Header$;
function $m_Lcom_diagraphx_web_components_Header$() {
  if ((!$n_Lcom_diagraphx_web_components_Header$)) {
    $n_Lcom_diagraphx_web_components_Header$ = new $c_Lcom_diagraphx_web_components_Header$();
  }
  return $n_Lcom_diagraphx_web_components_Header$;
}
/** @constructor */
function $c_Lcom_diagraphx_web_components_PageFooter$() {
  this.Lcom_diagraphx_web_components_PageFooter$__f_pageFooter = null;
  $n_Lcom_diagraphx_web_components_PageFooter$ = this;
  this.Lcom_diagraphx_web_components_PageFooter$__f_pageFooter = $m_Lcom_diagraphx_web_extensions_package$().itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().footer__Lorg_scalajs_dom_HTMLElement(), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("position", "fixed"), new $c_T2("bottom", "0"), new $c_T2("left", "0"), new $c_T2("width", "100%"), new $c_T2("text-align", "left"), new $c_T2("padding", "10px"), new $c_T2("background-color", "#f1f1f1"), new $c_T2("font-size", "14px")]))), "Diagraphx \u00a9 2025");
}
$c_Lcom_diagraphx_web_components_PageFooter$.prototype = new $h_O();
$c_Lcom_diagraphx_web_components_PageFooter$.prototype.constructor = $c_Lcom_diagraphx_web_components_PageFooter$;
/** @constructor */
function $h_Lcom_diagraphx_web_components_PageFooter$() {
}
$h_Lcom_diagraphx_web_components_PageFooter$.prototype = $c_Lcom_diagraphx_web_components_PageFooter$.prototype;
var $d_Lcom_diagraphx_web_components_PageFooter$ = new $TypeData().initClass($c_Lcom_diagraphx_web_components_PageFooter$, "com.diagraphx.web.components.PageFooter$", ({
  Lcom_diagraphx_web_components_PageFooter$: 1
}));
var $n_Lcom_diagraphx_web_components_PageFooter$;
function $m_Lcom_diagraphx_web_components_PageFooter$() {
  if ((!$n_Lcom_diagraphx_web_components_PageFooter$)) {
    $n_Lcom_diagraphx_web_components_PageFooter$ = new $c_Lcom_diagraphx_web_components_PageFooter$();
  }
  return $n_Lcom_diagraphx_web_components_PageFooter$;
}
/** @constructor */
function $c_Lcom_diagraphx_web_components_StartEnd$() {
}
$c_Lcom_diagraphx_web_components_StartEnd$.prototype = new $h_O();
$c_Lcom_diagraphx_web_components_StartEnd$.prototype.constructor = $c_Lcom_diagraphx_web_components_StartEnd$;
/** @constructor */
function $h_Lcom_diagraphx_web_components_StartEnd$() {
}
$h_Lcom_diagraphx_web_components_StartEnd$.prototype = $c_Lcom_diagraphx_web_components_StartEnd$.prototype;
$c_Lcom_diagraphx_web_components_StartEnd$.prototype.apply__T__Lcom_diagraphx_web_components_StartEnd = (function(text) {
  var se = new $c_Lcom_diagraphx_web_components_StartEnd();
  se.Lcom_diagraphx_web_components_ElementX__f_text = text;
  return se;
});
var $d_Lcom_diagraphx_web_components_StartEnd$ = new $TypeData().initClass($c_Lcom_diagraphx_web_components_StartEnd$, "com.diagraphx.web.components.StartEnd$", ({
  Lcom_diagraphx_web_components_StartEnd$: 1
}));
var $n_Lcom_diagraphx_web_components_StartEnd$;
function $m_Lcom_diagraphx_web_components_StartEnd$() {
  if ((!$n_Lcom_diagraphx_web_components_StartEnd$)) {
    $n_Lcom_diagraphx_web_components_StartEnd$ = new $c_Lcom_diagraphx_web_components_StartEnd$();
  }
  return $n_Lcom_diagraphx_web_components_StartEnd$;
}
/** @constructor */
function $c_Lcom_diagraphx_web_components_SvgBody$() {
  this.Lcom_diagraphx_web_components_SvgBody$__f_svgBody = null;
  $n_Lcom_diagraphx_web_components_SvgBody$ = this;
  var $x_7 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_6 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_5 = $m_Lcom_diagraphx_web_objects_ElementHelper$().svg__Lorg_scalajs_dom_HTMLElement();
  var $x_4 = $m_sr_ScalaRunTime$();
  var $x_3 = new $c_T2("id", "svgBody");
  var $x_2 = new $c_T2("width", "100vw");
  var $x_1 = new $c_T2("height", "100vh");
  var y = ((("0 0 " + $uD(window.innerWidth)) + " ") + $uD(window.innerHeight));
  var element = $x_7.styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_6.attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_5, $x_4.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([$x_3, $x_2, $x_1, new $c_T2("viewBox", y)]))), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("background-color", "rgb(240, 240, 240)")])));
  window.addEventListener("resize", ((_$1) => {
    var $x_9 = $m_Lcom_diagraphx_web_extensions_package$();
    var $x_8 = $m_sr_ScalaRunTime$();
    var y$1 = ((("0 0 " + $uD(window.innerWidth)) + " ") + $uD(window.innerHeight));
    return $x_9.attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(element, $x_8.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("viewBox", y$1)])));
  }));
  this.Lcom_diagraphx_web_components_SvgBody$__f_svgBody = element;
}
$c_Lcom_diagraphx_web_components_SvgBody$.prototype = new $h_O();
$c_Lcom_diagraphx_web_components_SvgBody$.prototype.constructor = $c_Lcom_diagraphx_web_components_SvgBody$;
/** @constructor */
function $h_Lcom_diagraphx_web_components_SvgBody$() {
}
$h_Lcom_diagraphx_web_components_SvgBody$.prototype = $c_Lcom_diagraphx_web_components_SvgBody$.prototype;
var $d_Lcom_diagraphx_web_components_SvgBody$ = new $TypeData().initClass($c_Lcom_diagraphx_web_components_SvgBody$, "com.diagraphx.web.components.SvgBody$", ({
  Lcom_diagraphx_web_components_SvgBody$: 1
}));
var $n_Lcom_diagraphx_web_components_SvgBody$;
function $m_Lcom_diagraphx_web_components_SvgBody$() {
  if ((!$n_Lcom_diagraphx_web_components_SvgBody$)) {
    $n_Lcom_diagraphx_web_components_SvgBody$ = new $c_Lcom_diagraphx_web_components_SvgBody$();
  }
  return $n_Lcom_diagraphx_web_components_SvgBody$;
}
/** @constructor */
function $c_Lcom_diagraphx_web_components_ToolBar$() {
  this.Lcom_diagraphx_web_components_ToolBar$__f_toolBar = null;
  $n_Lcom_diagraphx_web_components_ToolBar$ = this;
  var startEnd = $m_Lcom_diagraphx_web_extensions_package$().mclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), "\u25cb"), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("font-size", "30px"), new $c_T2("cursor", "pointer"), new $c_T2("color", "#f1f1f1"), new $c_T2("height", "30px"), new $c_T2("width", "30px"), new $c_T2("display", "flex"), new $c_T2("align-items", "center"), new $c_T2("justify-content", "center")]))), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("title", "Add a Start/end")]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => {
    $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_components_SvgBody$().Lcom_diagraphx_web_components_SvgBody$__f_svgBody, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$n($m_Lcom_diagraphx_web_components_StartEnd$().apply__T__Lcom_diagraphx_web_components_StartEnd("Start/End")).view__Lorg_scalajs_dom_HTMLElement()])));
  })));
  var note = $m_Lcom_diagraphx_web_extensions_package$().mclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), "\ud83d\udcc4"), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("font-size", "20px"), new $c_T2("cursor", "pointer"), new $c_T2("color", "#f1f1f1"), new $c_T2("height", "30px"), new $c_T2("width", "30px"), new $c_T2("display", "flex"), new $c_T2("align-items", "center"), new $c_T2("justify-content", "center")]))), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("title", "Add a Note")]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$2) => {
    $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_components_SvgBody$().Lcom_diagraphx_web_components_SvgBody$__f_svgBody, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([new $c_Lcom_diagraphx_web_components_Note().view__Lorg_scalajs_dom_HTMLElement()])));
  })));
  var instruction = $m_Lcom_diagraphx_web_extensions_package$().mclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), "\u25a1"), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("font-size", "30px"), new $c_T2("cursor", "pointer"), new $c_T2("color", "#f1f1f1"), new $c_T2("height", "30px"), new $c_T2("width", "30px"), new $c_T2("display", "flex"), new $c_T2("align-items", "center"), new $c_T2("justify-content", "center")]))), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("title", "Add an Instruction")]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$3) => {
    $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_components_SvgBody$().Lcom_diagraphx_web_components_SvgBody$__f_svgBody, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([new $c_Lcom_diagraphx_web_components_Instruction().view__Lorg_scalajs_dom_HTMLElement()])));
  })));
  var decision = $m_Lcom_diagraphx_web_extensions_package$().mclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), "\u25c7"), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("font-size", "30px"), new $c_T2("cursor", "pointer"), new $c_T2("color", "#f1f1f1"), new $c_T2("height", "30px"), new $c_T2("width", "30px"), new $c_T2("display", "flex"), new $c_T2("align-items", "center"), new $c_T2("justify-content", "center")]))), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("title", "Add a Decision")]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$4) => {
    $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_components_SvgBody$().Lcom_diagraphx_web_components_SvgBody$__f_svgBody, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([new $c_Lcom_diagraphx_web_components_Decision().view__Lorg_scalajs_dom_HTMLElement()])));
  })));
  var container = $m_Lcom_diagraphx_web_extensions_package$().mclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), "\u25a3"), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("font-size", "28px"), new $c_T2("cursor", "pointer"), new $c_T2("color", "#f1f1f1"), new $c_T2("height", "30px"), new $c_T2("width", "30px"), new $c_T2("display", "flex"), new $c_T2("align-items", "center"), new $c_T2("justify-content", "center")]))), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("title", "Add a Container")]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$5) => {
    $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_components_SvgBody$().Lcom_diagraphx_web_components_SvgBody$__f_svgBody, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([new $c_Lcom_diagraphx_web_components_Container().view__Lorg_scalajs_dom_HTMLElement()])));
  })));
  var holder = $m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("position", "fixed"), new $c_T2("top", "25%"), new $c_T2("left", "10px"), new $c_T2("transform", "translateY(-50%)"), new $c_T2("background-color", "#008476"), new $c_T2("border-radius", "8px"), new $c_T2("padding", "5px"), new $c_T2("display", "flex"), new $c_T2("flex-direction", "column"), new $c_T2("align-items", "center"), new $c_T2("gap", "5px")])));
  $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(holder, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([container])));
  $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(holder, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([instruction])));
  $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(holder, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([note])));
  $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(holder, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([startEnd])));
  $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(holder, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([decision])));
  this.Lcom_diagraphx_web_components_ToolBar$__f_toolBar = holder;
}
$c_Lcom_diagraphx_web_components_ToolBar$.prototype = new $h_O();
$c_Lcom_diagraphx_web_components_ToolBar$.prototype.constructor = $c_Lcom_diagraphx_web_components_ToolBar$;
/** @constructor */
function $h_Lcom_diagraphx_web_components_ToolBar$() {
}
$h_Lcom_diagraphx_web_components_ToolBar$.prototype = $c_Lcom_diagraphx_web_components_ToolBar$.prototype;
var $d_Lcom_diagraphx_web_components_ToolBar$ = new $TypeData().initClass($c_Lcom_diagraphx_web_components_ToolBar$, "com.diagraphx.web.components.ToolBar$", ({
  Lcom_diagraphx_web_components_ToolBar$: 1
}));
var $n_Lcom_diagraphx_web_components_ToolBar$;
function $m_Lcom_diagraphx_web_components_ToolBar$() {
  if ((!$n_Lcom_diagraphx_web_components_ToolBar$)) {
    $n_Lcom_diagraphx_web_components_ToolBar$ = new $c_Lcom_diagraphx_web_components_ToolBar$();
  }
  return $n_Lcom_diagraphx_web_components_ToolBar$;
}
/** @constructor */
function $c_Lcom_diagraphx_web_extensions_package$() {
}
$c_Lcom_diagraphx_web_extensions_package$.prototype = new $h_O();
$c_Lcom_diagraphx_web_extensions_package$.prototype.constructor = $c_Lcom_diagraphx_web_extensions_package$;
/** @constructor */
function $h_Lcom_diagraphx_web_extensions_package$() {
}
$h_Lcom_diagraphx_web_extensions_package$.prototype = $c_Lcom_diagraphx_web_extensions_package$.prototype;
$c_Lcom_diagraphx_web_extensions_package$.prototype.mclick__Lorg_scalajs_dom_Document__F1__Lorg_scalajs_dom_Document = (function(e, handler) {
  e.addEventListener("click", ((e$2) => $n(handler).apply__O__O(e$2)));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.mmove__Lorg_scalajs_dom_Document__F1__Lorg_scalajs_dom_Document = (function(e, handler) {
  e.addEventListener("mousemove", ((e$2) => $n(handler).apply__O__O(e$2)));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.mup__Lorg_scalajs_dom_Document__F1__Lorg_scalajs_dom_Document = (function(e, handler) {
  e.addEventListener("mouseup", ((e$2) => $n(handler).apply__O__O(e$2)));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement = (function(e, o) {
  $n(o).foreach__F1__V(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((child) => {
    if ((child !== null)) {
      e.appendChild(child);
    }
  })));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement = (function(e, attrs) {
  $n(attrs).foreach__F1__V(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $as_T2(x$1);
    matchResult3: {
      if ((x$1$1 !== null)) {
        var key = $as_T($n(x$1$1).T2__f__1);
        var value = $as_T($n(x$1$1).T2__f__2);
        e.setAttribute(key, value);
        break matchResult3;
      }
      throw new $c_s_MatchError(x$1$1);
    }
  })));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement = (function(e, styles) {
  $n(styles).foreach__F1__V(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $as_T2(x$1);
    matchResult4: {
      if ((x$1$1 !== null)) {
        var key = $as_T($n(x$1$1).T2__f__1);
        var value = $as_T($n(x$1$1).T2__f__2);
        var \u03b41$ = e.style;
        \u03b41$.setProperty(key, value);
        break matchResult4;
      }
      throw new $c_s_MatchError(x$1$1);
    }
  })));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement = (function(e, content) {
  e.textContent = content;
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.mclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement = (function(e, handler) {
  e.addEventListener("click", ((e$2) => $n(handler).apply__O__O(e$2)));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.mhover__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement = (function(e, handler) {
  e.addEventListener("mouseover", ((e$2) => $n(handler).apply__O__O(e$2)));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.mout__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement = (function(e, handler) {
  e.addEventListener("mouseout", ((e$2) => $n(handler).apply__O__O(e$2)));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.mdown__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement = (function(e, handler) {
  e.addEventListener("mousedown", ((e$2) => $n(handler).apply__O__O(e$2)));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.mdblclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement = (function(e, handler) {
  e.addEventListener("dblclick", ((e$2) => $n(handler).apply__O__O(e$2)));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.fblur__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement = (function(e, handler) {
  e.addEventListener("blur", ((e$2) => $n(handler).apply__O__O(e$2)));
  return e;
});
$c_Lcom_diagraphx_web_extensions_package$.prototype.editableOnDblClick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement = (function(e, onUpdate) {
  $m_Lcom_diagraphx_web_extensions_package$().mdblclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement(e, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    e.setAttribute("contenteditable", "true");
    e.focus();
  })));
  $m_Lcom_diagraphx_web_extensions_package$().fblur__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement(e, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    e.setAttribute("contenteditable", "false");
    $n(onUpdate).apply__O__O($as_T(e.textContent));
  })));
  return e;
});
var $d_Lcom_diagraphx_web_extensions_package$ = new $TypeData().initClass($c_Lcom_diagraphx_web_extensions_package$, "com.diagraphx.web.extensions.package$", ({
  Lcom_diagraphx_web_extensions_package$: 1
}));
var $n_Lcom_diagraphx_web_extensions_package$;
function $m_Lcom_diagraphx_web_extensions_package$() {
  if ((!$n_Lcom_diagraphx_web_extensions_package$)) {
    $n_Lcom_diagraphx_web_extensions_package$ = new $c_Lcom_diagraphx_web_extensions_package$();
  }
  return $n_Lcom_diagraphx_web_extensions_package$;
}
/** @constructor */
function $c_Lcom_diagraphx_web_objects_Cache$() {
  this.Lcom_diagraphx_web_objects_Cache$__f_clickedElement = null;
  this.Lcom_diagraphx_web_objects_Cache$__f_mouseDownElement = null;
  this.Lcom_diagraphx_web_objects_Cache$__f_mouseHoverElement = null;
  this.Lcom_diagraphx_web_objects_Cache$__f_initialX = 0.0;
  this.Lcom_diagraphx_web_objects_Cache$__f_initialY = 0.0;
  $n_Lcom_diagraphx_web_objects_Cache$ = this;
  this.Lcom_diagraphx_web_objects_Cache$__f_clickedElement = $m_s_None$();
  this.Lcom_diagraphx_web_objects_Cache$__f_mouseDownElement = $m_s_None$();
  this.Lcom_diagraphx_web_objects_Cache$__f_mouseHoverElement = $m_s_None$();
  this.Lcom_diagraphx_web_objects_Cache$__f_initialX = 0.0;
  this.Lcom_diagraphx_web_objects_Cache$__f_initialY = 0.0;
}
$c_Lcom_diagraphx_web_objects_Cache$.prototype = new $h_O();
$c_Lcom_diagraphx_web_objects_Cache$.prototype.constructor = $c_Lcom_diagraphx_web_objects_Cache$;
/** @constructor */
function $h_Lcom_diagraphx_web_objects_Cache$() {
}
$h_Lcom_diagraphx_web_objects_Cache$.prototype = $c_Lcom_diagraphx_web_objects_Cache$.prototype;
$c_Lcom_diagraphx_web_objects_Cache$.prototype.clearClicked__V = (function() {
  var this$1 = $n(this.Lcom_diagraphx_web_objects_Cache$__f_clickedElement);
  if ((!this$1.isEmpty__Z())) {
    var x0 = this$1.get__O();
    var _$1 = $as_Lcom_diagraphx_web_components_ElementX(x0);
    var \u03b41$ = $n(_$1).resizeDiv__Lorg_scalajs_dom_HTMLElement().style;
    \u03b41$.setProperty("resize", "none");
  }
  this.Lcom_diagraphx_web_objects_Cache$__f_clickedElement = $m_s_None$();
});
var $d_Lcom_diagraphx_web_objects_Cache$ = new $TypeData().initClass($c_Lcom_diagraphx_web_objects_Cache$, "com.diagraphx.web.objects.Cache$", ({
  Lcom_diagraphx_web_objects_Cache$: 1
}));
var $n_Lcom_diagraphx_web_objects_Cache$;
function $m_Lcom_diagraphx_web_objects_Cache$() {
  if ((!$n_Lcom_diagraphx_web_objects_Cache$)) {
    $n_Lcom_diagraphx_web_objects_Cache$ = new $c_Lcom_diagraphx_web_objects_Cache$();
  }
  return $n_Lcom_diagraphx_web_objects_Cache$;
}
/** @constructor */
function $c_Lcom_diagraphx_web_objects_ElementHelper$() {
}
$c_Lcom_diagraphx_web_objects_ElementHelper$.prototype = new $h_O();
$c_Lcom_diagraphx_web_objects_ElementHelper$.prototype.constructor = $c_Lcom_diagraphx_web_objects_ElementHelper$;
/** @constructor */
function $h_Lcom_diagraphx_web_objects_ElementHelper$() {
}
$h_Lcom_diagraphx_web_objects_ElementHelper$.prototype = $c_Lcom_diagraphx_web_objects_ElementHelper$.prototype;
$c_Lcom_diagraphx_web_objects_ElementHelper$.prototype.header__Lorg_scalajs_dom_HTMLElement = (function() {
  return document.createElement("header");
});
$c_Lcom_diagraphx_web_objects_ElementHelper$.prototype.footer__Lorg_scalajs_dom_HTMLElement = (function() {
  return document.createElement("footer");
});
$c_Lcom_diagraphx_web_objects_ElementHelper$.prototype.div__Lorg_scalajs_dom_HTMLElement = (function() {
  return document.createElement("div");
});
$c_Lcom_diagraphx_web_objects_ElementHelper$.prototype.img__Lorg_scalajs_dom_HTMLElement = (function() {
  return document.createElement("img");
});
$c_Lcom_diagraphx_web_objects_ElementHelper$.prototype.foreignObject__Lorg_scalajs_dom_HTMLElement = (function() {
  return document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
});
$c_Lcom_diagraphx_web_objects_ElementHelper$.prototype.svg__Lorg_scalajs_dom_HTMLElement = (function() {
  return document.createElementNS("http://www.w3.org/2000/svg", "svg");
});
var $d_Lcom_diagraphx_web_objects_ElementHelper$ = new $TypeData().initClass($c_Lcom_diagraphx_web_objects_ElementHelper$, "com.diagraphx.web.objects.ElementHelper$", ({
  Lcom_diagraphx_web_objects_ElementHelper$: 1
}));
var $n_Lcom_diagraphx_web_objects_ElementHelper$;
function $m_Lcom_diagraphx_web_objects_ElementHelper$() {
  if ((!$n_Lcom_diagraphx_web_objects_ElementHelper$)) {
    $n_Lcom_diagraphx_web_objects_ElementHelper$ = new $c_Lcom_diagraphx_web_objects_ElementHelper$();
  }
  return $n_Lcom_diagraphx_web_objects_ElementHelper$;
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]));
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  jl_FloatingPointBits$: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.jl_System$Streams$__f_out = null;
  this.jl_System$Streams$__f_err = null;
  $n_jl_System$Streams$ = this;
  this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
}
$c_jl_System$Streams$.prototype = new $h_O();
$c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $c_jl_System$Streams$.prototype;
var $d_jl_System$Streams$ = new $TypeData().initClass($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  jl_System$Streams$: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().initClass(0, "java.lang.Void", ({
  jl_Void: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  $n(array);
  throw new $c_jl_IllegalArgumentException("argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length;
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length;
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length;
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length;
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length;
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length;
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length;
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length;
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length;
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array);
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  jl_reflect_Array$: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi;
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi));
  } else {
    return false;
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi);
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24);
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16);
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this);
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi);
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)));
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi));
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)));
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo + $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo - $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi);
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"));
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)));
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth));
}
var $d_RTLong = new $TypeData().initClass($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  RTLong: 1
}));
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1);
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0));
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0));
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0));
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1));
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9;
    }
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0));
    }
  }
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo;
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr);
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $x_1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $x_1) + $uD((x$1 >>> 0.0))));
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1;
  } else {
    var abs__lo = lo;
    var abs__hi = hi;
  }
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo;
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo));
  }
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes));
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1);
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi;
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1;
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi;
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1;
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  RTLong$: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)));
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"));
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)));
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth));
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    $n(f).apply__O__O($n(it).next__O());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end);
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
    }
  }
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.sc_Iterator$ConcatIteratorCell__f_head = null;
  this.sc_Iterator$ConcatIteratorCell__f_tail = null;
  this.sc_Iterator$ConcatIteratorCell__f_head = head;
  this.sc_Iterator$ConcatIteratorCell__f_tail = tail;
}
$c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$c_sc_Iterator$ConcatIteratorCell.prototype.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $c_sc_Iterator$ConcatIteratorCell.prototype;
$c_sc_Iterator$ConcatIteratorCell.prototype.headIterator__sc_Iterator = (function() {
  return $n($as_sc_IterableOnce($n(this.sc_Iterator$ConcatIteratorCell__f_head).apply__O())).iterator__sc_Iterator();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().initClass($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  sc_Iterator$ConcatIteratorCell: 1
}));
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true;
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y);
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y);
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2);
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $n(x3).c;
      return (x2$1 === this$1);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $n(x3).c;
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2);
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi));
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2);
    } else {
      return false;
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3);
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1));
    } else {
      return false;
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $n(xc).c;
    var this$2 = $n(x2).c;
    return (this$1 === this$2);
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $n(xc).c;
      return (x2$1 === this$3);
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $n(xc).c;
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  sr_BoxesRunTime$: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return $n(x2).get(idx);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return $n(x3).get(idx);
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return $n(x4).get(idx);
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return $n(x5).get(idx);
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx);
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC($n(x7).get(idx));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return $n(x8).get(idx);
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return $n(x9).get(idx);
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return $n(x10).get(idx);
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")");
});
$c_sr_ScalaRunTime$.prototype.wrapRefArray__AO__sci_ArraySeq = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if (($n(xs).u.length === 0)) {
    var this$1 = $m_sci_ArraySeq$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$1);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  sr_ScalaRunTime$: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv));
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3);
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi));
  } else {
    return $dp_hashCode__I($n(x));
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().initClass($c_sr_Statics$, "scala.runtime.Statics$", ({
  sr_Statics$: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init;
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().initClass($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  s_util_DynamicVariable: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length));
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()));
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())));
    }
    var i = 0;
    while ((i < arr)) {
      var $x_1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0);
    }
    return this.finalizeHash__I__I__I(h, arr);
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n);
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0);
  }
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1);
  }
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $x_1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0);
      }
      return this.finalizeHash__I__I__I(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().getLength__O__I(a);
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last));
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var this$1 = $n(elems);
    this$1.head__E();
  }
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n));
});
/** @constructor */
function $c_Lcom_diagraphx_web_components_Container() {
  this.Lcom_diagraphx_web_components_ElementX__f_id = null;
  this.Lcom_diagraphx_web_components_ElementX__f_x = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_y = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_width = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_height = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_text = null;
  this.Lcom_diagraphx_web_components_ElementX__f_bgColor = null;
  this.Lcom_diagraphx_web_components_ElementX__f_fo = null;
  this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv = null;
  this.Lcom_diagraphx_web_components_ElementX__f_observer = null;
  this.Lcom_diagraphx_web_components_ElementX__f_contentDiv = null;
  this.Lcom_diagraphx_web_components_Container__f_contentDiv = null;
  $ct_Lcom_diagraphx_web_components_ElementX__T__D__D__D__D__T__T__I__(this, "", 100.0, 100.0, 100.0, 50.0, "", "#f1f1f1", 14);
  this.Lcom_diagraphx_web_components_ElementX__f_id = "container";
  var $x_8 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_7 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_6 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_5 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_4 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_3 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_2 = $m_Lcom_diagraphx_web_objects_ElementHelper$().svg__Lorg_scalajs_dom_HTMLElement();
  var $x_1 = $m_sr_ScalaRunTime$();
  var y = this.Lcom_diagraphx_web_components_ElementX__f_id;
  this.Lcom_diagraphx_web_components_Container__f_contentDiv = $x_8.mout__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($x_7.mhover__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($x_6.mclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($x_5.mdown__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($x_4.styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_3.attrs__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_2, $x_1.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("id", y), new $c_T2("viewBox", "0 0 600 400")]))), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("width", "100%"), new $c_T2("height", "100%"), new $c_T2("box-sizing", "border-box"), new $c_T2("overflow", "auto"), new $c_T2("outline", "none"), new $c_T2("align-items", "center"), new $c_T2("justify-content", "center"), new $c_T2("display", "grid")]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => {
    var this$23 = $m_s_Console$();
    var this$24 = $n(this$23.out__Ljava_io_PrintStream());
    this$24.java$lang$JSConsoleBasedPrintStream$$printString__T__V("mouse down on container\n");
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialX = $uD(e.clientX);
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialY = $uD(e.clientY);
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseDownElement = new $c_s_Some(this);
    var \u03b41$ = this.Lcom_diagraphx_web_components_ElementX__f_fo.style;
    \u03b41$.setProperty("cursor", "grabbing");
    e.stopPropagation();
  }))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$2) => {
    $m_Lcom_diagraphx_web_objects_Cache$().clearClicked__V();
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_clickedElement = new $c_s_Some(this);
    var \u03b42$ = this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv.style;
    \u03b42$.setProperty("resize", "both");
    e$2.stopPropagation();
  }))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$3) => {
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseHoverElement = new $c_s_Some(this);
  }))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$4) => {
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseHoverElement = $m_s_None$();
  })));
}
$c_Lcom_diagraphx_web_components_Container.prototype = new $h_Lcom_diagraphx_web_components_ElementX();
$c_Lcom_diagraphx_web_components_Container.prototype.constructor = $c_Lcom_diagraphx_web_components_Container;
/** @constructor */
function $h_Lcom_diagraphx_web_components_Container() {
}
$h_Lcom_diagraphx_web_components_Container.prototype = $c_Lcom_diagraphx_web_components_Container.prototype;
$c_Lcom_diagraphx_web_components_Container.prototype.view__Lorg_scalajs_dom_HTMLElement = (function() {
  this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv.setAttribute("class", "resizable-div");
  return $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_fo, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([this.Lcom_diagraphx_web_components_Container__f_contentDiv])))])));
});
function $as_Lcom_diagraphx_web_components_Container(obj) {
  return (((obj instanceof $c_Lcom_diagraphx_web_components_Container) || (obj === null)) ? obj : $throwClassCastException(obj, "com.diagraphx.web.components.Container"));
}
function $isArrayOf_Lcom_diagraphx_web_components_Container(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_diagraphx_web_components_Container)));
}
function $asArrayOf_Lcom_diagraphx_web_components_Container(obj, depth) {
  return (($isArrayOf_Lcom_diagraphx_web_components_Container(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.diagraphx.web.components.Container;", depth));
}
var $d_Lcom_diagraphx_web_components_Container = new $TypeData().initClass($c_Lcom_diagraphx_web_components_Container, "com.diagraphx.web.components.Container", ({
  Lcom_diagraphx_web_components_Container: 1,
  Lcom_diagraphx_web_components_ElementX: 1
}));
/** @constructor */
function $c_Lcom_diagraphx_web_components_Decision() {
  this.Lcom_diagraphx_web_components_ElementX__f_id = null;
  this.Lcom_diagraphx_web_components_ElementX__f_x = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_y = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_width = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_height = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_text = null;
  this.Lcom_diagraphx_web_components_ElementX__f_bgColor = null;
  this.Lcom_diagraphx_web_components_ElementX__f_fo = null;
  this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv = null;
  this.Lcom_diagraphx_web_components_ElementX__f_observer = null;
  this.Lcom_diagraphx_web_components_ElementX__f_contentDiv = null;
  this.Lcom_diagraphx_web_components_Decision__f_resizeDiv = null;
  $ct_Lcom_diagraphx_web_components_ElementX__T__D__D__D__D__T__T__I__(this, "", 100.0, 100.0, 100.0, 50.0, "", "#f1f1f1", 14);
  this.Lcom_diagraphx_web_components_ElementX__f_id = "decision";
  this.Lcom_diagraphx_web_components_ElementX__f_text = "Decision";
  this.Lcom_diagraphx_web_components_ElementX__f_width = (this.Lcom_diagraphx_web_components_ElementX__f_width + 20.0);
  this.Lcom_diagraphx_web_components_ElementX__f_height = (this.Lcom_diagraphx_web_components_ElementX__f_height + 20.0);
  var $x_5 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_4 = $m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement();
  var $x_3 = $m_sr_ScalaRunTime$();
  var $x_2 = new $c_T2("position", "relative");
  var y = (this.Lcom_diagraphx_web_components_ElementX__f_width + "px");
  var $x_1 = new $c_T2("width", y);
  var y$1 = (this.Lcom_diagraphx_web_components_ElementX__f_height + "px");
  this.Lcom_diagraphx_web_components_Decision__f_resizeDiv = $x_5.styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_4, $x_3.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([$x_2, $x_1, new $c_T2("height", y$1), new $c_T2("resize", "both"), new $c_T2("overflow", "hidden")])));
}
$c_Lcom_diagraphx_web_components_Decision.prototype = new $h_Lcom_diagraphx_web_components_ElementX();
$c_Lcom_diagraphx_web_components_Decision.prototype.constructor = $c_Lcom_diagraphx_web_components_Decision;
/** @constructor */
function $h_Lcom_diagraphx_web_components_Decision() {
}
$h_Lcom_diagraphx_web_components_Decision.prototype = $c_Lcom_diagraphx_web_components_Decision.prototype;
$c_Lcom_diagraphx_web_components_Decision.prototype.resizeDiv__Lorg_scalajs_dom_HTMLElement = (function() {
  return this.Lcom_diagraphx_web_components_Decision__f_resizeDiv;
});
$c_Lcom_diagraphx_web_components_Decision.prototype.view__Lorg_scalajs_dom_HTMLElement = (function() {
  var outerBorder = $m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("position", "absolute"), new $c_T2("width", "100%"), new $c_T2("height", "100%"), new $c_T2("background-color", "#333"), new $c_T2("clip-path", "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)")])));
  var $x_8 = $m_Lcom_diagraphx_web_extensions_package$();
  var $x_7 = $m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement();
  var $x_6 = $m_sr_ScalaRunTime$();
  var $x_5 = new $c_T2("position", "absolute");
  var $x_4 = new $c_T2("width", "calc(100% - 4px)");
  var $x_3 = new $c_T2("height", "calc(100% - 4px)");
  var $x_2 = new $c_T2("top", "2px");
  var $x_1 = new $c_T2("left", "2px");
  var y = this.Lcom_diagraphx_web_components_ElementX__f_bgColor;
  var innerBorder = $x_8.styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($x_7, $x_6.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([$x_5, $x_4, $x_3, $x_2, $x_1, new $c_T2("background-color", y), new $c_T2("clip-path", "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)")])));
  this.Lcom_diagraphx_web_components_ElementX__f_observer.observe(this.Lcom_diagraphx_web_components_Decision__f_resizeDiv);
  return $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_fo, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_Decision__f_resizeDiv, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([outerBorder, innerBorder, this.Lcom_diagraphx_web_components_ElementX__f_contentDiv])))])));
});
var $d_Lcom_diagraphx_web_components_Decision = new $TypeData().initClass($c_Lcom_diagraphx_web_components_Decision, "com.diagraphx.web.components.Decision", ({
  Lcom_diagraphx_web_components_Decision: 1,
  Lcom_diagraphx_web_components_ElementX: 1
}));
/** @constructor */
function $c_Lcom_diagraphx_web_components_Instruction() {
  this.Lcom_diagraphx_web_components_ElementX__f_id = null;
  this.Lcom_diagraphx_web_components_ElementX__f_x = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_y = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_width = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_height = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_text = null;
  this.Lcom_diagraphx_web_components_ElementX__f_bgColor = null;
  this.Lcom_diagraphx_web_components_ElementX__f_fo = null;
  this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv = null;
  this.Lcom_diagraphx_web_components_ElementX__f_observer = null;
  this.Lcom_diagraphx_web_components_ElementX__f_contentDiv = null;
  $ct_Lcom_diagraphx_web_components_ElementX__T__D__D__D__D__T__T__I__(this, "", 100.0, 100.0, 100.0, 50.0, "", "#f1f1f1", 14);
  this.Lcom_diagraphx_web_components_ElementX__f_id = "instruction";
  this.Lcom_diagraphx_web_components_ElementX__f_text = "Instruction";
}
$c_Lcom_diagraphx_web_components_Instruction.prototype = new $h_Lcom_diagraphx_web_components_ElementX();
$c_Lcom_diagraphx_web_components_Instruction.prototype.constructor = $c_Lcom_diagraphx_web_components_Instruction;
/** @constructor */
function $h_Lcom_diagraphx_web_components_Instruction() {
}
$h_Lcom_diagraphx_web_components_Instruction.prototype = $c_Lcom_diagraphx_web_components_Instruction.prototype;
$c_Lcom_diagraphx_web_components_Instruction.prototype.view__Lorg_scalajs_dom_HTMLElement = (function() {
  this.Lcom_diagraphx_web_components_ElementX__f_observer.observe(this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv);
  return $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_fo, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([this.Lcom_diagraphx_web_components_ElementX__f_contentDiv])))])));
});
var $d_Lcom_diagraphx_web_components_Instruction = new $TypeData().initClass($c_Lcom_diagraphx_web_components_Instruction, "com.diagraphx.web.components.Instruction", ({
  Lcom_diagraphx_web_components_Instruction: 1,
  Lcom_diagraphx_web_components_ElementX: 1
}));
/** @constructor */
function $c_Lcom_diagraphx_web_components_Note() {
  this.Lcom_diagraphx_web_components_ElementX__f_id = null;
  this.Lcom_diagraphx_web_components_ElementX__f_x = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_y = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_width = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_height = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_text = null;
  this.Lcom_diagraphx_web_components_ElementX__f_bgColor = null;
  this.Lcom_diagraphx_web_components_ElementX__f_fo = null;
  this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv = null;
  this.Lcom_diagraphx_web_components_ElementX__f_observer = null;
  this.Lcom_diagraphx_web_components_ElementX__f_contentDiv = null;
  this.Lcom_diagraphx_web_components_Note__f_contentDiv = null;
  $ct_Lcom_diagraphx_web_components_ElementX__T__D__D__D__D__T__T__I__(this, "", 100.0, 100.0, 100.0, 50.0, "", "#f1f1f1", 14);
  this.Lcom_diagraphx_web_components_ElementX__f_id = "note";
  this.Lcom_diagraphx_web_components_ElementX__f_text = "Note";
  this.Lcom_diagraphx_web_components_Note__f_contentDiv = $m_Lcom_diagraphx_web_extensions_package$().mclick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().mdown__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().editableOnDblClick__Lorg_scalajs_dom_HTMLElement__F1__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().itext__Lorg_scalajs_dom_HTMLElement__T__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement($m_Lcom_diagraphx_web_objects_ElementHelper$().div__Lorg_scalajs_dom_HTMLElement(), $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("width", "100%"), new $c_T2("height", "100%"), new $c_T2("white-space", "pre-wrap"), new $c_T2("word-break", "break-word"), new $c_T2("overflow-wrap", "break-word"), new $c_T2("box-sizing", "border-box"), new $c_T2("overflow", "auto"), new $c_T2("outline", "none"), new $c_T2("align-items", "left"), new $c_T2("justify-content", "left"), new $c_T2("text-align", "left"), new $c_T2("position", "relative")]))), this.Lcom_diagraphx_web_components_ElementX__f_text), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((newText) => {
    var newText$1 = $as_T(newText);
    this.Lcom_diagraphx_web_components_ElementX__f_text = newText$1;
  }))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => {
    var this$27 = $m_s_Console$();
    var this$28 = $n(this$27.out__Ljava_io_PrintStream());
    this$28.java$lang$JSConsoleBasedPrintStream$$printString__T__V("mouse down on element\n");
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialX = $uD(e.clientX);
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_initialY = $uD(e.clientY);
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_mouseDownElement = new $c_s_Some(this);
    var \u03b41$ = this.Lcom_diagraphx_web_components_ElementX__f_fo.style;
    \u03b41$.setProperty("cursor", "grabbing");
    e.stopPropagation();
  }))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$2) => {
    $m_Lcom_diagraphx_web_objects_Cache$().clearClicked__V();
    $m_Lcom_diagraphx_web_objects_Cache$().Lcom_diagraphx_web_objects_Cache$__f_clickedElement = new $c_s_Some(this);
    var \u03b42$ = this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv.style;
    \u03b42$.setProperty("resize", "both");
    e$2.stopPropagation();
  })));
}
$c_Lcom_diagraphx_web_components_Note.prototype = new $h_Lcom_diagraphx_web_components_ElementX();
$c_Lcom_diagraphx_web_components_Note.prototype.constructor = $c_Lcom_diagraphx_web_components_Note;
/** @constructor */
function $h_Lcom_diagraphx_web_components_Note() {
}
$h_Lcom_diagraphx_web_components_Note.prototype = $c_Lcom_diagraphx_web_components_Note.prototype;
$c_Lcom_diagraphx_web_components_Note.prototype.view__Lorg_scalajs_dom_HTMLElement = (function() {
  $m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("background-color", "wheat")])));
  this.Lcom_diagraphx_web_components_ElementX__f_observer.observe(this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv);
  return $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_fo, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([this.Lcom_diagraphx_web_components_Note__f_contentDiv])))])));
});
var $d_Lcom_diagraphx_web_components_Note = new $TypeData().initClass($c_Lcom_diagraphx_web_components_Note, "com.diagraphx.web.components.Note", ({
  Lcom_diagraphx_web_components_Note: 1,
  Lcom_diagraphx_web_components_ElementX: 1
}));
/** @constructor */
function $c_Lcom_diagraphx_web_components_StartEnd() {
  this.Lcom_diagraphx_web_components_ElementX__f_id = null;
  this.Lcom_diagraphx_web_components_ElementX__f_x = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_y = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_width = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_height = 0.0;
  this.Lcom_diagraphx_web_components_ElementX__f_text = null;
  this.Lcom_diagraphx_web_components_ElementX__f_bgColor = null;
  this.Lcom_diagraphx_web_components_ElementX__f_fo = null;
  this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv = null;
  this.Lcom_diagraphx_web_components_ElementX__f_observer = null;
  this.Lcom_diagraphx_web_components_ElementX__f_contentDiv = null;
  $ct_Lcom_diagraphx_web_components_ElementX__T__D__D__D__D__T__T__I__(this, "", 100.0, 100.0, 100.0, 50.0, "", "#f1f1f1", 14);
  this.Lcom_diagraphx_web_components_ElementX__f_id = "startend";
  this.Lcom_diagraphx_web_components_ElementX__f_text = "Start/End";
}
$c_Lcom_diagraphx_web_components_StartEnd.prototype = new $h_Lcom_diagraphx_web_components_ElementX();
$c_Lcom_diagraphx_web_components_StartEnd.prototype.constructor = $c_Lcom_diagraphx_web_components_StartEnd;
/** @constructor */
function $h_Lcom_diagraphx_web_components_StartEnd() {
}
$h_Lcom_diagraphx_web_components_StartEnd.prototype = $c_Lcom_diagraphx_web_components_StartEnd.prototype;
$c_Lcom_diagraphx_web_components_StartEnd.prototype.view__Lorg_scalajs_dom_HTMLElement = (function() {
  $m_Lcom_diagraphx_web_extensions_package$().styles__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("border-radius", "50%")])));
  this.Lcom_diagraphx_web_components_ElementX__f_observer.observe(this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv);
  return $m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_fo, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([$m_Lcom_diagraphx_web_extensions_package$().$greater__Lorg_scalajs_dom_HTMLElement__sci_Seq__Lorg_scalajs_dom_HTMLElement(this.Lcom_diagraphx_web_components_ElementX__f_resizeDiv, $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_scalajs_dom_HTMLElement.getArrayOf().constr)([this.Lcom_diagraphx_web_components_ElementX__f_contentDiv])))])));
});
var $d_Lcom_diagraphx_web_components_StartEnd = new $TypeData().initClass($c_Lcom_diagraphx_web_components_StartEnd, "com.diagraphx.web.components.StartEnd", ({
  Lcom_diagraphx_web_components_StartEnd: 1,
  Lcom_diagraphx_web_components_ElementX: 1
}));
/** @constructor */
function $c_jl_Number() {
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)));
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
  }
  getMessage__T() {
    return this.jl_Throwable__f_s;
  }
  fillInStackTrace__jl_Throwable() {
    var reference = (false ? this.sjs_js_JavaScriptException__f_exception : this);
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || $uZ(Object.isSealed(this)))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this);
  }
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that);
  }
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.toString__T();
  }
}
/** @constructor */
function $c_s_Array$() {
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.equals__AO__AO__Z = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if (($n(xs).u.length !== $n(ys).u.length)) {
    return false;
  }
  var len = $n(xs).u.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($n(xs).get(i), $n(ys).get(i)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().initClass($c_s_Array$, "scala.Array$", ({
  s_Array$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
}
$c_s_Console$.prototype = new $h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $as_Ljava_io_PrintStream($n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v);
});
var $d_s_Console$ = new $TypeData().initClass($c_s_Console$, "scala.Console$", ({
  s_Console$: 1,
  s_io_AnsiColor: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed);
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break;
    }
    case 1: {
      return $thiz.T2__f__2;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false;
    }
  }
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19();
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass($c_sc_Iterator$, "scala.collection.Iterator$", ({
  sc_Iterator$: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"));
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)));
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = null;
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = f;
}
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype;
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.apply__O = (function() {
  return $n(this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().initClass($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855: 1,
  sr_AbstractFunction0: 1,
  F0: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1() {
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().initClass(0, "java.lang.Boolean", ({
  jl_Boolean: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $n($as_jl_Character(that)).c;
    return ($thiz === this$1);
  } else {
    return false;
  }
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)));
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth));
}
var $d_jl_Character = new $TypeData().initClass(0, "java.lang.Character", ({
  jl_Character: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length;
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index);
});
var $d_jl_StringBuilder = new $TypeData().initClass($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  jl_StringBuilder: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
/** @constructor */
function $c_sc_AbstractIterator() {
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this;
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1));
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>";
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1);
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var knownSizeDifference = false;
  }
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that);
  } else {
    return false;
  }
}
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab__f_f = null;
  this.sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab__f_f = f;
}
$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype;
$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype.apply__O__O = (function(x0) {
  return $n(this.sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab__f_f)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().initClass($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab: 1,
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  F1: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().initClass($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayStoreException = new $TypeData().initClass($c_jl_ArrayStoreException, "java.lang.ArrayStoreException", ({
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().initClass(0, "java.lang.Byte", ({
  jl_Byte: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ClassCastException = new $TypeData().initClass($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().initClass($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().initClass(0, "java.lang.Short", ({
  jl_Short: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().initClass($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass($c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError, "org.scalajs.linker.runtime.UndefinedBehaviorError", ({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true;
  }
  return $thiz.s_MatchError__f_objString;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().initClass($c_s_MatchError, "scala.MatchError", ({
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_Option() {
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$());
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1);
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else {
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a);
  }
});
/** @constructor */
function $c_T2(_1, _2) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2__f__1 = _1;
  this.T2__f__2 = _2;
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2;
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")");
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2";
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, $n(Tuple2$1).T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, $n(Tuple2$1).T2__f__2));
  } else {
    return false;
  }
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"));
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)));
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth));
}
var $d_T2 = new $TypeData().initClass($c_T2, "scala.Tuple2", ({
  T2: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false;
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0;
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this;
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false;
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed);
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1;
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $as_sc_Iterator$ConcatIterator($thiz.sc_Iterator$ConcatIterator__f_current);
      $thiz.sc_Iterator$ConcatIterator__f_current = $n(c).sc_Iterator$ConcatIterator__f_current;
      $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = $n(c).sc_Iterator$ConcatIterator__f_currentHasNextChecked;
      if (($n(c).sc_Iterator$ConcatIterator__f_tail !== null)) {
        if (($thiz.sc_Iterator$ConcatIterator__f_last === null)) {
          $thiz.sc_Iterator$ConcatIterator__f_last = $n(c).sc_Iterator$ConcatIterator__f_last;
        }
        $n($n(c).sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
        $thiz.sc_Iterator$ConcatIterator__f_tail = $n(c).sc_Iterator$ConcatIterator__f_tail;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
      $thiz.sc_Iterator$ConcatIterator__f_current = null;
      $thiz.sc_Iterator$ConcatIterator__f_last = null;
      return false;
    } else {
      $thiz.sc_Iterator$ConcatIterator__f_current = $n($thiz.sc_Iterator$ConcatIterator__f_tail).headIterator__sc_Iterator();
      if (($thiz.sc_Iterator$ConcatIterator__f_last === $thiz.sc_Iterator$ConcatIterator__f_tail)) {
        $thiz.sc_Iterator$ConcatIterator__f_last = $n($thiz.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail;
      }
      $thiz.sc_Iterator$ConcatIterator__f_tail = $n($thiz.sc_Iterator$ConcatIterator__f_tail).sc_Iterator$ConcatIteratorCell__f_tail;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true;
      } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $n($thiz.sc_Iterator$ConcatIterator__f_current).hasNext__Z())) {
        $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.sc_Iterator$ConcatIterator__f_current = null;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
  this.sc_Iterator$ConcatIterator__f_current = current;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
}
$c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$ConcatIterator.prototype.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $c_sc_Iterator$ConcatIterator.prototype;
$c_sc_Iterator$ConcatIterator.prototype.hasNext__Z = (function() {
  if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
    return true;
  } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
    if ($n(this.sc_Iterator$ConcatIterator__f_current).hasNext__Z()) {
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$c_sc_Iterator$ConcatIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    return $n(this.sc_Iterator$ConcatIterator__f_current).next__O();
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_Iterator$ConcatIterator.prototype.concat__F0__sc_Iterator = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
    this.sc_Iterator$ConcatIterator__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  } else {
    $n(this.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  }
  if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
    this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  }
  return this;
});
function $as_sc_Iterator$ConcatIterator(obj) {
  return (((obj instanceof $c_sc_Iterator$ConcatIterator) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator$ConcatIterator"));
}
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator$ConcatIterator)));
}
function $asArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (($isArrayOf_sc_Iterator$ConcatIterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator$ConcatIterator;", depth));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().initClass($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  sc_Iterator$ConcatIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0);
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1);
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start;
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize;
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z());
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O();
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O());
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else if ((sum < 0)) {
    this.sc_Iterator$SliceIterator__f_dropping = 2147483647;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
    var xs = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.sc_Iterator$SliceIterator__f_underlying, (((-2147483647) + sum) | 0), rest)));
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
  } else {
    this.sc_Iterator$SliceIterator__f_dropping = sum;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return $n(skipped).head__O();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2);
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that);
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $x_1 = (!this$2.isEmpty__Z());
      } else {
        var $x_1 = false;
      }
      if (($x_1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z());
      }
    }
  }
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I();
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax);
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"));
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)));
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth));
}
var $d_jl_Double = new $TypeData().initClass(0, "java.lang.Double", ({
  jl_Double: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().initClass(0, "java.lang.Float", ({
  jl_Float: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().initClass(0, "java.lang.Integer", ({
  jl_Integer: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi));
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $x_1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($x_1 ^ hi);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi);
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)));
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth));
}
var $d_jl_Long = new $TypeData().initClass(0, "java.lang.Long", ({
  jl_Long: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => (x instanceof $c_RTLong)));
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $x_1 = res;
    var index = i;
    res = (($x_1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0);
  }
  return res;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"));
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)));
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth));
}
var $d_T = new $TypeData().initClass(0, "java.lang.String", ({
  T: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(index) {
    super();
    var s = ("String index out of range: " + index);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_None$() {
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None";
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0;
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880;
});
$c_s_None$.prototype.toString__T = (function() {
  return "None";
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E();
});
var $d_s_None$ = new $TypeData().initClass($c_s_None$, "scala.None$", ({
  s_None$: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value;
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value;
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some";
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1;
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value);
  } else {
    return false;
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"));
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)));
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth));
}
var $d_s_Some = new $TypeData().initClass($c_s_Some, "scala.Some", ({
  s_Some: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T();
});
$c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator__f_xs = xs;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  var xs$1 = this.sc_ArrayOps$ArrayIterator__f_xs;
  this.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
}
$c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $c_sc_ArrayOps$ArrayIterator.prototype;
$c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
  return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
});
$c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
  return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len);
});
$c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
  var $x_1 = this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos;
  var xs = this.sc_ArrayOps$ArrayIterator__f_xs;
  if (($x_1 >= $m_jl_reflect_Array$().getLength__O__I(xs))) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.sc_ArrayOps$ArrayIterator__f_len;
    } else {
      var a = this.sc_ArrayOps$ArrayIterator__f_len;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I();
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r;
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  }
  return this;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.sci_ArraySeq$__f_bitmap$0)) {
    $thiz.sci_ArraySeq$__f_emptyImpl = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.sci_ArraySeq$__f_bitmap$0 = true;
  }
  return $thiz.sci_ArraySeq$__f_emptyImpl;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.sci_ArraySeq$__f_bitmap$0) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.sci_ArraySeq$__f_emptyImpl);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.sci_ArraySeq$__f_emptyImpl = null;
  this.sci_ArraySeq$__f_bitmap$0 = false;
}
$c_sci_ArraySeq$.prototype = new $h_O();
$c_sci_ArraySeq$.prototype.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $c_sci_ArraySeq$.prototype;
var $d_sci_ArraySeq$ = new $TypeData().initClass($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  sci_ArraySeq$: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"));
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)));
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth));
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.stringPrefix__T() + "(<not computed>)");
}
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"));
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)));
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth));
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jl_JSConsoleBasedPrintStream__f_isErr = false;
  this.jl_JSConsoleBasedPrintStream__f_buffer = null;
  this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
  this.jl_JSConsoleBasedPrintStream__f_buffer = "";
}
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = $n(rest);
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
      rest = "";
    } else {
      var $x_1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
      var this$2 = $n(rest);
      if ((nlPos > this$2.length)) {
        $charAt(this$2, nlPos);
      }
      if ((nlPos < 0)) {
        $charAt(this$2, (-1));
      }
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + $as_T(this$2.substring(0, nlPos))));
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
      var this$3 = $n(rest);
      var beginIndex = ((1 + nlPos) | 0);
      if (((beginIndex < 0) || (beginIndex > this$3.length))) {
        $charAt(this$3, beginIndex);
      }
      rest = $as_T(this$3.substring(beginIndex));
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s;
    }
  }
}
var $d_Lorg_scalajs_dom_HTMLElement = new $TypeData().initClass(2, "org.scalajs.dom.HTMLElement", ({
  Lorg_scalajs_dom_HTMLElement: 1,
  Lorg_scalajs_dom_Element: 1,
  Lorg_scalajs_dom_Node: 1,
  Lorg_scalajs_dom_EventTarget: 1,
  sjs_js_Object: 1,
  sjs_js_Any: 1,
  Lorg_scalajs_dom_NodeSelector: 1,
  Lorg_scalajs_dom_ParentNode: 1,
  Lorg_scalajs_dom_NonDocumentTypeChildNode: 1
}), ((x) => (x instanceof HTMLElement)));
/** @constructor */
function $c_sc_AbstractView() {
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this);
});
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)));
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)));
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true;
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)));
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)));
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)));
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)));
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null;
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx);
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I();
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true;
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I());
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true;
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)));
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)));
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
/** @constructor */
function $c_sci_ArraySeq() {
}
$c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$c_sci_ArraySeq.prototype.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $c_sci_ArraySeq.prototype;
$c_sci_ArraySeq.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sci_ArraySeq.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$c_sci_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sci_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sci_ArraySeq.prototype.knownSize__I = (function() {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
});
$c_sci_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq";
});
$c_sci_ArraySeq.prototype.applyPreferredMaxLength__I = (function() {
  return 2147483647;
});
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.sci_ArraySeq$ofRef__f_unsafeArray = null;
  this.sci_ArraySeq$ofRef__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofRef.prototype.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $c_sci_ArraySeq$ofRef.prototype;
$c_sci_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofRef.prototype.apply__I__O = (function(i) {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofRef__f_unsafeArray;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofRef)) {
    var x2 = $as_sci_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.sci_ArraySeq$ofRef__f_unsafeArray, $n(x2).sci_ArraySeq$ofRef__f_unsafeArray);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.sci_ArraySeq$ofRef__f_unsafeArray);
});
$c_sci_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
function $as_sci_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"));
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)));
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().initClass($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  sci_ArraySeq$ofRef: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1);
    } else if ($n(xs).isEmpty__Z()) {
      return (-1);
    } else {
      var this$1 = $n(xs);
      this$1.tail__E();
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if ((!(aEmpty || bEmpty))) {
        var $x_3 = $m_sr_BoxesRunTime$();
        var this$1 = $n(a);
        var $x_2;
        this$1.head__E();
        var this$2 = $n(b);
        var $x_1 = $x_3.equals__O__O__Z($x_2, this$2.head__E());
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var this$3 = $n(a);
        this$3.tail__E();
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq";
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$());
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!$n(these).isEmpty__Z())) {
    var $x_1 = $n(f);
    var this$1 = $n(these);
    $x_1.apply__O__O(this$1.head__E());
    var this$2 = $n(these);
    this$2.tail__E();
  }
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    var this$1 = $n(these);
    this$1.tail__E();
  }
  return len;
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$c_sci_List.prototype.className__T = (function() {
  return "List";
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2);
  } else {
    return $f_sc_Seq__equals__O__Z(this, o);
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"));
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)));
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth));
}
/** @constructor */
function $c_sci_Nil$() {
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil";
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E();
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E();
});
var $d_sci_Nil$ = new $TypeData().initClass($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null;
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0);
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
var $d_scm_StringBuilder = new $TypeData().initClass($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_Lcom_diagraphx_web_Main__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
//# sourceMappingURL=main.js.map
