"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var saludar = function saludar(nombre) {
  return console.log(nombre);
};

var despedir = function despedir(nombre) {
  return console.log(nombre);
};

var Persona =
/*#__PURE__*/
function () {
  function Persona(nombre) {
    _classCallCheck(this, Persona);

    this.nombre = nombre;
  }

  _createClass(Persona, [{
    key: "caminar",
    value: function caminar() {
      console.log('Estoy caminando');
    }
  }]);

  return Persona;
}();