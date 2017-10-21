var PDFPageCount = {
    _callbackFunc: null,
    callback: function(a) {
        return
    },
    getPageCount: function(c, a) {
        this._callbackFunc = a;
        var b = PDFJS.getDocument(c, 0, 0, this.callback)
    }
};
"use strict";
document.webL10n = (function(i, p, f) {
    var n = {};
    var l = "";
    var s = "textContent";
    var e = "";
    var q = {};
    var u = "loading";
    var a = true;

    function g(y) {}

    function v() {
        return p.querySelectorAll('link[type="application/l10n"]')
    }

    function h(y) {
        return y ? y.querySelectorAll("*[data-l10n-id]") : []
    }

    function j(A) {
        if (!A) {
            return {}
        }
        var y = A.getAttribute("data-l10n-id");
        var B = A.getAttribute("data-l10n-args");
        var z = {};
        if (B) {
            try {
                z = JSON.parse(B)
            } catch (C) {
                g("could not parse arguments for #" + y)
            }
        }
        return {
            id: y,
            args: z
        }
    }

    function m(z) {
        var y = p.createEvent("Event");
        y.initEvent("localized", false, false);
        y.language = z;
        i.dispatchEvent(y)
    }

    function b(z, F, y, E) {

        var C = z.replace(/\/[^\/]*$/, "/");

        function B(G) {
            if (G.lastIndexOf("\\") < 0) {
                return G
            }
            return G.replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'")
        }

        function A(O) {
            var N = [];
            var G = /^\s*|\s*$/;
            var J = /^\s*#|^\s*$/;
            var M = /^\s*\[(.*)\]\s*$/;
            var K = /^\s*@import\s+url\((.*)\)\s*$/i;
            var I = /^([^=\s]*)\s*=\s*(.+)$/;

            function L(W, R) {
                var V = W.replace(G, "").split(/[\r\n]+/);
                var P = "*";
                var X = F.replace(/-[a-z]+$/i, "");
                var Q = false;
                var U = "";
                for (var T = 0; T < V.length; T++) {
                    var Y = V[T];
                    if (J.test(Y)) {
                        continue
                    }
                    if (R) {
                        if (M.test(Y)) {
                            U = M.exec(Y);
                            P = U[1];
                            Q = (P !== "*") && (P !== F) && (P !== X);
                            continue
                        } else {
                            if (Q) {
                                continue
                            }
                        }
                        if (K.test(Y)) {
                            U = K.exec(Y);
                            H(C + U[1])
                        }
                    }
                    var S = Y.match(I);
                    if (S && S.length == 3) {
                        N[S[1]] = B(S[2])
                    }
                }
            }

            function H(P) {
                D(P, function(Q) {
                    L(Q, false)
                }, false, false)
            }
            L(O, true);
            return N
        }

        function D(H, K, I, G) {
            var J = new XMLHttpRequest();
            J.open("GET", H, G);
            if (J.overrideMimeType) {
                J.overrideMimeType("text/plain; charset=utf-8")
            }
            J.onreadystatechange = function() {
                if (J.readyState == 4) {
                    if (J.status == 200 || J.status === 0) {
                        if (K) {
                            K(J.responseText)
                        }
                    } else {
                        if (I) {
                            I()
                        }
                    }
                }
            };
            J.send(null)
        }
        D(z, function(G) {
            l += G;
            var J = A(G);
            for (var I in J) {
                var L, K, H = I.lastIndexOf(".");
                if (H > 0) {
                    L = I.substring(0, H);
                    K = I.substr(H + 1)
                } else {
                    L = I;
                    K = s
                }
                if (!n[L]) {
                    n[L] = {}
                }
                n[L][K] = J[I]
            }
            if (y) {
                y()
            }
        }, E, a)
    }

    function d(y, H) {
        o();
        e = y;
        var B = v();
        var G = B.length;
        if (G == 0) {
            g("no resource to load, early way out");
            m(y);
            u = "complete";
            return
        }
        var E = null;
        var F = 0;
        E = function() {
            F++;
            if (F >= G) {
                if (H) {
                    H()
                }
                m(y);
                u = "complete"
            }
        };

        function z(K) {
            var I = K.href;
            var J = K.type;
            this.load = function(M, N) {
                var L = M;
                b(I, M, N, function() {
                    g(I + " not found.");
                    L = ""
                });
                return L
            }
        }
        for (var D = 0; D < G; D++) {
            var C = new z(B[D]);
            var A = C.load(y, E);
            if (A != y) {
                g('"' + y + '" resource not found');
                e = ""
            }
        }
    }

    function o() {
        n = {};
        l = "";
        e = ""
    }

    function c(D) {
        var A = {
            af: 3,
            ak: 4,
            am: 4,
            ar: 1,
            asa: 3,
            az: 0,
            be: 11,
            bem: 3,
            bez: 3,
            bg: 3,
            bh: 4,
            bm: 0,
            bn: 3,
            bo: 0,
            br: 20,
            brx: 3,
            bs: 11,
            ca: 3,
            cgg: 3,
            chr: 3,
            cs: 12,
            cy: 17,
            da: 3,
            de: 3,
            dv: 3,
            dz: 0,
            ee: 3,
            el: 3,
            en: 3,
            eo: 3,
            es: 3,
            et: 3,
            eu: 3,
            fa: 0,
            ff: 5,
            fi: 3,
            fil: 4,
            fo: 3,
            fr: 5,
            fur: 3,
            fy: 3,
            ga: 8,
            gd: 24,
            gl: 3,
            gsw: 3,
            gu: 3,
            guw: 4,
            gv: 23,
            ha: 3,
            haw: 3,
            he: 2,
            hi: 4,
            hr: 11,
            hu: 0,
            id: 0,
            ig: 0,
            ii: 0,
            is: 3,
            it: 3,
            iu: 7,
            ja: 0,
            jmc: 3,
            jv: 0,
            ka: 0,
            kab: 5,
            kaj: 3,
            kcg: 3,
            kde: 0,
            kea: 0,
            kk: 3,
            kl: 3,
            km: 0,
            kn: 0,
            ko: 0,
            ksb: 3,
            ksh: 21,
            ku: 3,
            kw: 7,
            lag: 18,
            lb: 3,
            lg: 3,
            ln: 4,
            lo: 0,
            lt: 10,
            lv: 6,
            mas: 3,
            mg: 4,
            mk: 16,
            ml: 3,
            mn: 3,
            mo: 9,
            mr: 3,
            ms: 0,
            mt: 15,
            my: 0,
            nah: 3,
            naq: 7,
            nb: 3,
            nd: 3,
            ne: 3,
            nl: 3,
            nn: 3,
            no: 3,
            nr: 3,
            nso: 4,
            ny: 3,
            nyn: 3,
            om: 3,
            or: 3,
            pa: 3,
            pap: 3,
            pl: 13,
            ps: 3,
            pt: 3,
            rm: 3,
            ro: 9,
            rof: 3,
            ru: 11,
            rwk: 3,
            sah: 0,
            saq: 3,
            se: 7,
            seh: 3,
            ses: 0,
            sg: 0,
            sh: 11,
            shi: 19,
            sk: 12,
            sl: 14,
            sma: 7,
            smi: 7,
            smj: 7,
            smn: 7,
            sms: 7,
            sn: 3,
            so: 3,
            sq: 3,
            sr: 11,
            ss: 3,
            ssy: 3,
            st: 3,
            sv: 3,
            sw: 3,
            syr: 3,
            ta: 3,
            te: 3,
            teo: 3,
            th: 0,
            ti: 4,
            tig: 3,
            tk: 3,
            tl: 4,
            tn: 3,
            to: 0,
            tr: 0,
            ts: 3,
            tzm: 22,
            uk: 11,
            ur: 3,
            ve: 3,
            vi: 0,
            vun: 3,
            wa: 4,
            wae: 3,
            wo: 0,
            xh: 3,
            xog: 3,
            yo: 0,
            zh: 0,
            zu: 3
        };

        function B(F, E) {
            return E.indexOf(F) !== -1
        }

        function C(G, F, E) {
            return F <= G && G <= E
        }
        var z = {
            "0": function(E) {
                return "other"
            },
            "1": function(E) {
                if ((C((E % 100), 3, 10))) {
                    return "few"
                }
                if (E === 0) {
                    return "zero"
                }
                if ((C((E % 100), 11, 99))) {
                    return "many"
                }
                if (E == 2) {
                    return "two"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "2": function(E) {
                if (E !== 0 && (E % 10) === 0) {
                    return "many"
                }
                if (E == 2) {
                    return "two"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "3": function(E) {
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "4": function(E) {
                if ((C(E, 0, 1))) {
                    return "one"
                }

                return "other"
            },
            "5": function(E) {
                if ((C(E, 0, 2)) && E != 2) {
                    return "one"
                }
                return "other"
            },

            "6": function(E) {
                if (E === 0) {
                    return "zero"
                }
                if ((E % 10) == 1 && (E % 100) != 11) {
                    return "one"
                }
                return "other"
            },
            "7": function(E) {
                if (E == 2) {
                    return "two"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "8": function(E) {
                if ((C(E, 3, 6))) {
                    return "few"
                }
                if ((C(E, 7, 10))) {
                    return "many"
                }
                if (E == 2) {
                    return "two"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "9": function(E) {
                if (E === 0 || E != 1 && (C((E % 100), 1, 19))) {
                    return "few"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "10": function(E) {
                if ((C((E % 10), 2, 9)) && !(C((E % 100), 11, 19))) {
                    return "few"
                }
                if ((E % 10) == 1 && !(C((E % 100), 11, 19))) {
                    return "one"
                }
                return "other"
            },
            "11": function(E) {
                if ((C((E % 10), 2, 4)) && !(C((E % 100), 12, 14))) {
                    return "few"
                }
                if ((E % 10) === 0 || (C((E % 10), 5, 9)) || (C((E % 100), 11, 14))) {
                    return "many"
                }
                if ((E % 10) == 1 && (E % 100) != 11) {
                    return "one"
                }
                return "other"
            },
            "12": function(E) {
                if ((C(E, 2, 4))) {
                    return "few"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "13": function(E) {
                if ((C((E % 10), 2, 4)) && !(C((E % 100), 12, 14))) {
                    return "few"
                }
                if (E != 1 && (C((E % 10), 0, 1)) || (C((E % 10), 5, 9)) || (C((E % 100), 12, 14))) {
                    return "many"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "14": function(E) {
                if ((C((E % 100), 3, 4))) {
                    return "few"
                }
                if ((E % 100) == 2) {
                    return "two"
                }
                if ((E % 100) == 1) {
                    return "one"
                }
                return "other"
            },
            "15": function(E) {
                if (E === 0 || (C((E % 100), 2, 10))) {
                    return "few"
                }
                if ((C((E % 100), 11, 19))) {
                    return "many"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "16": function(E) {
                if ((E % 10) == 1 && E != 11) {
                    return "one"
                }
                return "other"
            },
            "17": function(E) {
                if (E == 3) {
                    return "few"
                }
                if (E === 0) {
                    return "zero"
                }
                if (E == 6) {
                    return "many"
                }
                if (E == 2) {
                    return "two"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "18": function(E) {
                if (E === 0) {
                    return "zero"
                }
                if ((C(E, 0, 2)) && E !== 0 && E != 2) {
                    return "one"
                }
                return "other"
            },
            "19": function(E) {
                if ((C(E, 2, 10))) {
                    return "few"
                }
                if ((C(E, 0, 1))) {
                    return "one"
                }
                return "other"
            },
            "20": function(E) {
                if ((C((E % 10), 3, 4) || ((E % 10) == 9)) && !(C((E % 100), 10, 19) || C((E % 100), 70, 79) || C((E % 100), 90, 99))) {
                    return "few"
                }
                if ((E % 1000000) === 0 && E !== 0) {
                    return "many"
                }
                if ((E % 10) == 2 && !B((E % 100), [12, 72, 92])) {
                    return "two"
                }
                if ((E % 10) == 1 && !B((E % 100), [11, 71, 91])) {
                    return "one"
                }
                return "other"
            },
            "21": function(E) {
                if (E === 0) {
                    return "zero"
                }
                if (E == 1) {
                    return "one"
                }
                return "other"
            },
            "22": function(E) {
                if ((C(E, 0, 1)) || (C(E, 11, 99))) {
                    return "one"
                }
                return "other"
            },
            "23": function(E) {
                if ((C((E % 10), 1, 2)) || (E % 20) === 0) {
                    return "one"
                }
                return "other"
            },
            "24": function(E) {
                if ((C(E, 3, 10) || C(E, 13, 19))) {
                    return "few"
                }
                if (B(E, [2, 12])) {
                    return "two"
                }
                if (B(E, [1, 11])) {
                    return "one"
                }
                return "other"
            }
        };
        var y = A[D.replace(/-.*$/, "")];
        if (!(y in z)) {
            g("plural form unknown for [" + D + "]");
            return function() {
                return "other"
            }
        }
        return z[y]
    }
    q.plural = function(B, A, z, D) {
        var C = parseFloat(A);
        if (isNaN(C)) {
            return B
        }
        if (D != s) {
            return B
        }
        if (!q._pluralRules) {
            q._pluralRules = c(e)
        }
        var y = "[" + q._pluralRules(C) + "]";
        if (C === 0 && (z + "[zero]") in n) {
            B = n[z + "[zero]"][D]
        } else {
            if (C == 1 && (z + "[one]") in n) {
                B = n[z + "[one]"][D]
            } else {
                if (C == 2 && (z + "[two]") in n) {
                    B = n[z + "[two]"][D]
                } else {
                    if ((z + y) in n) {
                        B = n[z + y][D]
                    }
                }
            }
        }
        return B
    };

    function x(z, y, E) {
        var A = n[z];
        if (!A) {
            g("#" + z + " missing for [" + e + "]");
            if (!E) {
                return null
            }
            A = E
        }
        var D = {};
        for (var C in A) {
            var B = A[C];
            B = t(B, y, z, C);
            B = k(B, y);
            D[C] = B
        }
        return D
    }

    function t(G, F, H, y) {
        var A = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/;
        var z = A.exec(G);
        if (!z || !z.length) {
            return G
        }
        var B = z[1];
        var E = z[2];
        var D;
        if (F && E in F) {
            D = F[E]
        } else {
            if (E in n) {
                D = n[E]
            }
        }
        if (B in q) {
            var C = q[B];
            G = C(G, D, H, y)
        }
        return G
    }

    function k(C, A) {
        var D = /\{\{\s*([a-zA-Z\.]+)\s*\}\}/;
        var z = D.exec(C);
        while (z) {
            if (!z || z.length < 2) {
                return C
            }
            var y = z[1];
            var B = "";
            if (y in A) {
                B = A[y]
            } else {
                if (y in n) {
                    B = n[y][s]
                } else {
                    g("could not find argument {{" + y + "}}");
                    return C
                }
            }
            C = C.substring(0, z.index) + B + C.substr(z.index + z[0].length);
            z = D.exec(C)
        }
        return C
    }

    function w(D) {
        var C = j(D);
        if (!C.id) {
            return
        }
        var F = x(C.id, C.args);
        if (!F) {
            g("#" + C.id + " missing for [" + e + "]");
            return
        }
        if (F[s]) {
            if (D.children.length === 0) {
                D[s] = F[s]
            } else {
                var B = D.childNodes,
                    E = false;
                for (var A = 0, y = B.length; A < y; A++) {
                    if (B[A].nodeType === 3 && /\S/.test(B[A].textContent)) {
                        if (E) {
                            B[A].nodeValue = ""
                        } else {
                            B[A].nodeValue = F[s];
                            E = true
                        }
                    }
                }
                if (!E) {
                    g("unexpected error, could not translate element content")
                }
            }
            delete F[s]
        }
        for (var z in F) {
            D[z] = F[z]
        }
    }

    function r(A) {
        A = A || p.documentElement;
        var z = h(A);
        var B = z.length;
        for (var y = 0; y < B; y++) {
            w(z[y])
        }
        w(A)
    }
    return {
        get: function(z, y, B) {
            var A = x(z, y, {
                textContent: B
            });
            if (A) {
                return "textContent" in A ? A.textContent : ""
            }
            return "{{" + z + "}}"
        },
        getData: function() {
            return n
        },
        getText: function() {
            return l
        },
        getLanguage: function() {
            return e
        },
        setLanguage: function(y) {
            d(y, r)
        },
        getDirection: function() {
            var y = ["ar", "he", "fa", "ps", "ur"];
            return (y.indexOf(e) >= 0) ? "rtl" : "ltr"
        },
        translate: r,
        getReadyState: function() {
            return u
        }
    }
})(window, document);
"use strict";
(function checkTypedArrayCompatibility() {
    if (typeof Uint8Array !== "undefined") {
        if (typeof Uint8Array.prototype.subarray === "undefined") {
            Uint8Array.prototype.subarray = function b(e, d) {
                return new Uint8Array(this.slice(e, d))
            };
            Float32Array.prototype.subarray = function b(e, d) {
                return new Float32Array(this.slice(e, d))
            }
        }
        if (typeof Float64Array === "undefined") {
            window.Float64Array = Float32Array
        }
        return
    }

    function b(e, d) {
        return new a(this.slice(e, d))
    }

    function c(g, e) {
        if (arguments.length < 2) {
            e = 0
        }
        for (var d = 0, f = g.length; d < f; ++d, ++e) {
            this[e] = g[d] & 255
        }
    }

    function a(e) {
        var d;
        if (typeof e === "number") {
            d = [];
            for (var f = 0; f < e; ++f) {
                d[f] = 0
            }
        } else {
            if ("slice" in e) {
                d = e.slice(0)
            } else {
                d = [];
                for (var f = 0, g = e.length; f < g; ++f) {
                    d[f] = e[f]
                }
            }
        }
        d.subarray = b;
        d.buffer = d;
        d.byteLength = d.length;
        d.set = c;
        if (typeof e === "object" && e.buffer) {
            d.buffer = e.buffer
        }
        return d
    }
    window.Uint8Array = a;
    window.Uint32Array = a;
    window.Int32Array = a;
    window.Uint16Array = a;
    window.Float32Array = a;
    window.Float64Array = a
})();
(function checkObjectCreateCompatibility() {
    if (typeof Object.create !== "undefined") {
        return
    }
    Object.create = function a(b) {
        function c() {}
        c.prototype = b;
        return new c()
    }
})();
(function checkObjectDefinePropertyCompatibility() {
    if (typeof Object.defineProperty !== "undefined") {
        var a = true;
        try {
            Object.defineProperty(new Image(), "id", {
                value: "test"
            });
            var c = function c() {};
            c.prototype = {get id() {}
            };
            Object.defineProperty(new c(), "id", {
                value: "",
                configurable: true,
                enumerable: true,
                writable: false
            })
        } catch (d) {
            a = false
        }
        if (a) {
            return
        }
    }
    Object.defineProperty = function b(h, f, g) {
        delete h[f];
        if ("get" in g) {
            h.__defineGetter__(f, g.get)
        }
        if ("set" in g) {
            h.__defineSetter__(f, g.set)
        }
        if ("value" in g) {
            h.__defineSetter__(f, function e(j) {
                this.__defineGetter__(f, function i() {
                    return j
                });
                return j
            });
            h[f] = g.value
        }
    }
})();
(function checkObjectKeysCompatibility() {
    if (typeof Object.keys !== "undefined") {
        return
    }
    Object.keys = function a(d) {
        var b = [];
        for (var c in d) {
            if (d.hasOwnProperty(c)) {
                b.push(c)
            }
        }
        return b
    }
})();
(function checkFileReaderReadAsArrayBuffer() {
    if (typeof FileReader === "undefined") {
        return
    }
    var b = FileReader.prototype;
    if ("readAsArrayBuffer" in b) {
        return
    }
    Object.defineProperty(b, "readAsArrayBuffer", {
        value: function a(d) {
            var c = new FileReader();
            var e = this;
            c.onload = function f(h) {
                var n = h.target.result;
                var g = new ArrayBuffer(n.length);
                var m = new Uint8Array(g);
                for (var j = 0, k = n.length; j < k; j++) {
                    m[j] = n.charCodeAt(j)
                }
                Object.defineProperty(e, "result", {
                    value: g,
                    enumerable: true,
                    writable: false,
                    configurable: true
                });
                var l = document.createEvent("HTMLEvents");
                l.initEvent("load", false, false);
                e.dispatchEvent(l)
            };
            c.readAsBinaryString(d)
        }
    })
})();
(function checkXMLHttpRequestResponseCompatibility() {
    var b = XMLHttpRequest.prototype;
    if (!("overrideMimeType" in b)) {
        Object.defineProperty(b, "overrideMimeType", {
            value: function c(f) {}
        })
    }
    if ("response" in b || "mozResponseArrayBuffer" in b || "mozResponse" in b || "responseArrayBuffer" in b) {
        return
    }
    if (typeof VBArray !== "undefined") {
        Object.defineProperty(b, "response", {
            get: function e() {
                return new Uint8Array(new VBArray(this.responseBody).toArray())
            }
        });
        return
    }

    function d() {
        this.overrideMimeType("text/plain; charset=x-user-defined")
    }
    if (typeof b.overrideMimeType === "function") {
        Object.defineProperty(b, "responseType", {
            set: d
        })
    }

    function a() {
        var h = this.responseText;
        var g, j = h.length;
        var f = new Uint8Array(j);
        for (g = 0; g < j; ++g) {
            f[g] = h.charCodeAt(g) & 255
        }
        return f
    }
    Object.defineProperty(b, "response", {
        get: a
    })
})();
(function checkWindowBtoaCompatibility() {
    if ("btoa" in window) {
        return
    }
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    window.btoa = function a(h) {
        var f = "";
        var g, e;
        for (g = 0, e = h.length; g < e; g += 3) {
            var l = h.charCodeAt(g) & 255;
            var k = h.charCodeAt(g + 1) & 255;
            var j = h.charCodeAt(g + 2) & 255;
            var d = l >> 2,
                c = ((l & 3) << 4) | (k >> 4);
            var o = g + 1 < e ? ((k & 15) << 2) | (j >> 6) : 64;
            var m = g + 2 < e ? (j & 63) : 64;
            f += (b.charAt(d) + b.charAt(c) + b.charAt(o) + b.charAt(m))
        }
        return f
    }
})();
(function checkFunctionPrototypeBindCompatibility() {
    if (typeof Function.prototype.bind !== "undefined") {
        return
    }
    Function.prototype.bind = function a(e) {
        var d = this,
            b = Array.prototype.slice.call(arguments, 1);
        var c = function f() {
            var g = Array.prototype.concat.apply(b, arguments);
            return d.apply(e, g)
        };
        return c
    }
})();
(function checkDataURICompatibility() {
    if (!("documentMode" in document) || document.documentMode !== 9 && document.documentMode !== 10) {
        return
    }
    var b = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src");
    Object.defineProperty(HTMLIFrameElement.prototype, "src", {
        get: function c() {
            return this.$src
        },
        set: function a(e) {
            this.$src = e;
            if (e.substr(0, 14) != "data:text/html") {
                b.set.call(this, e);
                return
            }
            b.set.call(this, "about:blank");
            setTimeout((function d() {
                var f = this.contentDocument;
                f.open("text/html");
                f.write(e.substr(e.indexOf(",") + 1));
                f.close()
            }).bind(this), 0)
        },
        enumerable: true
    })
})();
(function checkDatasetProperty() {
    var a = document.createElement("div");
    if ("dataset" in a) {
        return
    }
    Object.defineProperty(HTMLElement.prototype, "dataset", {
        get: function() {
            if (this._dataset) {
                return this._dataset
            }
            var f = {};
            for (var b = 0, e = this.attributes.length; b < e; b++) {
                var d = this.attributes[b];
                if (d.name.substring(0, 5) != "data-") {
                    continue
                }
                var c = d.name.substring(5).replace(/\-([a-z])/g, function(h, g) {
                    return g.toUpperCase()
                });
                f[c] = d.value
            }
            Object.defineProperty(this, "_dataset", {
                value: f,
                writable: false,
                enumerable: false
            });
            return f
        },
        enumerable: true
    })
})();
(function checkClassListProperty() {
    var c = document.createElement("div");
    if ("classList" in c) {
        return
    }

    function a(f, i, j, d) {
        var g = f.className || "";
        var h = g.split(/\s+/g);
        if (h[0] === "") {
            h.shift()
        }
        var e = h.indexOf(i);
        if (e < 0 && j) {
            h.push(i)
        }
        if (e >= 0 && d) {
            h.splice(e, 1)
        }
        f.className = h.join(" ")
    }
    var b = {
        add: function(d) {
            a(this.element, d, true, false)
        },
        remove: function(d) {
            a(this.element, d, false, true)
        },
        toggle: function(d) {
            a(this.element, d, true, true)
        }
    };
    Object.defineProperty(HTMLElement.prototype, "classList", {
        get: function() {
            if (this._classList) {
                return this._classList
            }
            var d = Object.create(b, {
                element: {
                    value: this,
                    writable: false,
                    enumerable: true
                }
            });
            Object.defineProperty(this, "_classList", {
                value: d,
                writable: false,
                enumerable: false
            });
            return d
        },
        enumerable: true
    })
})();
(function checkConsoleCompatibility() {
    if (!("console" in window)) {
        window.console = {
            log: function() {},
            error: function() {},
            warn: function() {}
        }
    } else {
        if (!("bind" in console.log)) {
            console.log = (function(a) {
                return function(b) {
                    return a(b)
                }
            })(console.log);
            console.error = (function(a) {
                return function(b) {
                    return a(b)
                }
            })(console.error);
            console.warn = (function(a) {
                return function(b) {
                    return a(b)
                }
            })(console.warn)
        }
    }
})();
(function checkOnClickCompatibility() {
    function b(c) {
        if (a(c.target)) {
            c.stopPropagation()
        }
    }

    function a(c) {
        return c.disabled || (c.parentNode && a(c.parentNode))
    }
    if (navigator.userAgent.indexOf("Opera") != -1) {
        document.addEventListener("click", b, true)
    }
})();
(function checkNavigatorLanguage() {
    if ("language" in navigator) {
        return
    }
    Object.defineProperty(navigator, "language", {
        get: function a() {
            var b = navigator.userLanguage || "en-US";
            return b.substring(0, 2).toLowerCase() + b.substring(2).toUpperCase()
        },
        enumerable: true
    })
})();
(function checkRangeRequests() {
    var a = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
    if (!a) {
        return
    }
    document.addEventListener("DOMContentLoaded", function(b) {
        if (a) {
            console.warn("Range requests are disabled for safari.");
            PDFJS.disableRange = true
        }
    })
})();
"use strict";
var NetworkManager = (function NetworkManagerClosure() {
    var l = 200;
    var f = 206;

    function b(o, n) {
        this.url = o;
        n = n || {};
        this.httpHeaders = n.httpHeaders || {};
        this.getXhr = n.getXhr || function m() {
            return new XMLHttpRequest()
        };
        this.currXhrId = 0;
        this.pendingRequests = {};
        this.loadedRequests = {}
    }

    function e(q) {
        var p = (q.mozResponseArrayBuffer || q.mozResponse || q.responseArrayBuffer || q.response);
        if (typeof p !== "string") {
            return p
        }
        var o = p.length;
        var m = new Uint8Array(o);
        for (var n = 0; n < o; n++) {
            m[n] = p.charCodeAt(n) & 255
        }
        return m
    }
    b.prototype = {
        requestRange: function a(p, m, o) {
            var n = {
                begin: p,
                end: m
            };
            for (var q in o) {
                n[q] = o[q]
            }
            return this.request(n)
        },
        requestFull: function a(m) {
            return this.request(m)
        },
        request: function a(n) {
            var s = this.getXhr();
            var r = this.currXhrId++;
            var m = this.pendingRequests[r] = {
                xhr: s
            };
            s.open("GET", this.url);
            for (var q in this.httpHeaders) {
                var p = this.httpHeaders[q];
                if (typeof p === "undefined") {
                    continue
                }
                s.setRequestHeader(q, p)
            }
            if ("begin" in n && "end" in n) {
                var o = n.begin + "-" + (n.end - 1);
                s.setRequestHeader("Range", "bytes=" + o);
                m.expectedStatus = 206
            } else {
                m.expectedStatus = 200
            }
            s.mozResponseType = s.responseType = "arraybuffer";
            if (n.onProgress) {
                s.onprogress = n.onProgress
            }
            if (n.onError) {
                s.onerror = function(t) {
                    n.onError(s.status)
                }
            }
            s.onreadystatechange = this.onStateChange.bind(this, r);
            m.onHeadersReceived = n.onHeadersReceived;
            m.onDone = n.onDone;
            m.onError = n.onError;
            s.send(null);
            return r
        },
        onStateChange: function i(o, t) {
            var v = this.pendingRequests[o];
            if (!v) {
                return
            }
            var u = v.xhr;
            if (u.readyState >= 2 && v.onHeadersReceived) {
                v.onHeadersReceived();
                delete v.onHeadersReceived
            }
            if (u.readyState !== 4) {
                return
            }
            if (!(o in this.pendingRequests)) {
                return
            }
            delete this.pendingRequests[o];
            if (u.status === 0 && /^https?:/i.test(this.url)) {
                if (v.onError) {
                    v.onError(u.status)
                }
                return
            }
            var r = u.status || l;
            var q = r === l && v.expectedStatus === f;
            if (!q && r !== v.expectedStatus) {
                if (v.onError) {
                    v.onError(u.status)
                }
                return
            }
            this.loadedRequests[o] = true;
            var s = e(u);
            if (r === f) {
                var p = u.getResponseHeader("Content-Range");
                var n = /bytes (\d+)-(\d+)\/(\d+)/.exec(p);
                var m = parseInt(n[1], 10);
                v.onDone({
                    begin: m,
                    chunk: s
                })
            } else {
                v.onDone({
                    begin: 0,
                    chunk: s
                })
            }
        },
        hasPendingRequests: function c() {
            for (var m in this.pendingRequests) {
                return true
            }
            return false
        },
        getRequestXhr: function h(m) {
            return this.pendingRequests[m].xhr
        },
        isPendingRequest: function j(m) {
            return m in this.pendingRequests
        },
        isLoadedRequest: function d(m) {
            return m in this.loadedRequests
        },
        abortAllRequests: function g() {
            for (var m in this.pendingRequests) {
                this.abortRequest(m | 0)
            }
        },
        abortRequest: function k(m) {
            var n = this.pendingRequests[m].xhr;
            delete this.pendingRequests[m];
            n.abort()
        }
    };
    return b
})();
"use strict";
var ChunkedStream = (function ChunkedStreamClosure() {
    function l(p, q, o) {
        this.bytes = new Uint8Array(p);
        this.start = 0;
        this.pos = 0;
        this.end = p;
        this.chunkSize = q;
        this.loadedChunks = [];
        this.numChunksLoaded = 0;
        this.numChunks = Math.ceil(p / q);
        this.manager = o
    }
    l.prototype = {
        getMissingChunks: function j() {
            var q = [];
            for (var o = 0, p = this.numChunks; o < p; ++o) {
                if (!(o in this.loadedChunks)) {
                    q.push(o)
                }
            }
            return q
        },
        allChunksLoaded: function g() {
            return this.numChunksLoaded === this.numChunks
        },
        onReceiveData: function(r, p) {
            var o = r + p.byteLength;
            assert(r % this.chunkSize === 0, "Bad begin offset: " + r);
            var s = this.bytes.length;
            assert(o % this.chunkSize === 0 || o === s, "Bad end offset: " + o);
            this.bytes.set(new Uint8Array(p), r);
            var u = this.chunkSize;
            var q = Math.floor(r / u);
            var t = Math.floor((o - 1) / u) + 1;
            for (var p = q; p < t; ++p) {
                if (!(p in this.loadedChunks)) {
                    this.loadedChunks[p] = true;
                    ++this.numChunksLoaded
                }
            }
        },
        ensureRange: function d(r, o) {
            if (r >= o) {
                return
            }
            var t = this.chunkSize;
            var q = Math.floor(r / t);
            var s = Math.floor((o - 1) / t) + 1;
            for (var p = q; p < s; ++p) {
                if (!(p in this.loadedChunks)) {
                    throw new MissingDataException(r, o)
                }
            }
        },
        nextEmptyChunk: function m(p) {
            for (var o = p, q = this.numChunks; o < q; ++o) {
                if (!(o in this.loadedChunks)) {
                    return o
                }
            }
            for (var o = 0; o < p; ++o) {
                if (!(o in this.loadedChunks)) {
                    return o
                }
            }
            return null
        },
        hasChunk: function a(o) {
            return o in this.loadedChunks
        },
        get length() {
            return this.end - this.start
        },
        getByte: function i() {
            var o = this.pos;
            if (o >= this.end) {
                return null
            }
            this.ensureRange(o, o + 1);
            return this.bytes[this.pos++]
        },
        getBytes: function n(q) {
            var p = this.bytes;
            var s = this.pos;
            var r = this.end;
            if (!q) {
                this.ensureRange(s, r);
                return p.subarray(s, r)
            }
            var o = s + q;
            if (o > r) {
                o = r
            }
            this.ensureRange(s, o);
            this.pos = o;
            return p.subarray(s, o)
        },
        getByteRange: function n(p, o) {
            this.ensureRange(p, o);
            return this.bytes.subarray(p, o)
        },
        lookChar: function e() {
            var o = this.pos;
            if (o >= this.end) {
                return null
            }
            this.ensureRange(o, o + 1);
            return String.fromCharCode(this.bytes[o])
        },
        getChar: function k() {
            var o = this.pos;
            if (o >= this.end) {
                return null
            }
            this.ensureRange(o, o + 1);
            return String.fromCharCode(this.bytes[this.pos++])
        },
        skip: function c(o) {
            if (!o) {
                o = 1
            }
            this.pos += o
        },
        reset: function f() {
            this.pos = this.start
        },
        moveStart: function h() {
            this.start = this.pos
        },
        makeSubStream: function b(s, p, r) {
            function o() {}
            o.prototype = Object.create(this);
            o.prototype.getMissingChunks = function() {
                var x = this.chunkSize;
                var v = Math.floor(this.start / x);
                var w = Math.floor((this.end - 1) / x) + 1;
                var u = [];
                for (var t = v; t < w; ++t) {
                    if (!(t in this.loadedChunks)) {
                        u.push(t)
                    }
                }
                return u
            };
            var q = new o();
            q.pos = q.start = s;
            q.end = s + p || this.end;
            q.dict = r;
            return q
        },
        isStream: true
    };
    return l
})();
var ChunkedStreamManager = (function ChunkedStreamManagerClosure() {
    function k(q, t, o, n) {
        var m = this;
        this.stream = new ChunkedStream(q, t, this);
        this.length = q;
        this.chunkSize = t;
        this.url = o;
        this.disableAutoFetch = n.disableAutoFetch;
        var p = this.msgHandler = n.msgHandler;
        if (n.chunkedViewerLoading) {
            p.on("OnDataRange", this.onReceiveData.bind(this));
            p.on("OnDataProgress", this.onProgress.bind(this));
            this.sendRequest = function s(v, u) {
                p.send("RequestDataRange", {
                    begin: v,
                    end: u
                })
            }
        } else {
            var r = function r() {
                return new XMLHttpRequest()
            };
            this.networkManager = new NetworkManager(this.url, {
                getXhr: r,
                httpHeaders: n.httpHeaders
            });
            this.sendRequest = function s(v, u) {
                this.networkManager.requestRange(v, u, {
                    onDone: this.onReceiveData.bind(this),
                    onProgress: this.onProgress.bind(this)
                })
            }
        }
        this.currRequestId = 0;
        this.chunksNeededByRequest = {};
        this.requestsByChunk = {};
        this.callbacksByRequest = {};
        this.loadedStream = new Promise()
    }
    k.prototype = {
        onLoadedStream: function h() {
            return this.loadedStream
        },
        requestAllChunks: function i() {
            var m = this.stream.getMissingChunks();
            this.requestChunks(m);
            return this.loadedStream
        },
        requestChunks: function b(s, v) {
            var m = this.currRequestId++;
            var q;
            this.chunksNeededByRequest[m] = q = {};
            for (var r = 0, w = s.length; r < w; r++) {
                if (!this.stream.hasChunk(s[r])) {
                    q[s[r]] = true
                }
            }
            if (isEmptyObj(q)) {
                if (v) {
                    v()
                }
                return
            }
            this.callbacksByRequest[m] = v;
            var o = [];
            for (var u in q) {
                u = u | 0;
                if (!(u in this.requestsByChunk)) {
                    this.requestsByChunk[u] = [];
                    o.push(u)
                }
                this.requestsByChunk[u].push(m)
            }
            if (!o.length) {
                return
            }
            var x = this.groupChunks(o);
            for (var r = 0; r < x.length; ++r) {
                var t = x[r];
                var n = t.beginChunk * this.chunkSize;
                var p = Math.min(t.endChunk * this.chunkSize, this.length);
                this.sendRequest(n, p)
            }
        },
        getStream: function l() {
            return this.stream
        },
        requestRange: function f(p, m, s) {
            m = Math.min(m, this.length);
            var o = this.getBeginChunk(p);
            var q = this.getEndChunk(m);
            var r = [];
            for (var n = o; n < q; ++n) {
                r.push(n)
            }
            this.requestChunks(r, s)
        },
        requestRanges: function j(m, s) {
            m = m || [];
            var n = [];
            for (var p = 0; p < m.length; p++) {
                var q = this.getBeginChunk(m[p].begin);
                var r = this.getEndChunk(m[p].end);
                for (var o = q; o < r; ++o) {
                    if (n.indexOf(o) < 0) {
                        n.push(o)
                    }
                }
            }
            n.sort(function(u, t) {
                return u - t
            });
            this.requestChunks(n, s)
        },
        groupChunks: function g(r) {
            var m = [];
            var q;
            var p;
            for (var o = 0; o < r.length; ++o) {
                var n = r[o];
                if (!q) {
                    q = n
                }
                if (p && p + 1 !== n) {
                    m.push({
                        beginChunk: q,
                        endChunk: p + 1
                    });
                    q = n
                }
                if (o + 1 === r.length) {
                    m.push({
                        beginChunk: q,
                        endChunk: n + 1
                    })
                }
                p = n
            }
            return m
        },
        onProgress: function c(m) {
            var n = this.stream.numChunksLoaded * this.chunkSize + m.loaded;
            this.msgHandler.send("DocProgress", {
                loaded: n,
                total: this.length
            })
        },
        onReceiveData: function e(t) {
            var x = t.chunk;
            var n = t.begin;
            var o = n + x.byteLength;
            var w = this.getBeginChunk(n);
            var u = this.getEndChunk(o);
            this.stream.onReceiveData(n, x);
            if (this.stream.allChunksLoaded()) {
                this.loadedStream.resolve(this.stream)
            }
            var r = [];
            for (var x = w; x < u; ++x) {
                var s = this.requestsByChunk[x] || [];
                delete this.requestsByChunk[x];
                for (var q = 0; q < s.length; ++q) {
                    var m = s[q];
                    var p = this.chunksNeededByRequest[m];
                    if (x in p) {
                        delete p[x]
                    }
                    if (!isEmptyObj(p)) {
                        continue
                    }
                    r.push(m)
                }
            }
            if (!this.disableAutoFetch && isEmptyObj(this.requestsByChunk)) {
                var y;
                if (this.stream.numChunksLoaded === 1) {
                    var v = this.stream.numChunks - 1;
                    if (!this.stream.hasChunk(v)) {
                        y = v
                    }
                } else {
                    y = this.stream.nextEmptyChunk(u)
                }
                if (isInt(y)) {
                    this.requestChunks([y])
                }
            }
            for (var q = 0; q < r.length; ++q) {
                var m = r[q];
                var z = this.callbacksByRequest[m];
                delete this.callbacksByRequest[m];
                if (z) {
                    z()
                }
            }
            this.msgHandler.send("DocProgress", {
                loaded: this.stream.numChunksLoaded * this.chunkSize,
                total: this.length
            })
        },
        getBeginChunk: function a(n) {
            var m = Math.floor(n / this.chunkSize);
            return m
        },
        getEndChunk: function d(m) {
            if (m % this.chunkSize === 0) {
                return m / this.chunkSize
            }
            var n = Math.floor((m - 1) / this.chunkSize) + 1;
            return n
        }
    };
    return k
})();
"use strict";
var BasePdfManager = (function BasePdfManagerClosure() {
    function h() {
        throw new Error("Cannot initialize BaseManagerManager")
    }
    h.prototype = {
        onLoadedStream: function d() {
            throw new NotImplementedException()
        },
        ensureModel: function e(k, j) {
            return this.ensure(this.pdfModel, k, j)
        },
        ensureXRef: function i(k, j) {
            return this.ensure(this.pdfModel.xref, k, j)
        },
        ensureCatalog: function b(k, j) {
            return this.ensure(this.pdfModel.catalog, k, j)
        },
        getPage: function f(j) {
            return this.pdfModel.getPage(j)
        },
        ensure: function g(k, l, j) {
            return new NotImplementedException()
        },
        requestRange: function g(k, j) {
            return new NotImplementedException()
        },
        requestLoadedStream: function c() {
            return new NotImplementedException()
        },
        updatePassword: function a(j) {
            this.pdfModel.xref.password = this.password = j;
            if (this.passwordChangedPromise) {
                this.passwordChangedPromise.resolve()
            }
        }
    };
    return h
})();
var LocalPdfManager = (function LocalPdfManagerClosure() {
    function b(g, f) {
        var h = new Stream(g);
        this.pdfModel = new PDFDocument(this, h, f);
        this.loadedStream = new Promise();
        this.loadedStream.resolve(h)
    }
    b.prototype = Object.create(BasePdfManager.prototype);
    b.prototype.constructor = b;
    b.prototype.ensure = function e(j, l, g) {
        var k = new Promise();
        try {
            var h = j[l];
            var f;
            if (typeof(h) === "function") {
                f = h.apply(j, g)
            } else {
                f = h
            }
            k.resolve(f)
        } catch (i) {
            console.log(i.stack);
            k.reject(i)
        }
        return k
    };
    b.prototype.requestRange = function a(g, f) {
        var h = new Promise();
        h.resolve();
        return h
    };
    b.prototype.requestLoadedStream = function d() {};
    b.prototype.onLoadedStream = function c() {
        return this.loadedStream
    };
    return b
})();
var NetworkPdfManager = (function NetworkPdfManagerClosure() {
    var e = 65536;

    function d(h, i) {
        this.msgHandler = i;
        var j = {
            msgHandler: i,
            httpHeaders: h.httpHeaders,
            chunkedViewerLoading: h.chunkedViewerLoading,
            disableAutoFetch: h.disableAutoFetch
        };
        this.streamManager = new ChunkedStreamManager(h.length, e, h.url, j);
        this.pdfModel = new PDFDocument(this, this.streamManager.getStream(), h.password)
    }
    d.prototype = Object.create(BasePdfManager.prototype);
    d.prototype.constructor = d;
    d.prototype.ensure = function a(i, k, h) {
        var j = new Promise();
        this.ensureHelper(j, i, k, h);
        return j
    };
    d.prototype.ensureHelper = function g(m, l, n, i) {
        try {
            var h;
            var j = l[n];
            if (typeof(j) === "function") {
                h = j.apply(l, i)
            } else {
                h = j
            }
            m.resolve(h)
        } catch (k) {
            if (!(k instanceof MissingDataException)) {
                m.reject(k);
                return
            }
            this.streamManager.requestRange(k.begin, k.end, function() {
                this.ensureHelper(m, l, n, i)
            }.bind(this))
        }
    };
    d.prototype.requestRange = function f(i, h) {
        var j = new Promise();
        this.streamManager.requestRange(i, h, function() {
            j.resolve()
        });
        return j
    };
    d.prototype.requestLoadedStream = function b() {
        this.streamManager.requestAllChunks()
    };
    d.prototype.onLoadedStream = function c() {
        return this.streamManager.onLoadedStream()
    };
    return d
})();
"use strict";
var globalScope = (typeof window === "undefined") ? this : window;
var isWorker = (typeof window == "undefined");
var ERRORS = 0,
    WARNINGS = 1,
    INFOS = 5;
var verbosity = WARNINGS;
if (!globalScope.PDFJS) {
    globalScope.PDFJS = {}
}
globalScope.PDFJS.pdfBug = false;
var PDFDocument = (function PDFDocumentClosure() {
    function f(m, k, l) {
        if (isStream(k)) {
            i.call(this, m, k, l)
        } else {
            if (isArrayBuffer(k)) {
                i.call(this, m, new Stream(k), l)
            } else {
                error("PDFDocument: Unknown argument type")
            }
        }
    }

    function i(l, n, k) {
        assertWellFormed(n.length > 0, "stream must have data");
        this.pdfManager = l;
        this.stream = n;
        var m = new XRef(this.stream, k, l);
        this.xref = m
    }

    function d(t, o, l, s) {
        var r = t.pos;
        var m = t.end;
        var q = "";
        if (r + l > m) {
            l = m - r
        }
        for (var k = 0; k < l; ++k) {
            q += t.getChar()
        }
        t.pos = r;
        var p = s ? q.lastIndexOf(o) : q.indexOf(o);
        if (p == -1) {
            return false
        }
        t.pos += p;
        return true
    }
    var g = {get entries() {
            return shadow(this, "entries", {
                Title: isString,
                Author: isString,
                Subject: isString,
                Keywords: isString,
                Creator: isString,
                Producer: isString,
                CreationDate: isString,
                ModDate: isString,
                Trapped: isName
            })
        }
    };
    f.prototype = {
        parse: function c(k) {
            this.setup(k);
            this.acroForm = this.catalog.catDict.get("AcroForm")
        },
        get linearization() {
            var m = this.stream.length;
            var l = false;
            if (m) {
                try {
                    l = new Linearization(this.stream);
                    if (l.length != m) {
                        l = false
                    }
                } catch (k) {
                    if (k instanceof MissingDataException) {
                        throw k
                    }
                    info("The linearization data is not available or unreadable PDF data is found");
                    l = false
                }
            }
            return shadow(this, "linearization", l)
        },
        get startXRef() {
            var q = this.stream;
            var k = 0;
            var n = this.linearization;
            if (n) {
                q.reset();
                if (d(q, "endobj", 1024)) {
                    k = q.pos + 6
                }
            } else {
                var m = 1024;
                var o = false,
                    r = q.end;
                while (!o && r > 0) {
                    r -= m - "startxref".length;
                    if (r < 0) {
                        r = 0
                    }
                    q.pos = r;
                    o = d(q, "startxref", m, true)
                }
                if (o) {
                    q.skip(9);
                    var l;
                    do {
                        l = q.getChar()
                    } while (Lexer.isSpace(l));
                    var p = "";
                    while ((l - "0") <= 9) {
                        p += l;
                        l = q.getChar()
                    }
                    k = parseInt(p, 10);
                    if (isNaN(k)) {
                        k = 0
                    }
                }
            }
            return shadow(this, "startXRef", k)
        },
        get mainXRefEntriesOffset() {
            var k = 0;
            var l = this.linearization;
            if (l) {
                k = l.mainXRefEntriesOffset
            }
            return shadow(this, "mainXRefEntriesOffset", k)
        },
        checkHeader: function e() {
            var n = this.stream;
            n.reset();
            if (d(n, "%PDF-", 1024)) {
                n.moveStart();
                var l = 12;
                var k = "",
                    m;
                while ((m = n.getChar()) > " ") {
                    if (k.length >= l) {
                        break
                    }
                    k += m
                }
                this.pdfFormatVersion = k.substring(5);
                return
            }
        },
        parseStartXRef: function h() {
            var k = this.startXRef;
            this.xref.setStartXRef(k)
        },
        setup: function b(k) {
            this.xref.parse(k);
            this.catalog = new Catalog(this.pdfManager, this.xref)
        },
        get numPages() {
            var l = this.linearization;
            var k = l ? l.numPages : this.catalog.numPages;
            return shadow(this, "numPages", k)
        },
        get documentInfo() {
            var k = {
                PDFFormatVersion: this.pdfFormatVersion,
                IsAcroFormPresent: !!this.acroForm
            };
            if (this.xref.trailer.has("Info")) {
                var o = this.xref.trailer.get("Info");
                var l = g.entries;
                for (var m in l) {
                    if (o.has(m)) {
                        var n = o.get(m);
                        if (l[m](n)) {
                            k[m] = typeof n !== "string" ? n : stringToPDFString(n)
                        } else {
                            info('Bad value in document info for "' + m + '"')
                        }
                    }
                }
            }
            return shadow(this, "documentInfo", k)
        },
        get fingerprint() {
            var p = this.xref,
                k;
            if (p.trailer.has("ID")) {
                k = "";
                var q = p.trailer.get("ID")[0];
                q.split("").forEach(function(r) {
                    k += Number(r.charCodeAt(0)).toString(16)
                })
            } else {
                var n = this.stream.bytes.subarray(0, 100);
                var o = calculateMD5(n, 0, n.length);
                k = "";
                for (var l = 0, m = o.length; l < m; l++) {
                    k += Number(o[l]).toString(16)
                }
            }
            return shadow(this, "fingerprint", k)
        },
        traversePages: function a() {
            this.catalog.traversePages()
        },
        getPage: function j(k) {
            return this.catalog.getPage(k)
        }
    };
    return f
})();
"use strict";
var log = (function() {
    if ("console" in globalScope && "log" in globalScope.console) {
        return globalScope.console["log"].bind(globalScope.console)
    } else {
        return function a() {}
    }
})();

function info(a) {
    if (verbosity >= INFOS) {
        log("Info: " + a);
        PDFJS.LogManager.notify("info", a)
    }
}

function warn(a) {
    if (verbosity >= WARNINGS) {
        log("Warning: " + a);
        PDFJS.LogManager.notify("warn", a)
    }
}

function error(b) {
    if (arguments.length > 1) {
        var a = ["Error:"];
        a.push.apply(a, arguments);
        b = [].join.call(arguments, " ")
    } else {}
    log(backtrace());
    PDFJS.LogManager.notify("error", b);
    throw new Error(b)
}

function TODO(a) {
    warn("TODO: " + a)
}

function backtrace() {
    try {
        throw new Error()
    } catch (a) {
        return a.stack ? a.stack.split("\n").slice(2).join("\n") : ""
    }
}

function assert(a, b) {
    if (!a) {
        error(b)
    }
}

function combineUrl(e, b) {
    if (!b) {
        return e
    }
    if (b.indexOf(":") >= 0) {
        return b
    }
    if (b.charAt(0) == "/") {
        var c = e.indexOf("://");
        c = e.indexOf("/", c + 3);
        return e.substring(0, c) + b
    } else {
        var d = e.length,
            c;
        c = e.lastIndexOf("#");
        d = c >= 0 ? c : d;
        c = e.lastIndexOf("?", d);
        d = c >= 0 ? c : d;
        var a = e.lastIndexOf("/", d);
        return e.substring(0, a + 1) + b
    }
}

function assertWellFormed(a, b) {
    if (!a) {
        error(b)
    }
}
var LogManager = PDFJS.LogManager = (function LogManagerClosure() {
    var a = [];
    return {
        addLogger: function b(c) {
            a.push(c)
        },
        notify: function(f, g) {
            for (var d = 0, e = a.length; d < e; d++) {
                var c = a[d];
                if (c[f]) {
                    c[f](g)
                }
            }
        }
    }
})();

function shadow(b, c, a) {
    Object.defineProperty(b, c, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: false
    });
    return a
}
var PasswordResponses = PDFJS.PasswordResponses = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
};
var PasswordException = (function PasswordExceptionClosure() {
    function a(c, b) {
        this.name = "PasswordException";
        this.message = c;
        this.code = b
    }
    a.prototype = new Error();
    a.constructor = a;
    return a
})();
var UnknownErrorException = (function UnknownErrorExceptionClosure() {
    function a(c, b) {
        this.name = "UnknownErrorException";
        this.message = c;
        this.details = b
    }
    a.prototype = new Error();
    a.constructor = a;
    return a
})();
var InvalidPDFException = (function InvalidPDFExceptionClosure() {
    function a(b) {
        this.name = "InvalidPDFException";
        this.message = b
    }
    a.prototype = new Error();
    a.constructor = a;
    return a
})();
var MissingPDFException = (function MissingPDFExceptionClosure() {
    function a(b) {
        this.name = "MissingPDFException";
        this.message = b
    }
    a.prototype = new Error();
    a.constructor = a;
    return a
})();
var NotImplementedException = (function NotImplementedExceptionClosure() {
    function a(b) {
        this.message = b
    }
    a.prototype = new Error();
    a.prototype.name = "NotImplementedException";
    a.constructor = a;
    return a
})();
var MissingDataException = (function MissingDataExceptionClosure() {
    function a(c, b) {
        this.begin = c;
        this.end = b;
        this.message = "Missing data [begin, end)"
    }
    a.prototype = new Error();
    a.prototype.name = "MissingDataException";
    a.constructor = a;
    return a
})();
var XRefParseException = (function XRefParseExceptionClosure() {
    function a(b) {
        this.message = b
    }
    a.prototype = new Error();
    a.prototype.name = "XRefParseException";
    a.constructor = a;
    return a
})();

function bytesToString(a) {
    var c = "";
    var b = a.length;
    for (var d = 0; d < b; ++d) {
        c += String.fromCharCode(a[d])
    }
    return c
}

function stringToBytes(c) {
    var b = c.length;
    var a = new Uint8Array(b);
    for (var d = 0; d < b; ++d) {
        a[d] = c.charCodeAt(d) & 255
    }
    return a
}
var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
var Util = PDFJS.Util = (function UtilClosure() {
    function p() {}
    p.makeCssRgb = function n(r) {
        return "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")"
    };
    p.makeCssCmyk = function f(t) {
        var s = new DeviceCmykCS();
        p.makeCssCmyk = function r(v) {
            var u = s.getRgb(v, 0);
            return p.makeCssRgb(u)
        };
        return p.makeCssCmyk(t)
    };
    p.transform = function i(s, r) {
        return [s[0] * r[0] + s[2] * r[1], s[1] * r[0] + s[3] * r[1], s[0] * r[2] + s[2] * r[3], s[1] * r[2] + s[3] * r[3], s[0] * r[4] + s[2] * r[5] + s[4], s[1] * r[4] + s[3] * r[5] + s[5]]
    };
    p.applyTransform = function j(u, r) {
        var s = u[0] * r[0] + u[1] * r[2] + r[4];
        var t = u[0] * r[1] + u[1] * r[3] + r[5];
        return [s, t]
    };
    p.applyInverseTransform = function k(u, r) {
        var v = r[0] * r[3] - r[1] * r[2];
        var s = (u[0] * r[3] - u[1] * r[2] + r[2] * r[5] - r[4] * r[3]) / v;
        var t = (-u[0] * r[1] + u[1] * r[0] + r[4] * r[1] - r[5] * r[0]) / v;
        return [s, t]
    };
    p.getAxialAlignedBoundingBox = function g(u, s) {
        var x = p.applyTransform(u, s);
        var w = p.applyTransform(u.slice(2, 4), s);
        var v = p.applyTransform([u[0], u[3]], s);
        var t = p.applyTransform([u[2], u[1]], s);
        return [Math.min(x[0], w[0], v[0], t[0]), Math.min(x[1], w[1], v[1], t[1]), Math.max(x[0], w[0], v[0], t[0]), Math.max(x[1], w[1], v[1], t[1])]
    };
    p.inverseTransform = function b(r) {
        var s = r[0] * r[3] - r[1] * r[2];
        return [r[3] / s, -r[1] / s, -r[2] / s, r[0] / s, (r[2] * r[5] - r[4] * r[3]) / s, (r[4] * r[1] - r[5] * r[0]) / s]
    };
    p.apply3dTransform = function m(r, s) {
        return [r[0] * s[0] + r[1] * s[1] + r[2] * s[2], r[3] * s[0] + r[4] * s[1] + r[5] * s[2], r[6] * s[0] + r[7] * s[1] + r[8] * s[2]]
    };
    p.singularValueDecompose2dScale = function l(s) {
        var u = [s[0], s[2], s[1], s[3]];
        var A = s[0] * u[0] + s[1] * u[2];
        var y = s[0] * u[1] + s[1] * u[3];
        var w = s[2] * u[0] + s[3] * u[2];
        var v = s[2] * u[1] + s[3] * u[3];
        var t = (A + v) / 2;
        var r = Math.sqrt((A + v) * (A + v) - 4 * (A * v - w * y)) / 2;
        var z = t + r || 1;
        var x = t - r || 1;
        return [Math.sqrt(z), Math.sqrt(x)]
    };
    p.normalizeRect = function a(t) {
        var s = t.slice(0);
        if (t[0] > t[2]) {
            s[0] = t[2];
            s[2] = t[0]
        }
        if (t[1] > t[3]) {
            s[1] = t[3];
            s[3] = t[1]
        }
        return s
    };
    p.intersect = function h(t, s) {
        function u(y, x) {
            return y - x
        }
        var w = [t[0], t[2], s[0], s[2]].sort(u),
            v = [t[1], t[3], s[1], s[3]].sort(u),
            r = [];
        t = p.normalizeRect(t);
        s = p.normalizeRect(s);
        if ((w[0] === t[0] && w[1] === s[0]) || (w[0] === s[0] && w[1] === t[0])) {
            r[0] = w[1];
            r[2] = w[2]
        } else {
            return false
        }
        if ((v[0] === t[1] && v[1] === s[1]) || (v[0] === s[1] && v[1] === t[1])) {
            r[1] = v[1];
            r[3] = v[2]
        } else {
            return false
        }
        return r
    };
    p.sign = function q(r) {
        return r < 0 ? -1 : 1
    };
    p.concatenateToArray = function d(s, r) {
        Array.prototype.push.apply(s, r)
    };
    p.prependToArray = function d(s, r) {
        Array.prototype.unshift.apply(s, r)
    };
    p.extendObj = function o(t, s) {
        for (var r in s) {
            t[r] = s[r]
        }
    };
    p.getInheritableProperty = function e(s, r) {
        while (s && !s.has(r)) {
            s = s.get("Parent")
        }
        if (!s) {
            return null
        }
        return s.get(r)
    };
    p.inherit = function c(s, t, r) {
        s.prototype = Object.create(t.prototype);
        s.prototype.constructor = s;
        for (var u in r) {
            s.prototype[u] = r[u]
        }
    };
    return p
})();
var PageViewport = PDFJS.PageViewport = (function PageViewportClosure() {
    function d(u, g, t, k, j, p) {
        this.viewBox = u;
        this.scale = g;
        this.rotation = t;
        this.offsetX = k;
        this.offsetY = j;
        var i = (u[2] + u[0]) / 2;
        var h = (u[3] + u[1]) / 2;
        var o, n, m, l;
        t = t % 360;
        t = t < 0 ? t + 360 : t;
        switch (t) {
            case 180:
                o = -1;
                n = 0;
                m = 0;
                l = 1;
                break;
            case 90:
                o = 0;
                n = 1;
                m = 1;
                l = 0;
                break;
            case 270:
                o = 0;
                n = -1;
                m = -1;
                l = 0;
                break;
            default:
                o = 1;
                n = 0;
                m = 0;
                l = -1;
                break
        }
        if (p) {
            m = -m;
            l = -l
        }
        var s, q;
        var f, r;
        if (o === 0) {
            s = Math.abs(h - u[1]) * g + k;
            q = Math.abs(i - u[0]) * g + j;
            f = Math.abs(u[3] - u[1]) * g;
            r = Math.abs(u[2] - u[0]) * g
        } else {
            s = Math.abs(i - u[0]) * g + k;
            q = Math.abs(h - u[1]) * g + j;
            f = Math.abs(u[2] - u[0]) * g;
            r = Math.abs(u[3] - u[1]) * g
        }
        this.transform = [o * g, n * g, m * g, l * g, s - o * g * i - m * g * h, q - n * g * i - l * g * h];
        this.width = f;
        this.height = r;
        this.fontScale = g
    }
    d.prototype = {
        clone: function b(f) {
            f = f || {};
            var h = "scale" in f ? f.scale : this.scale;
            var g = "rotation" in f ? f.rotation : this.rotation;
            return new d(this.viewBox.slice(), h, g, this.offsetX, this.offsetY, f.dontFlip)
        },
        convertToViewportPoint: function c(f, g) {
            return Util.applyTransform([f, g], this.transform)
        },
        convertToViewportRectangle: function a(h) {
            var f = Util.applyTransform([h[0], h[1]], this.transform);
            var g = Util.applyTransform([h[2], h[3]], this.transform);
            return [f[0], f[1], g[0], g[1]]
        },
        convertToPdfPoint: function e(f, g) {
            return Util.applyInverseTransform([f, g], this.transform)
        }
    };
    return d
})();
var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];

function stringToPDFString(d) {
    var a, e = d.length,
        c = "";
    if (d[0] === "\xFE" && d[1] === "\xFF") {
        for (a = 2; a < e; a += 2) {
            c += String.fromCharCode((d.charCodeAt(a) << 8) | d.charCodeAt(a + 1))
        }
    } else {
        for (a = 0; a < e; ++a) {
            var b = PDFStringTranslateTable[d.charCodeAt(a)];
            c += b ? String.fromCharCode(b) : d.charAt(a)
        }
    }
    return c
}

function stringToUTF8String(a) {
    return decodeURIComponent(escape(a))
}

function isEmptyObj(b) {
    for (var a in b) {
        return false
    }
    return true
}

function isBool(a) {
    return typeof a == "boolean"
}

function isInt(a) {
    return typeof a == "number" && ((a | 0) == a)
}

function isNum(a) {
    return typeof a == "number"
}

function isString(a) {
    return typeof a == "string"
}

function isNull(a) {
    return a === null
}

function isName(a) {
    return a instanceof Name
}

function isCmd(a, b) {
    return a instanceof Cmd && (!b || a.cmd == b)
}

function isDict(b, c) {
    if (!(b instanceof Dict)) {
        return false
    }
    if (!c) {
        return true
    }
    var a = b.get("Type");
    return isName(a) && a.name == c
}

function isArray(a) {
    return a instanceof Array
}

function isStream(a) {
    return typeof a == "object" && a !== null && a !== undefined && ("getChar" in a)
}

function isArrayBuffer(a) {
    return typeof a == "object" && a !== null && a !== undefined && ("byteLength" in a)
}

function isRef(a) {
    return a instanceof Ref
}

function isPDFFunction(a) {
    var b;
    if (typeof a != "object") {
        return false
    } else {
        if (isDict(a)) {
            b = a
        } else {
            if (isStream(a)) {
                b = a.dict
            } else {
                return false
            }
        }
    }
    return b.has("FunctionType")
}
var Promise = PDFJS.Promise = (function PromiseClosure() {
    var a = 0;
    var g = 1;
    var i = 2;
    var p = 500;
    var j = {
        handlers: [],
        running: false,
        unhandledRejections: [],
        pendingRejectionCheck: false,
        scheduleHandlers: function o(q) {
            if (q._status == a) {
                return
            }
            this.handlers = this.handlers.concat(q._handlers);
            q._handlers = [];
            if (this.running) {
                return
            }
            this.running = true;
            setTimeout(this.runHandlers.bind(this), 0)
        },
        runHandlers: function m() {
            while (this.handlers.length > 0) {
                var s = this.handlers.shift();
                var t = s.thisPromise._status;
                var r = s.thisPromise._value;
                try {
                    if (t === g) {
                        if (typeof(s.onResolve) == "function") {
                            r = s.onResolve(r)
                        }
                    } else {
                        if (typeof(s.onReject) === "function") {
                            r = s.onReject(r);
                            t = g;
                            if (s.thisPromise._unhandledRejection) {
                                this.removeUnhandeledRejection(s.thisPromise)
                            }
                        }
                    }
                } catch (q) {
                    t = i;
                    r = q
                }
                s.nextPromise._updateStatus(t, r)
            }
            this.running = false
        },
        addUnhandledRejection: function d(q) {
            this.unhandledRejections.push({
                promise: q,
                time: Date.now()
            });
            this.scheduleRejectionCheck()
        },
        removeUnhandeledRejection: function c(r) {
            r._unhandledRejection = false;
            for (var q = 0; q < this.unhandledRejections.length; q++) {
                if (this.unhandledRejections[q].promise === r) {
                    this.unhandledRejections.splice(q);
                    q--
                }
            }
        },
        scheduleRejectionCheck: function k() {
            if (this.pendingRejectionCheck) {
                return
            }
            this.pendingRejectionCheck = true;
            setTimeout(function q() {
                this.pendingRejectionCheck = false;
                var r = Date.now();
                for (var s = 0; s < this.unhandledRejections.length; s++) {
                    if (r - this.unhandledRejections[s].time > p) {
                        this.unhandledRejections.splice(s);
                        s--
                    }
                }
                if (this.unhandledRejections.length) {
                    this.scheduleRejectionCheck()
                }
            }.bind(this), p)
        }
    };

    function l() {
        this._status = a;
        this._handlers = []
    }
    l.all = function n(u) {
        var r = new l();
        var q = u.length;
        var t = [];
        if (q === 0) {
            r.resolve(t);
            return r
        }

        function w(y) {
            if (r._status === i) {
                return
            }
            t = [];
            r.reject(y)
        }
        for (var s = 0, v = u.length; s < v; ++s) {
            var x = u[s];
            x.then((function(y) {
                return function(z) {
                    if (r._status === i) {
                        return
                    }
                    t[y] = z;
                    q--;
                    if (q === 0) {
                        r.resolve(t)
                    }
                }
            })(s), w)
        }
        return r
    };
    l.prototype = {
        _status: null,
        _value: null,
        _handlers: null,
        _unhandledRejection: null,
        _updateStatus: function f(q, r) {
            if (this._status === g || this._status === i) {
                return
            }
            if (q == g && r && typeof(r.then) === "function") {
                r.then(this._updateStatus.bind(this, g), this._updateStatus.bind(this, i));
                return
            }
            this._status = q;
            this._value = r;
            if (q === i && this._handlers.length === 0) {
                this._unhandledRejection = true;
                j.addUnhandledRejection(this)
            }
            j.scheduleHandlers(this)
        },
        get isResolved() {
            return this._status === g
        },
        get isRejected() {
            return this._status === i
        },
        resolve: function h(q) {
            this._updateStatus(g, q)
        },
        reject: function b(q) {
            this._updateStatus(i, q)
        },
        then: function e(r, s) {
            var q = new l();
            this._handlers.push({
                thisPromise: this,
                onResolve: r,
                onReject: s,
                nextPromise: q
            });
            j.scheduleHandlers(this);
            return q
        }
    };
    return l
})();
var StatTimer = (function StatTimerClosure() {
    function d(h, g, f) {
        while (h.length < f) {
            h += g
        }
        return h
    }

    function e() {
        this.started = {};
        this.times = [];
        this.enabled = true
    }
    e.prototype = {
        time: function b(f) {
            if (!this.enabled) {
                return
            }
            if (f in this.started) {
                throw "Timer is already running for " + f
            }
            this.started[f] = Date.now()
        },
        timeEnd: function c(f) {
            if (!this.enabled) {
                return
            }
            if (!(f in this.started)) {
                throw "Timer has not been started for " + f
            }
            this.times.push({
                name: f,
                start: this.started[f],
                end: Date.now()
            });
            delete this.started[f]
        },
        toString: function a() {
            var n = this.times;
            var g = "";
            var j = 0;
            for (var h = 0, l = n.length; h < l; ++h) {
                var f = n[h]["name"];
                if (f.length > j) {
                    j = f.length
                }
            }
            for (var h = 0, l = n.length; h < l; ++h) {
                var k = n[h];
                var m = k.end - k.start;
                g += d(k.name, " ", j) + " " + m + "ms\n"
            }
            return g
        }
    };
    return e
})();
PDFJS.createBlob = function createBlob(a, c) {
    if (typeof Blob === "function") {
        return new Blob([a], {
            type: c
        })
    }
    var b = new MozBlobBuilder();
    b.append(a);
    return b.getBlob(c)
};
"use strict";
PDFJS.getDocument = function getDocument(b, i, g, f) {
    var h, a, d;
    if (typeof b === "string") {
        b = {
            url: b
        }
    } else {
        if (isArrayBuffer(b)) {
            b = {
                data: b
            }
        } else {
            if (typeof b !== "object") {
                error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object")
            }
        }
    }
    if (!b.url && !b.data) {
        error("Invalid parameter array, need either .data or .url")
    }
    var e = {};
    for (var j in b) {
        if (j === "url" && typeof window !== "undefined") {
            e[j] = combineUrl(window.location.href, b[j]);
            continue
        }
        e[j] = b[j]
    }
    h = new PDFJS.Promise();
    a = new PDFJS.Promise();
    d = new WorkerTransport(h, a, i, f);
    h.then(function c() {
        d.passwordCallback = g;
        d.fetchDocument(e)
    });
    return a
};
var PDFDocumentProxy = (function PDFDocumentProxyClosure() {
    function h(k, j) {
        this.pdfInfo = k;
        PDFPageCount._callbackFunc(k.numPages);
        this.transport = j
    }
    h.prototype = {get numPages() {
            return this.pdfInfo.numPages
        },
        get fingerprint() {
            return this.pdfInfo.fingerprint
        },
        get embeddedFontsUsed() {
            return this.transport.embeddedFontsUsed
        },
        getPage: function f(j) {
            return this.transport.getPage(j)
        },
        getDestinations: function e() {
            return this.transport.getDestinations()
        },
        getJavaScript: function e() {
            var k = new PDFJS.Promise();
            var j = this.pdfInfo.javaScript;
            k.resolve(j);
            return k
        },
        getOutline: function g() {
            var k = new PDFJS.Promise();
            var j = this.pdfInfo.outline;
            k.resolve(j);
            return k
        },
        getMetadata: function a() {
            var l = new PDFJS.Promise();
            var k = this.pdfInfo.info;
            var j = this.pdfInfo.metadata;
            l.resolve({
                info: k,
                metadata: j ? new PDFJS.Metadata(j) : null
            });
            return l
        },
        isEncrypted: function d() {
            var j = new PDFJS.Promise();
            j.resolve(this.pdfInfo.encrypted);
            return j
        },
        getData: function b() {
            var j = new PDFJS.Promise();
            this.transport.getData(j);
            return j
        },
        dataLoaded: function c() {
            return this.transport.dataLoaded()
        },
        destroy: function i() {
            this.transport.destroy()
        }
    };
    return h
})();
var PDFPageProxy = (function PDFPageProxyClosure() {
    function c(k, l) {
        this.pageInfo = k;
        this.transport = l;
        this.stats = new StatTimer();
        this.stats.enabled = !!globalScope.PDFJS.enableStats;
        this.commonObjs = l.commonObjs;
        this.objs = new PDFObjects();
        this.renderInProgress = false;
        this.cleanupAfterRender = false
    }
    c.prototype = {get pageNumber() {
            return this.pageInfo.pageIndex + 1
        },
        get rotate() {
            return this.pageInfo.rotate
        },
        get ref() {
            return this.pageInfo.ref
        },
        get view() {
            return this.pageInfo.view
        },
        getViewport: function d(l, k) {
            if (arguments.length < 2) {
                k = this.rotate
            }
            return new PDFJS.PageViewport(this.view, l, k, 0, 0)
        },
        getAnnotations: function g() {
            if (this.annotationsPromise) {
                return this.annotationsPromise
            }
            var k = new PDFJS.Promise();
            this.annotationsPromise = k;
            this.transport.getAnnotations(this.pageInfo.pageIndex);
            return k
        },
        render: function a(r) {
            this.renderInProgress = true;
            var q = new Promise();
            var o = this.stats;
            o.time("Overall");
            if (!this.displayReadyPromise) {
                this.displayReadyPromise = new Promise();
                this.destroyed = false;
                this.stats.time("Page Request");
                this.transport.messageHandler.send("RenderPageRequest", {
                    pageIndex: this.pageNumber - 1
                })
            }
            var n = this;

            function l(s) {
                n.renderInProgress = false;
                if (n.destroyed || n.cleanupAfterRender) {
                    delete n.displayReadyPromise;
                    delete n.operatorList;
                    n.objs.clear()
                }
                if (s) {
                    q.reject(s)
                } else {
                    q.resolve()
                }
            }
            var p = r.continueCallback;
            this.displayReadyPromise.then(function m() {
                if (n.destroyed) {
                    l();
                    return
                }
                var s = new CanvasGraphics(r.canvasContext, this.commonObjs, this.objs, r.textLayer, r.imageLayer);
                try {
                    this.display(s, r.viewport, l, p)
                } catch (t) {
                    l(t)
                }
            }.bind(this), function k(s) {
                l(s)
            });
            return q
        },
        startRenderingFromOperatorList: function h(n, m) {
            var k = this;
            this.operatorList = n;
            this.ensureFonts(m, function l() {
                k.displayReadyPromise.resolve()
            })
        },
        ensureFonts: function i(q, p) {
            this.stats.time("Font Loading");
            var k = [];
            for (var l = 0, n = q.length; l < n; l++) {
                var o = this.commonObjs.getData(q[l]);
                if (o.error) {
                    warn("Error during font loading: " + o.error);
                    continue
                }
                if (!o.coded) {
                    this.transport.embeddedFontsUsed = true
                }
                k.push(o)
            }
            FontLoader.bind(k, function m(r) {
                this.stats.timeEnd("Font Loading");
                p.call(this)
            }.bind(this))
        },
        display: function j(r, p, u, t) {
            var o = this.stats;
            o.time("Rendering");
            var l = this.operatorList;
            r.beginDrawing(p, l.transparency);
            var q = 0;
            var k = l.fnArray.length;
            var m = null;
            if (PDFJS.pdfBug && "StepperManager" in globalScope && globalScope.StepperManager.enabled) {
                m = globalScope.StepperManager.create(this.pageNumber - 1);
                m.init(l);
                m.nextBreakPoint = m.getNextBreakPoint()
            }
            var s;
            if (t) {
                s = function() {
                    t(n)
                }
            } else {
                s = n
            }
            var v = this;

            function n() {
                q = r.executeOperatorList(l, q, s, m);
                if (q == k) {
                    r.endDrawing();
                    o.timeEnd("Rendering");
                    o.timeEnd("Overall");
                    if (u) {
                        u()
                    }
                }
            }
            s()
        },
        getTextContent: function e() {
            var l = new PDFJS.Promise();
            this.transport.messageHandler.send("GetTextContent", {
                pageIndex: this.pageNumber - 1
            }, function k(m) {
                l.resolve(m)
            });
            return l
        },
        getOperationList: function f() {
            var l = new PDFJS.Promise();
            var k = {
                dependencyFontsID: null,
                operatorList: null
            };
            l.resolve(k);
            return l
        },
        destroy: function b() {
            this.destroyed = true;
            if (!this.renderInProgress) {
                delete this.operatorList;
                delete this.displayReadyPromise;
                this.objs.clear()
            }
        }
    };
    return c
})();
var WorkerTransport = (function WorkerTransportClosure() {
    function b(p, k, s, n) {
        this.pdfDataRangeTransport = s;
        this.workerReadyPromise = k;
        this.progressCallback = n;
        this.commonObjs = new PDFObjects();
        this.pageCache = [];
        this.pagePromises = [];
        this.embeddedFontsUsed = false;
        this.passwordCallback = null;
        if (!globalScope.PDFJS.disableWorker && typeof Worker !== "undefined") {
            var r = PDFJS.workerSrc;
            if (typeof r === "undefined") {
                error("No PDFJS.workerSrc specified")
            }
            try {
                var m = new Worker(r);
                var q = new MessageHandler("main", m);
                this.messageHandler = q;
                q.on("test", function t(u) {
                    if (u) {
                        this.worker = m;
                        this.setupMessageHandler(q)
                    } else {
                        globalScope.PDFJS.disableWorker = true;
                        this.setupFakeWorker()
                    }
                    p.resolve()
                }.bind(this));
                var l = new Uint8Array(1);
                q.send("test", l);
                return
            } catch (o) {
                info("The worker has been disabled.")
            }
        }
        globalScope.PDFJS.disableWorker = true;
        this.setupFakeWorker();
        p.resolve()
    }
    b.prototype = {
        destroy: function f() {
            this.pageCache = [];
            this.pagePromises = [];
            var k = this;
            this.messageHandler.send("Terminate", null, function() {
                if (k.worker) {
                    k.worker.terminate()
                }
            })
        },
        setupFakeWorker: function i() {
            var n = {
                postMessage: function k(o) {
                    n.onmessage({
                        data: o
                    })
                },
                terminate: function l() {}
            };
            var m = new MessageHandler("main", n);
            this.setupMessageHandler(m);
            WorkerMessageHandler.setup(m)
        },
        setupMessageHandler: function g(u) {
            this.messageHandler = u;

            function z(B) {
                u.send("UpdatePassword", B)
            }
            var x = this.pdfDataRangeTransport;
            if (x) {
                x.addRangeListener(function(C, B) {
                    u.send("OnDataRange", {
                        begin: C,
                        chunk: B
                    })
                });
                x.addProgressListener(function(B) {
                    u.send("OnDataProgress", {
                        loaded: B
                    })
                });
                u.on("RequestDataRange", function l(B) {
                    x.requestDataRange(B.begin, B.end)
                }, this)
            }
            u.on("GetDoc", function n(C) {
                var D = C.pdfInfo;
                var B = new PDFDocumentProxy(D, this);
                this.pdfDocument = B;
                this.workerReadyPromise.resolve(B)
            }, this);
            u.on("NeedPassword", function o(B) {
                if (this.passwordCallback) {
                    return this.passwordCallback(z, PasswordResponses.NEED_PASSWORD)
                }
                this.workerReadyPromise.reject(B.exception.message, B.exception)
            }, this);
            u.on("IncorrectPassword", function A(B) {
                if (this.passwordCallback) {
                    return this.passwordCallback(z, PasswordResponses.INCORRECT_PASSWORD)
                }
                this.workerReadyPromise.reject(B.exception.message, B.exception)
            }, this);
            u.on("InvalidPDF", function m(B) {
                this.workerReadyPromise.reject(B.exception.name, B.exception)
            }, this);
            u.on("MissingPDF", function w(B) {
                this.workerReadyPromise.reject(B.exception.message, B.exception)
            }, this);
            u.on("UnknownError", function q(B) {
                this.workerReadyPromise.reject(B.exception.message, B.exception)
            }, this);
            u.on("GetPage", function y(D) {
                var B = D.pageInfo;
                var C = new PDFPageProxy(B, this);
                this.pageCache[B.pageIndex] = C;
                var E = this.pagePromises[B.pageIndex];
                E.resolve(C)
            }, this);
            u.on("GetAnnotations", function p(B) {
                var C = B.annotations;
                var D = this.pageCache[B.pageIndex].annotationsPromise;
                D.resolve(C)
            }, this);
            u.on("RenderPage", function s(D) {
                var C = this.pageCache[D.pageIndex];
                var B = D.depFonts;
                C.stats.timeEnd("Page Request");
                C.startRenderingFromOperatorList(D.operatorList, B)
            }, this);
            u.on("commonobj", function v(E) {
                var F = E[0];
                var D = E[1];
                if (this.commonObjs.hasData(F)) {
                    return
                }
                switch (D) {
                    case "Font":
                        var C = E[2];
                        var B;
                        if ("error" in C) {
                            B = new ErrorFont(C.error)
                        } else {
                            B = new Font(C)
                        }
                        this.commonObjs.resolve(F, B);
                        break;
                    default:
                        error("Got unknown common object type " + D)
                }
            }, this);
            u.on("obj", function v(F) {
                var H = F[0];
                var B = F[1];
                var E = F[2];
                var C = this.pageCache[B];
                if (C.objs.hasData(H)) {
                    return
                }
                switch (E) {
                    case "JpegStream":
                        var G = F[3];
                        loadJpegStream(H, G, C.objs);
                        break;
                    case "Image":
                        var G = F[3];
                        C.objs.resolve(H, G);
                        var D = 8000000;
                        if ("data" in G && G.data.length > D) {
                            C.cleanupAfterRender = true
                        }
                        break;
                    default:
                        error("Got unknown object type " + E)
                }
            }, this);
            u.on("DocProgress", function k(B) {
                this.progressCallback({
                    loaded: B.loaded,
                    total: B.total
                })
            }, this);
            u.on("DocError", function r(B) {
                this.workerReadyPromise.reject(B)
            }, this);
            u.on("PageError", function t(C) {
                var B = this.pageCache[C.pageNum - 1];
                if (B.displayReadyPromise) {
                    B.displayReadyPromise.reject(C.error)
                } else {
                    error(C.error)
                }
            }, this);
            u.on("JpegDecode", function(E, G) {
                var H = E[0];
                var C = E[1];
                if (C != 3 && C != 1) {
                    error("Only 3 component or 1 component can be returned")
                }
                var B = new Image();
                B.onload = (function D() {
                    var I = B.width;
                    var Q = B.height;
                    var R = I * Q;
                    var N = R * 4;
                    var J = new Uint8Array(R * C);
                    var O = createScratchCanvas(I, Q);
                    var P = O.getContext("2d");
                    P.drawImage(B, 0, 0);
                    var M = P.getImageData(0, 0, I, Q).data;
                    if (C == 3) {
                        for (var L = 0, K = 0; L < N; L += 4, K += 3) {
                            J[K] = M[L];
                            J[K + 1] = M[L + 1];
                            J[K + 2] = M[L + 2]
                        }
                    } else {
                        if (C == 1) {
                            for (var L = 0, K = 0; L < N; L += 4, K++) {
                                J[K] = M[L]
                            }
                        }
                    }
                    G.resolve({
                        data: J,
                        width: I,
                        height: Q
                    })
                }).bind(this);
                var F = "data:image/jpeg;base64," + window.btoa(H);
                B.src = F
            })
        },
        fetchDocument: function j(k) {
            k.disableAutoFetch = PDFJS.disableAutoFetch;
            k.chunkedViewerLoading = !!this.pdfDataRangeTransport;
            this.messageHandler.send("GetDocRequest", {
                source: k,
                disableRange: PDFJS.disableRange
            })
        },
        getData: function c(k) {
            this.messageHandler.send("GetData", null, function(l) {
                k.resolve(l)
            })
        },
        dataLoaded: function e() {
            var k = new PDFJS.Promise();
            this.messageHandler.send("DataLoaded", null, function(l) {
                k.resolve(l)
            });
            return k
        },
        getPage: function d(l, m) {
            var k = l - 1;
            if (k in this.pagePromises) {
                return this.pagePromises[k]
            }
            var m = new PDFJS.Promise("Page " + l);
            this.pagePromises[k] = m;
            this.messageHandler.send("GetPageRequest", {
                pageIndex: k
            });
            return m
        },
        getAnnotations: function a(k) {
            this.messageHandler.send("GetAnnotationsRequest", {
                pageIndex: k
            })
        },
        getDestinations: function h() {
            var l = new PDFJS.Promise();
            this.messageHandler.send("GetDestinations", null, function k(m) {
                l.resolve(m)
            });
            return l
        }
    };
    return b
})();
"use strict";
var Name = (function NameClosure() {
    function a(b) {
        this.name = b
    }
    a.prototype = {};
    return a
})();
var Cmd = (function CmdClosure() {
    function a(d) {
        this.cmd = d
    }
    a.prototype = {};
    var b = {};
    a.get = function c(d) {
        var e = b[d];
        if (e) {
            return e
        }
        return b[d] = new a(d)
    };
    return a
})();
var Dict = (function DictClosure() {
    var b = function a() {
        return b
    };

    function g(l) {
        this.map = Object.create(null);
        this.xref = l;
        this.__nonSerializable__ = b
    }
    g.prototype = {
        assignXref: function i(l) {
            this.xref = l
        },
        get: function f(n, m, l) {
            var o;
            var p = this.xref;
            if (typeof(o = this.map[n]) != "undefined" || n in this.map || typeof m == "undefined") {
                return p ? p.fetchIfRef(o) : o
            }
            if (typeof(o = this.map[m]) != "undefined" || m in this.map || typeof l == "undefined") {
                return p ? p.fetchIfRef(o) : o
            }
            o = this.map[l] || null;
            return p ? p.fetchIfRef(o) : o
        },
        getAsync: function h(n, m, l) {
            var o;
            var q;
            var p = this.xref;
            if (typeof(o = this.map[n]) !== undefined || n in this.map || typeof m === undefined) {
                if (p) {
                    return p.fetchIfRefAsync(o)
                }
                q = new Promise();
                q.resolve(o);
                return q
            }
            if (typeof(o = this.map[m]) !== undefined || m in this.map || typeof l === undefined) {
                if (p) {
                    return p.fetchIfRefAsync(o)
                }
                q = new Promise();
                q.resolve(o);
                return q
            }
            o = this.map[l] || null;
            if (p) {
                return p.fetchIfRefAsync(o)
            }
            q = new Promise();
            q.resolve(o);
            return q
        },
        getRaw: function e(l) {
            return this.map[l]
        },
        getAll: function d() {
            var m = {};
            for (var l in this.map) {
                var n = this.get(l);
                m[l] = n instanceof g ? n.getAll() : n
            }
            return m
        },
        set: function j(l, m) {
            this.map[l] = m
        },
        has: function k(l) {
            return l in this.map
        },
        forEach: function c(m) {
            for (var l in this.map) {
                m(l, this.get(l))
            }
        }
    };
    return g
})();
var Ref = (function RefClosure() {
    function a(b, c) {
        this.num = b;
        this.gen = c
    }
    a.prototype = {};
    return a
})();
var RefSet = (function RefSetClosure() {
    function c() {
        this.dict = {}
    }
    c.prototype = {
        has: function b(e) {
            return ("R" + e.num + "." + e.gen) in this.dict
        },
        put: function d(e) {
            this.dict["R" + e.num + "." + e.gen] = true
        },
        remove: function a(e) {
            delete this.dict["R" + e.num + "." + e.gen]
        }
    };
    return c
})();
var Catalog = (function CatalogClosure() {
    function c(d, e) {
        this.pdfManager = d;
        this.xref = e;
        this.catDict = e.getCatalogObj();
        assertWellFormed(isDict(this.catDict), "catalog object is not a dictionary");
        this.traversePagesQueue = [{
            pagesDict: this.toplevelPagesDict,
            posInKids: 0
        }];
        this.pagePromises = [];
        this.currPageIndex = 0
    }
    c.prototype = {get metadata() {
            var h = this.catDict.getRaw("Metadata");
            if (!isRef(h)) {
                return shadow(this, "metadata", null)
            }
            var k = !this.xref.encrypt ? false : this.xref.encrypt.encryptMetadata;
            var j = this.xref.fetch(h, !k);
            var f;
            if (j && isDict(j.dict)) {
                var g = j.dict.get("Type");
                var d = j.dict.get("Subtype");
                if (isName(g) && isName(d) && g.name === "Metadata" && d.name === "XML") {
                    try {
                        f = stringToUTF8String(bytesToString(j.getBytes()))
                    } catch (i) {
                        info("Skipping invalid metadata.")
                    }
                }
            }
            return shadow(this, "metadata", f)
        },
        get toplevelPagesDict() {
            var d = this.catDict.get("Pages");
            assertWellFormed(isDict(d), "invalid top-level pages dictionary");
            return shadow(this, "toplevelPagesDict", d)
        },
        get documentOutline() {
            var n = this.xref;
            var g = this.catDict.get("Outlines");
            var k = {
                items: []
            };
            if (isDict(g)) {
                g = g.getRaw("First");
                var e = new RefSet();
                if (isRef(g)) {
                    var j = [{
                        obj: g,
                        parent: k
                    }];
                    e.put(g);
                    while (j.length > 0) {
                        var h = j.shift();
                        var f = n.fetchIfRef(h.obj);
                        if (f === null) {
                            continue
                        }
                        if (!f.has("Title")) {
                            error("Invalid outline item")
                        }
                        var m = f.get("A");
                        if (m) {
                            m = m.get("D")
                        } else {
                            if (f.has("Dest")) {
                                m = f.getRaw("Dest");
                                if (isName(m)) {
                                    m = m.name
                                }
                            }
                        }
                        var l = f.get("Title");
                        var d = {
                            dest: m,
                            title: stringToPDFString(l),
                            color: f.get("C") || [0, 0, 0],
                            count: f.get("Count"),
                            bold: !!(f.get("F") & 2),
                            italic: !!(f.get("F") & 1),
                            items: []
                        };
                        h.parent.items.push(d);
                        g = f.getRaw("First");
                        if (isRef(g) && !e.has(g)) {
                            j.push({
                                obj: g,
                                parent: d
                            });
                            e.put(g)
                        }
                        g = f.getRaw("Next");
                        if (isRef(g) && !e.has(g)) {
                            j.push({
                                obj: g,
                                parent: h.parent
                            });
                            e.put(g)
                        }
                    }
                }
            }
            g = k.items.length > 0 ? k.items : null;
            return shadow(this, "documentOutline", g)
        },
        get numPages() {
            var d = this.toplevelPagesDict.get("Count");
            assertWellFormed(isInt(d), "page count in top level pages object is not an integer");
            return shadow(this, "num", d)
        },
        get destinations() {
            function k(n) {
                return isDict(n) ? n.get("D") : n
            }
            var m = this.xref;
            var g = {},
                j, e;
            var f = this.catDict.get("Names");
            if (f) {
                j = f.getRaw("Dests")
            } else {
                if (this.catDict.has("Dests")) {
                    e = this.catDict.get("Dests")
                }
            }
            if (e) {
                f = e;
                f.forEach(function h(n, o) {
                    if (!o) {
                        return
                    }
                    g[n] = k(o)
                })
            }
            if (j) {
                var l = new NameTree(j, m);
                var i = l.getAll();
                for (var d in i) {
                    if (!i.hasOwnProperty(d)) {
                        continue
                    }
                    g[d] = k(i[d])
                }
            }
            return shadow(this, "destinations", g)
        },
        get javaScript() {
            var l = this.xref;
            var g = this.catDict.get("Names");
            var k = [];
            if (g && g.has("JavaScript")) {
                var j = new NameTree(g.getRaw("JavaScript"), l);
                var h = j.getAll();
                for (var d in h) {
                    if (!h.hasOwnProperty(d)) {
                        continue
                    }
                    var f = h[d];
                    if (!isDict(f)) {
                        continue
                    }
                    var i = f.get("S");
                    if (!isName(i) || i.name !== "JavaScript") {
                        continue
                    }
                    var e = f.get("JS");
                    if (!isString(e) && !isStream(e)) {
                        continue
                    }
                    if (isStream(e)) {
                        e = bytesToString(e.getBytes())
                    }
                    k.push(stringToPDFString(e))
                }
            }
            return shadow(this, "javaScript", k)
        },
        getPage: function a(d) {
            if (!(d in this.pagePromises)) {
                this.pagePromises[d] = new Promise()
            }
            return this.pagePromises[d]
        },
        traversePages: function b() {
            var f = this.traversePagesQueue;
            while (f.length) {
                var k = f[f.length - 1];
                var h = k.pagesDict;
                var g = h.get("Kids");
                assert(isArray(g), "page dictionary kids object is not an array");
                if (k.posInKids >= g.length) {
                    f.pop();
                    continue
                }
                var j = g[k.posInKids];
                assert(isRef(j), "page dictionary kid is not a reference");
                var e = this.xref.fetch(j);
                if (isDict(e, "Page") || (isDict(e) && !e.has("Kids"))) {
                    var d = this.currPageIndex++;
                    var i = new Page(this.pdfManager, this.xref, d, e, j);
                    if (!(d in this.pagePromises)) {
                        this.pagePromises[d] = new Promise()
                    }
                    this.pagePromises[d].resolve(i)
                } else {
                    assert(isDict(e), "page dictionary kid reference points to wrong type of object");
                    f.push({
                        pagesDict: e,
                        posInKids: 0
                    })
                }++k.posInKids
            }
        }
    };
    return c
})();
var XRef = (function XRefClosure() {
    function d(q, p) {
        this.stream = q;
        this.entries = [];
        this.xrefstms = {};
        this.cache = [];
        this.password = p
    }
    d.prototype = {
        setStartXRef: function k(p) {
            this.startXRefQueue = [p]
        },
        parse: function e(t) {
            var r;
            if (!t) {
                r = this.readXRef()
            } else {
                warn("Indexing all PDF objects");
                r = this.indexObjects()
            }
            r.assignXref(this);
            this.trailer = r;
            var s = r.get("Encrypt");
            if (s) {
                var q = r.get("ID");
                var p = (q && q.length) ? q[0] : "";
                this.encrypt = new CipherTransformFactory(s, p, this.password)
            }
            if (!(this.root = r.get("Root"))) {
                error("Invalid root reference")
            }
        },
        processXRefTable: function l(r) {
            if (!("tableState" in this)) {
                this.tableState = {
                    entryNum: 0,
                    streamPos: r.lexer.stream.pos,
                    parserBuf1: r.buf1,
                    parserBuf2: r.buf2
                }
            }
            var p = this.readXRefTable(r);
            if (!isCmd(p, "trailer")) {
                error("Invalid XRef table: could not find trailer dictionary")
            }
            var q = r.getObj();
            if (!isDict(q)) {
                error("Invalid XRef table: could not parse trailer dictionary")
            }
            delete this.tableState;
            return q
        },
        readXRefTable: function c(p) {
            var x = p.lexer.stream;
            var t = this.tableState;
            x.pos = t.streamPos;
            p.buf1 = t.parserBuf1;
            p.buf2 = t.parserBuf2;
            var q;
            while (true) {
                if (!("firstEntryNum" in t) || !("entryCount" in t)) {
                    if (isCmd(q = p.getObj(), "trailer")) {
                        break
                    }
                    t.firstEntryNum = q;
                    t.entryCount = p.getObj()
                }
                var s = t.firstEntryNum;
                var u = t.entryCount;
                if (!isInt(s) || !isInt(u)) {
                    error("Invalid XRef table: wrong types in subsection header")
                }
                for (var r = t.entryNum; r < u; r++) {
                    t.streamPos = x.pos;
                    t.entryNum = r;
                    t.parserBuf1 = p.buf1;
                    t.parserBuf2 = p.buf2;
                    var w = {};
                    w.offset = p.getObj();
                    w.gen = p.getObj();
                    var v = p.getObj();
                    if (isCmd(v, "f")) {
                        w.free = true
                    } else {
                        if (isCmd(v, "n")) {
                            w.uncompressed = true
                        }
                    }
                    if (!isInt(w.offset) || !isInt(w.gen) || !(w.free || w.uncompressed)) {
                        console.log(w.offset, w.gen, w.free, w.uncompressed);
                        error("Invalid entry in XRef subsection: " + s + ", " + u)
                    }
                    if (!this.entries[r + s]) {
                        this.entries[r + s] = w
                    }
                }
                t.entryNum = 0;
                t.streamPos = x.pos;
                t.parserBuf1 = p.buf1;
                t.parserBuf2 = p.buf2;
                delete t.firstEntryNum;
                delete t.entryCount
            }
            if (this.entries[0] && !this.entries[0].free) {
                error("Invalid XRef table: unexpected first object")
            }
            return q
        },
        processXRefStream: function j(s) {
            if (!("streamState" in this)) {
                var p = s.dict;
                var r = p.get("W");
                var q = p.get("Index");
                if (!q) {
                    q = [0, p.get("Size")]
                }
                this.streamState = {
                    entryRanges: q,
                    byteWidths: r,
                    entryNum: 0,
                    streamPos: s.pos
                }
            }
            this.readXRefStream(s);
            delete this.streamState;
            return s.dict
        },
        readXRefStream: function o(D) {
            var w, u;
            var y = this.streamState;
            D.pos = y.streamPos;
            var q = y.byteWidths;
            var p = q[0];
            var A = q[1];
            var v = q[2];
            var t = y.entryRanges;
            while (t.length > 0) {
                var x = t[0];
                var r = t[1];
                if (!isInt(x) || !isInt(r)) {
                    error("Invalid XRef range fields: " + x + ", " + r)
                }
                if (!isInt(p) || !isInt(A) || !isInt(v)) {
                    error("Invalid XRef entry fields length: " + x + ", " + r)
                }
                for (w = y.entryNum; w < r; ++w) {
                    y.entryNum = w;
                    y.streamPos = D.pos;
                    var z = 0,
                        s = 0,
                        C = 0;
                    for (u = 0; u < p; ++u) {
                        z = (z << 8) | D.getByte()
                    }
                    if (p === 0) {
                        z = 1
                    }
                    for (u = 0; u < A; ++u) {
                        s = (s << 8) | D.getByte()
                    }
                    for (u = 0; u < v; ++u) {
                        C = (C << 8) | D.getByte()
                    }
                    var B = {};
                    B.offset = s;
                    B.gen = C;
                    switch (z) {
                        case 0:
                            B.free = true;
                            break;
                        case 1:
                            B.uncompressed = true;
                            break;
                        case 2:
                            break;
                        default:
                            error("Invalid XRef entry type: " + z)
                    }
                    if (!this.entries[x + w]) {
                        this.entries[x + w] = B
                    }
                }
                y.entryNum = 0;
                y.streamPos = D.pos;
                t.splice(0, 2)
            }
        },
        indexObjects: function n() {
            function z(Q, R) {
                var O = "",
                    P = Q[R];
                while (P !== 13 && P !== 10) {
                    if (++R >= Q.length) {
                        break
                    }
                    O += String.fromCharCode(P);
                    P = Q[R]
                }
                return O
            }

            function H(R, U, T) {
                var Q = T.length,
                    S = R.length;
                var O = 0;
                while (U < S) {
                    var P = 0;
                    while (P < Q && R[U + P] == T[P]) {
                        ++P
                    }
                    if (P >= Q) {
                        break
                    }
                    U++;
                    O++
                }
                return O
            }
            var t = new Uint8Array([116, 114, 97, 105, 108, 101, 114]);
            var y = new Uint8Array([115, 116, 97, 114, 116, 120, 114, 101, 102]);
            var D = new Uint8Array([101, 110, 100, 111, 98, 106]);
            var M = new Uint8Array([47, 88, 82, 101, 102]);
            var x = this.stream;
            x.pos = 0;
            var K = x.getBytes();
            var N = x.start,
                u = K.length;
            var p = [],
                q = [];
            var w = 0;
            var r;
            while (N < u) {
                var E = K[N];
                if (E === 32 || E === 9 || E === 13 || E === 10) {
                    ++N;
                    continue
                }
                if (E === 37) {
                    do {
                        ++N;
                        E = K[N]
                    } while (E !== 13 && E !== 10);
                    continue
                }
                var B = z(K, N);
                var I;
                if (B === "xref") {
                    N += H(K, N, t);
                    p.push(N);
                    N += H(K, N, y)
                } else {
                    if ((I = /^(\d+)\s+(\d+)\s+obj\b/.exec(B))) {
                        this.entries[I[1]] = {
                            offset: N,
                            gen: I[2] | 0,
                            uncompressed: true
                        };
                        var A = H(K, N, D) + 7;
                        var J = K.subarray(N, N + A);
                        var C = H(J, 0, M);
                        if (C < A && J[C + 5] < 64) {
                            q.push(N);
                            this.xrefstms[N] = 1
                        }
                        N += A
                    } else {
                        N += B.length + 1
                    }
                }
            }
            for (var L = 0, G = q.length; L < G; ++L) {
                this.startXRefQueue.push(q[L]);
                this.readXRef(true)
            }
            var v;
            for (var L = 0, G = p.length; L < G; ++L) {
                x.pos = p[L];
                var s = new Parser(new Lexer(x), true, null);
                var F = s.getObj();
                if (!isCmd(F, "trailer")) {
                    continue
                }
                if (!isDict(v = s.getObj())) {
                    continue
                }
                if (v.has("ID")) {
                    return v
                }
            }
            if (v) {
                return v
            }
            throw new InvalidPDFException("Invalid PDF structure")
        },
        readXRef: function i(w) {
            var s = this.stream;
            try {
                while (this.startXRefQueue.length) {
                    var p = this.startXRefQueue[0];
                    s.pos = p;
                    var v = new Parser(new Lexer(s), true, null);
                    var r = v.getObj();
                    var u;
                    if (isCmd(r, "xref")) {
                        u = this.processXRefTable(v);
                        if (!this.topDict) {
                            this.topDict = u
                        }
                        r = u.get("XRefStm");
                        if (isInt(r)) {
                            var t = r;
                            if (!(t in this.xrefstms)) {
                                this.xrefstms[t] = 1;
                                this.startXRefQueue.push(t)
                            }
                        }
                    } else {
                        if (isInt(r)) {
                            if (!isInt(v.getObj()) || !isCmd(v.getObj(), "obj") || !isStream(r = v.getObj())) {
                                error("Invalid XRef stream")
                            }
                            u = this.processXRefStream(r);
                            if (!this.topDict) {
                                this.topDict = u
                            }
                            if (!u) {
                                error("Failed to read XRef stream")
                            }
                        }
                    }
                    r = u.get("Prev");
                    if (isInt(r)) {
                        this.startXRefQueue.push(r)
                    } else {
                        if (isRef(r)) {
                            this.startXRefQueue.push(r.num)
                        }
                    }
                    this.startXRefQueue.shift()
                }
                return this.topDict
            } catch (q) {
                if (q instanceof MissingDataException) {
                    throw q
                }
                log("(while reading XRef): " + q)
            }
            if (w) {
                return
            }
            throw new XRefParseException()
        },
        getEntry: function h(p) {
            var q = this.entries[p];
            if (q === null) {
                return null
            }
            return q.free || !q.offset ? null : q
        },
        fetchIfRef: function f(p) {
            if (!isRef(p)) {
                return p
            }
            return this.fetch(p)
        },
        fetch: function a(v, x) {
            assertWellFormed(isRef(v), "ref object is not a reference");
            var y = v.num;
            var H;
            if (y in this.cache) {
                H = this.cache[y];
                if (H instanceof Stream) {
                    return H.makeSubStream(H.start, H.length, H.dict)
                }
                return H
            }
            H = this.getEntry(y);
            if (H === null) {
                return (this.cache[y] = H)
            }
            var p = v.gen;
            var t, s;
            if (H.uncompressed) {
                if (H.gen != p) {
                    error("inconsistent generation in XRef")
                }
                t = this.stream.makeSubStream(H.offset);
                s = new Parser(new Lexer(t), true, this);
                var F = s.getObj();
                var E = s.getObj();
                var B = s.getObj();
                if (!isInt(F) || F != y || !isInt(E) || E != p || !isCmd(B)) {
                    error("bad XRef entry")
                }
                if (!isCmd(B, "obj")) {
                    if (B.cmd.indexOf("obj") === 0) {
                        y = parseInt(B.cmd.substring(3), 10);
                        if (!isNaN(y)) {
                            return y
                        }
                    }
                    error("bad XRef entry")
                }
                if (this.encrypt && !x) {
                    try {
                        H = s.getObj(this.encrypt.createCipherTransform(y, p))
                    } catch (G) {
                        return this.fetch(v, true)
                    }
                } else {
                    H = s.getObj()
                }
                if (!isStream(H) || H instanceof JpegStream) {
                    this.cache[y] = H
                } else {
                    if (H instanceof Stream) {
                        H = H.makeSubStream(H.start, H.length, H.dict);
                        this.cache[y] = H
                    } else {
                        if ("readBlock" in H) {
                            H.getBytes();
                            H = H.makeSubStream(0, H.bufferLength, H.dict);
                            this.cache[y] = H
                        }
                    }
                }
                return H
            }
            var r = H.offset;
            t = this.fetch(new Ref(r, 0));
            if (!isStream(t)) {
                error("bad ObjStm stream")
            }
            var w = t.dict.get("First");
            var A = t.dict.get("N");
            if (!isInt(w) || !isInt(A)) {
                error("invalid first and n parameters for ObjStm stream")
            }
            s = new Parser(new Lexer(t), false, this);
            s.allowStreams = true;
            var D, z = [],
                C = [];
            for (D = 0; D < A; ++D) {
                y = s.getObj();
                if (!isInt(y)) {
                    error("invalid object number in the ObjStm stream: " + y)
                }
                C.push(y);
                var u = s.getObj();
                if (!isInt(u)) {
                    error("invalid object offset in the ObjStm stream: " + u)
                }
            }
            for (D = 0; D < A; ++D) {
                z.push(s.getObj());
                y = C[D];
                var q = this.entries[y];
                if (q && q.offset === r && q.gen === D) {
                    this.cache[y] = z[D]
                }
            }
            H = z[H.gen];
            if (!H) {
                error("bad XRef entry for compressed object")
            }
            return H
        },
        fetchIfRefAsync: function m(p) {
            if (!isRef(p)) {
                var q = new Promise();
                q.resolve(p);
                return q
            }
            return this.fetchAsync(p)
        },
        fetchAsync: function b(r, q) {
            var s = new Promise();
            var p = function(u) {
                try {
                    u.resolve(this.fetch(r, q))
                } catch (t) {
                    if (t instanceof MissingDataException) {
                        this.stream.manager.requestRange(t.begin, t.end, p);
                        return
                    }
                    u.reject(t)
                }
            }.bind(this, s);
            p();
            return s
        },
        getCatalogObj: function g() {
            return this.root
        }
    };
    return d
})();
var NameTree = (function NameTreeClosure() {
    function a(c, d) {
        this.root = c;
        this.xref = d
    }
    a.prototype = {
        getAll: function b() {
            var e = {};
            if (!this.root) {
                return e
            }
            var m = this.xref;
            var f = new RefSet();
            f.put(this.root);
            var k = [this.root];
            while (k.length > 0) {
                var j, d;
                var h = m.fetchIfRef(k.shift());
                if (!isDict(h)) {
                    continue
                }
                if (h.has("Kids")) {
                    var c = h.get("Kids");
                    for (j = 0, d = c.length; j < d; j++) {
                        var g = c[j];
                        if (f.has(g)) {
                            error("invalid destinations")
                        }
                        k.push(g);
                        f.put(g)
                    }
                    continue
                }
                var l = h.get("Names");
                if (l) {
                    for (j = 0, d = l.length; j < d; j += 2) {
                        e[l[j]] = m.fetchIfRef(l[j + 1])
                    }
                }
            }
            return e
        }
    };
    return a
})();
var PDFObjects = (function PDFObjectsClosure() {
    function g() {
        this.objs = {}
    }
    g.prototype = {
        ensureObj: function c(i) {
            if (this.objs[i]) {
                return this.objs[i]
            }
            var j = {
                promise: new Promise(i),
                data: null,
                resolved: false
            };
            this.objs[i] = j;
            return j
        },
        get: function f(i, k) {
            if (k) {
                this.ensureObj(i).promise.then(k);
                return null
            }
            var j = this.objs[i];
            if (!j || !j.resolved) {
                error("Requesting object that isn't resolved yet " + i)
            }
            return j.data
        },
        resolve: function a(i, j) {
            var k = this.ensureObj(i);
            k.resolved = true;
            k.data = j;
            k.promise.resolve(j)
        },
        isResolved: function h(i) {
            var j = this.objs;
            if (!j[i]) {
                return false
            } else {
                return j[i].resolved
            }
        },
        hasData: function e(i) {
            return this.isResolved(i)
        },
        getData: function b(i) {
            var j = this.objs;
            if (!j[i] || !j[i].resolved) {
                return null
            } else {
                return j[i].data
            }
        },
        clear: function d() {
            this.objs = {}
        }
    };
    return g
})();
var ObjectLoader = (function() {
    function d(f) {
        return isRef(f) || isDict(f) || isArray(f) || isStream(f)
    }

    function b(j, l) {
        if (isDict(j) || isStream(j)) {
            var m;
            if (isDict(j)) {
                m = j.map
            } else {
                m = j.dict.map
            }
            for (var g in m) {
                var k = m[g];
                if (d(k)) {
                    l.push(k)
                }
            }
        } else {
            if (isArray(j)) {
                for (var f = 0, h = j.length; f < h; f++) {
                    var k = j[f];
                    if (d(k)) {
                        l.push(k)
                    }
                }
            }
        }
    }

    function a(g, f, h) {
        this.obj = g;
        this.keys = f;
        this.xref = h;
        this.refSet = null
    }
    a.prototype = {
        load: function c() {
            var g = this.keys;
            this.promise = new Promise();
            if (!(this.xref.stream instanceof ChunkedStream) || this.xref.stream.getMissingChunks().length === 0) {
                this.promise.resolve();
                return this.promise
            }
            this.refSet = new RefSet();
            var h = [];
            for (var f = 0; f < g.length; f++) {
                h.push(this.obj[g[f]])
            }
            this.walk(h);
            return this.promise
        },
        walk: function e(k) {
            var f = [];
            var h = [];
            while (k.length) {
                var g = k.pop();
                if (isRef(g)) {
                    if (this.refSet.has(g)) {
                        continue
                    }
                    try {
                        var i = g;
                        this.refSet.put(i);
                        g = this.xref.fetch(g)
                    } catch (l) {
                        if (!(l instanceof MissingDataException)) {
                            throw l
                        }
                        f.push(g);
                        h.push({
                            begin: l.begin,
                            end: l.end
                        })
                    }
                }
                if (g instanceof ChunkedStream && g.getMissingChunks().length) {
                    f.push(g);
                    h.push({
                        begin: g.start,
                        end: g.end
                    })
                }
                b(g, k)
            }
            if (h.length) {
                this.xref.stream.manager.requestRanges(h, function j() {
                    k = f;
                    for (var m = 0; m < f.length; m++) {
                        var n = f[m];
                        if (isRef(n)) {
                            this.refSet.remove(n)
                        }
                    }
                    this.walk(k)
                }.bind(this));
                return
            }
            this.refSet = null;
            this.promise.resolve()
        }
    };
    return a
})();
"use strict";
var EOF = {};

function isEOF(a) {
    return a == EOF
}
var Parser = (function ParserClosure() {
    function c(m, l, n) {
        this.lexer = m;
        this.allowStreams = l;
        this.xref = n;
        this.refill()
    }
    c.prototype = {
        saveState: function k() {
            this.state = {
                buf1: this.buf1,
                buf2: this.buf2,
                streamPos: this.lexer.stream.pos
            }
        },
        restoreState: function b() {
            var l = this.state;
            this.buf1 = l.buf1;
            this.buf2 = l.buf2;
            this.lexer.stream.pos = l.streamPos
        },
        refill: function h() {
            this.buf1 = this.lexer.getObj();
            this.buf2 = this.lexer.getObj()
        },
        shift: function i() {
            if (isCmd(this.buf2, "ID")) {
                this.buf1 = this.buf2;
                this.buf2 = null;
                this.lexer.skip()
            } else {
                this.buf1 = this.buf2;
                this.buf2 = this.lexer.getObj()
            }
        },
        getObj: function f(s) {
            if (isCmd(this.buf1, "BI")) {
                this.shift();
                return this.makeInlineImage(s)
            }
            if (isCmd(this.buf1, "[")) {
                this.shift();
                var r = [];
                while (!isCmd(this.buf1, "]") && !isEOF(this.buf1)) {
                    r.push(this.getObj(s))
                }
                if (isEOF(this.buf1)) {
                    error("End of file inside array")
                }
                this.shift();
                return r
            }
            if (isCmd(this.buf1, "<<")) {
                this.shift();
                var q = new Dict(this.xref);
                while (!isCmd(this.buf1, ">>") && !isEOF(this.buf1)) {
                    if (!isName(this.buf1)) {
                        info("Malformed dictionary, key must be a name object");
                        this.shift();
                        continue
                    }
                    var m = this.buf1.name;
                    this.shift();
                    if (isEOF(this.buf1)) {
                        break
                    }
                    q.set(m, this.getObj(s))
                }
                if (isEOF(this.buf1)) {
                    error("End of file inside dictionary")
                }
                if (isCmd(this.buf2, "stream")) {
                    return this.allowStreams ? this.makeStream(q, s) : q
                }
                this.shift();
                return q
            }
            if (isInt(this.buf1)) {
                var l = this.buf1;
                this.shift();
                if (isInt(this.buf1) && isCmd(this.buf2, "R")) {
                    var n = new Ref(l, this.buf1);
                    this.shift();
                    this.shift();
                    return n
                }
                return l
            }
            if (isString(this.buf1)) {
                var p = this.buf1;
                this.shift();
                if (s) {
                    p = s.decryptString(p)
                }
                return p
            }
            var o = this.buf1;
            this.shift();
            return o
        },
        makeInlineImage: function e(q) {
            var p = this.lexer;
            var u = p.stream;
            var o = new Dict();
            while (!isCmd(this.buf1, "ID") && !isEOF(this.buf1)) {
                if (!isName(this.buf1)) {
                    error("Dictionary key must be a name object")
                }
                var t = this.buf1.name;
                this.shift();
                if (isEOF(this.buf1)) {
                    break
                }
                o.set(t, this.getObj(q))
            }
            var r = u.pos;
            var m = 0,
                l;
            while (m != 4 && (l = u.getByte()) !== null && l !== undefined) {
                switch (l) {
                    case 32:
                    case 13:
                    case 10:
                        m = m === 3 ? 4 : 0;
                        break;
                    case 69:
                        m = 2;
                        break;
                    case 73:
                        m = m === 2 ? 3 : 0;
                        break;
                    default:
                        m = 0;
                        break
                }
            }
            var n = (u.pos - 4) - r;
            var s = u.makeSubStream(r, n, o);
            if (q) {
                s = q.createStream(s)
            }
            s = this.filter(s, o, n);
            s.dict = o;
            this.buf2 = Cmd.get("EI");
            this.shift();
            return s
        },
        fetchIfRef: function d(l) {
            return isRef(l) ? this.xref.fetch(l) : l
        },
        makeStream: function j(q, p) {
            var m = this.lexer;
            var n = m.stream;
            m.skipToNextLine();
            var o = n.pos;
            var l = this.fetchIfRef(q.get("Length"));
            if (!isInt(l)) {
                error("Bad " + l + " attribute in stream")
            }
            n.pos = o + l;
            this.shift();
            this.shift();
            if (!isCmd(this.buf1, "endstream")) {
                error("Missing endstream")
            }
            this.shift();
            n = n.makeSubStream(o, l, q);
            if (p) {
                n = p.createStream(n)
            }
            n = this.filter(n, q, l);
            n.dict = q;
            return n
        },
        filter: function g(t, o, n) {
            var l = this.fetchIfRef(o.get("Filter", "F"));
            var p = this.fetchIfRef(o.get("DecodeParms", "DP"));
            if (isName(l)) {
                return this.makeFilter(t, l.name, n, p)
            }
            if (isArray(l)) {
                var r = l;
                var m = p;
                for (var q = 0, s = r.length; q < s; ++q) {
                    l = r[q];
                    if (!isName(l)) {
                        error("Bad filter name: " + l)
                    }
                    p = null;
                    if (isArray(m) && (q in m)) {
                        p = m[q]
                    }
                    t = this.makeFilter(t, l.name, n, p);
                    n = null
                }
            }
            return t
        },
        makeFilter: function a(q, m, n, p) {
            if (q.dict.get("Length") === 0) {
                return new NullStream(q)
            }
            if (m == "FlateDecode" || m == "Fl") {
                if (p) {
                    return new PredictorStream(new FlateStream(q), p)
                }
                return new FlateStream(q)
            }
            if (m == "LZWDecode" || m == "LZW") {
                var o = 1;
                if (p) {
                    if (p.has("EarlyChange")) {
                        o = p.get("EarlyChange")
                    }
                    return new PredictorStream(new LZWStream(q, o), p)
                }
                return new LZWStream(q, o)
            }
            if (m == "DCTDecode" || m == "DCT") {
                var l = q.getBytes(n);
                return new JpegStream(l, q.dict, this.xref)
            }
            if (m == "JPXDecode" || m == "JPX") {
                var l = q.getBytes(n);
                return new JpxStream(l, q.dict)
            }
            if (m == "ASCII85Decode" || m == "A85") {
                return new Ascii85Stream(q)
            }
            if (m == "ASCIIHexDecode" || m == "AHx") {
                return new AsciiHexStream(q)
            }
            if (m == "CCITTFaxDecode" || m == "CCF") {
                return new CCITTFaxStream(q, p)
            }
            if (m == "RunLengthDecode" || m == "RL") {
                return new RunLengthStream(q)
            }
            if (m == "JBIG2Decode") {
                var l = q.getBytes(n);
                return new Jbig2Stream(l, q.dict)
            }
            warn('filter "' + m + '" not supported yet');
            return q
        }
    };
    return c
})();
var Lexer = (function LexerClosure() {
    function a(m, l) {
        this.stream = m;
        this.knownCommands = l
    }
    a.isSpace = function d(l) {
        return l == " " || l == "\t" || l == "\x0d" || l == "\x0a"
    };
    var b = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function i(l) {
        if (l >= "0" && l <= "9") {
            return l.charCodeAt(0) - 48
        }
        l = l.toUpperCase();
        if (l >= "A" && l <= "F") {
            return l.charCodeAt(0) - 55
        }
        return -1
    }
    a.prototype = {
        getNumber: function c(l) {
            var p = false;
            var o = l;
            var n = this.stream;
            while ((l = n.lookChar())) {
                if (l == "." && !p) {
                    o += l;
                    p = true
                } else {
                    if (l == "-") {
                        warn("Badly formated number")
                    } else {
                        if (l >= "0" && l <= "9") {
                            o += l
                        } else {
                            if (l == "e" || l == "E") {
                                p = true
                            } else {
                                break
                            }
                        }
                    }
                }
                n.skip()
            }
            var m = parseFloat(o);
            if (isNaN(m)) {
                error("Invalid floating point number: " + m)
            }
            return m
        },
        getString: function h() {
            var o = 1;
            var m = false;
            var q = "";
            var p = this.stream;
            var n;
            do {
                n = p.getChar();
                switch (n) {
                    case null:
                    case undefined:
                        warn("Unterminated string");
                        m = true;
                        break;
                    case "(":
                        ++o;
                        q += n;
                        break;
                    case ")":
                        if (--o === 0) {
                            m = true
                        } else {
                            q += n
                        }
                        break;
                    case "\\":
                        n = p.getChar();
                        switch (n) {
                            case null:
                            case undefined:
                                warn("Unterminated string");
                                m = true;
                                break;
                            case "n":
                                q += "\n";
                                break;
                            case "r":
                                q += "\r";
                                break;
                            case "t":
                                q += "\t";
                                break;
                            case "b":
                                q += "\b";
                                break;
                            case "f":
                                q += "\f";
                                break;
                            case "\\":
                            case "(":
                            case ")":
                                q += n;
                                break;
                            case "0":
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                                var l = n - "0";
                                n = p.lookChar();
                                if (n >= "0" && n <= "7") {
                                    p.skip();
                                    l = (l << 3) + (n - "0");
                                    n = p.lookChar();
                                    if (n >= "0" && n <= "7") {
                                        p.skip();
                                        l = (l << 3) + (n - "0")
                                    }
                                }
                                q += String.fromCharCode(l);
                                break;
                            case "\r":
                                n = p.lookChar();
                                if (n == "\n") {
                                    p.skip()
                                }
                                break;
                            case "\n":
                                break;
                            default:
                                q += n;
                                break
                        }
                        break;
                    default:
                        q += n;
                        break
                }
            } while (!m);
            return q
        },
        getName: function f(n) {
            var p = "";
            var o = this.stream;
            while (!!(n = o.lookChar()) && !b[n.charCodeAt(0)]) {
                o.skip();
                if (n == "#") {
                    n = o.lookChar();
                    var l = i(n);
                    if (l != -1) {
                        o.skip();
                        var m = i(o.getChar());
                        if (m == -1) {
                            error("Illegal digit in hex char in name: " + m)
                        }
                        p += String.fromCharCode((l << 4) | m)
                    } else {
                        p += "#";
                        p += n
                    }
                } else {
                    p += n
                }
            }
            if (p.length > 128) {
                error("Warning: name token is longer than allowed by the spec: " + p.length)
            }
            return new Name(p)
        },
        getHexString: function j(n) {
            var q = "";
            var p = this.stream;
            var m = true;
            var o;
            var l;
            while (true) {
                n = p.getChar();
                if (!n) {
                    warn("Unterminated hex string");
                    break
                } else {
                    if (n === ">") {
                        break
                    } else {
                        if (b[n.charCodeAt(0)] === 1) {
                            continue
                        } else {
                            if (m) {
                                o = i(n);
                                if (o === -1) {
                                    warn('Ignoring invalid character "' + n + '" in hex string');
                                    continue
                                }
                            } else {
                                l = i(n);
                                if (l === -1) {
                                    warn('Ignoring invalid character "' + n + '" in hex string');
                                    continue
                                }
                                q += String.fromCharCode((o << 4) | l)
                            }
                            m = !m
                        }
                    }
                }
            }
            return q
        },
        getObj: function k() {
            var q = false;
            var p = this.stream;
            var n;
            while (true) {
                if (!(n = p.getChar())) {
                    return EOF
                }
                if (q) {
                    if (n == "\r" || n == "\n") {
                        q = false
                    }
                } else {
                    if (n == "%") {
                        q = true
                    } else {
                        if (b[n.charCodeAt(0)] != 1) {
                            break
                        }
                    }
                }
            }
            switch (n) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "+":
                case "-":
                case ".":
                    return this.getNumber(n);
                case "(":
                    return this.getString();
                case "/":
                    return this.getName(n);
                case "[":
                case "]":
                    return Cmd.get(n);
                case "<":
                    n = p.lookChar();
                    if (n == "<") {
                        p.skip();
                        return Cmd.get("<<")
                    }
                    return this.getHexString(n);
                case ">":
                    n = p.lookChar();
                    if (n == ">") {
                        p.skip();
                        return Cmd.get(">>")
                    }
                    return Cmd.get(n);
                case "{":
                case "}":
                    return Cmd.get(n);
                case ")":
                    error("Illegal character: " + n)
            }
            var o = n;
            var l = this.knownCommands;
            var m = l && (o in l);
            while (!!(n = p.lookChar()) && !b[n.charCodeAt(0)]) {
                if (m && !((o + n) in l)) {
                    break
                }
                p.skip();
                if (o.length == 128) {
                    error("Command token too long: " + o.length)
                }
                o += n;
                m = l && (o in l)
            }
            if (o == "true") {
                return true
            }
            if (o == "false") {
                return false
            }
            if (o == "null") {
                return null
            }
            return Cmd.get(o)
        },
        skipToNextLine: function g() {
            var m = this.stream;
            while (true) {
                var l = m.getChar();
                if (!l || l == "\n") {
                    return
                }
                if (l == "\r") {
                    if ((l = m.lookChar()) == "\n") {
                        m.skip()
                    }
                    return
                }
            }
        },
        skip: function e() {
            this.stream.skip()
        }
    };
    return a
})();
var Linearization = (function LinearizationClosure() {
    function c(h) {
        this.parser = new Parser(new Lexer(h), false, null);
        var g = this.parser.getObj();
        var f = this.parser.getObj();
        var d = this.parser.getObj();
        this.linDict = this.parser.getObj();
        if (isInt(g) && isInt(f) && isCmd(d, "obj") && isDict(this.linDict)) {
            var e = this.linDict.get("Linearized");
            if (!(isNum(e) && e > 0)) {
                this.linDict = null
            }
        }
    }
    c.prototype = {
        getInt: function a(e) {
            var d = this.linDict;
            var f;
            if (isDict(d) && isInt(f = d.get(e)) && f > 0) {
                return f
            }
            error('"' + e + '" field in linearization table is invalid')
        },
        getHint: function b(e) {
            var d = this.linDict;
            var g, f;
            if (isDict(d) && isArray(g = d.get("H")) && g.length >= 2 && isInt(f = g[e]) && f > 0) {
                return f
            }
            error("Hints table in linearization table is invalid: " + e)
        },
        get length() {
            if (!isDict(this.linDict)) {
                return 0
            }
            return this.getInt("L")
        },
        get hintsOffset() {
            return this.getHint(0)
        },
        get hintsLength() {
            return this.getHint(1)
        },
        get hintsOffset2() {
            return this.getHint(2)
        },
        get hintsLenth2() {
            return this.getHint(3)
        },
        get objectNumberFirst() {
            return this.getInt("O")
        },
        get endFirst() {
            return this.getInt("E")
        },
        get numPages() {
            return this.getInt("N")
        },
        get mainXRefEntriesOffset() {
            return this.getInt("T")
        },
        get pageFirst() {
            return this.getInt("P")
        }
    };
    return c
})();
"use strict";
var Stream = (function StreamClosure() {
    function b(j, m, k, l) {
        this.bytes = j instanceof Uint8Array ? j : new Uint8Array(j);
        this.start = m || 0;
        this.pos = this.start;
        this.end = (m + k) || this.bytes.length;
        this.dict = l
    }
    b.prototype = {get length() {
            return this.end - this.start
        },
        getByte: function g() {
            if (this.pos >= this.end) {
                return null
            }
            return this.bytes[this.pos++]
        },
        getBytes: function c(l) {
            var k = this.bytes;
            var n = this.pos;
            var m = this.end;
            if (!l) {
                return k.subarray(n, m)
            }
            var j = n + l;
            if (j > m) {
                j = m
            }
            this.pos = j;
            return k.subarray(n, j)
        },
        lookChar: function e() {
            if (this.pos >= this.end) {
                return null
            }
            return String.fromCharCode(this.bytes[this.pos])
        },
        getChar: function h() {
            if (this.pos >= this.end) {
                return null
            }
            return String.fromCharCode(this.bytes[this.pos++])
        },
        skip: function f(j) {
            if (!j) {
                j = 1
            }
            this.pos += j
        },
        reset: function a() {
            this.pos = this.start
        },
        moveStart: function d() {
            this.start = this.pos
        },
        makeSubStream: function i(l, j, k) {
            return new b(this.bytes.buffer, l, j, k)
        },
        isStream: true
    };
    return b
})();
var StringStream = (function StringStreamClosure() {
    function a(d) {
        var c = d.length;
        var b = new Uint8Array(c);
        for (var e = 0; e < c; ++e) {
            b[e] = d.charCodeAt(e)
        }
        Stream.call(this, b)
    }
    a.prototype = Stream.prototype;
    return a
})();
var DecodeStream = (function DecodeStreamClosure() {
    function e() {
        this.pos = 0;
        this.bufferLength = 0;
        this.eof = false;
        this.buffer = null
    }
    e.prototype = {
        ensureBuffer: function h(o) {
            var k = this.buffer;
            var n = k ? k.byteLength : 0;
            if (o < n) {
                return k
            }
            var m = 512;
            while (m < o) {
                m <<= 1
            }
            var j = new Uint8Array(m);
            for (var l = 0; l < n; ++l) {
                j[l] = k[l]
            }
            return (this.buffer = j)
        },
        getByte: function g() {
            var j = this.pos;
            while (this.bufferLength <= j) {
                if (this.eof) {
                    return null
                }
                this.readBlock()
            }
            return this.buffer[this.pos++]
        },
        getBytes: function a(l) {
            var k, m = this.pos;
            if (l) {
                this.ensureBuffer(m + l);
                k = m + l;
                while (!this.eof && this.bufferLength < k) {
                    this.readBlock()
                }
                var j = this.bufferLength;
                if (k > j) {
                    k = j
                }
            } else {
                while (!this.eof) {
                    this.readBlock()
                }
                k = this.bufferLength;
                if (!k) {
                    this.buffer = new Uint8Array(0)
                }
            }
            this.pos = k;
            return this.buffer.subarray(m, k)
        },
        lookChar: function d() {
            var j = this.pos;
            while (this.bufferLength <= j) {
                if (this.eof) {
                    return null
                }
                this.readBlock()
            }
            return String.fromCharCode(this.buffer[this.pos])
        },
        getChar: function i() {
            var j = this.pos;
            while (this.bufferLength <= j) {
                if (this.eof) {
                    return null
                }
                this.readBlock()
            }
            return String.fromCharCode(this.buffer[this.pos++])
        },
        makeSubStream: function f(m, k, l) {
            var j = m + k;
            while (this.bufferLength <= j && !this.eof) {
                this.readBlock()
            }
            return new Stream(this.buffer, m, k, l)
        },
        skip: function b(j) {
            if (!j) {
                j = 1
            }
            this.pos += j
        },
        reset: function c() {
            this.pos = 0
        }
    };
    return e
})();
var FakeStream = (function FakeStreamClosure() {
    function b(d) {
        this.dict = d.dict;
        DecodeStream.call(this)
    }
    b.prototype = Object.create(DecodeStream.prototype);
    b.prototype.readBlock = function c() {
        var e = this.bufferLength;
        e += 1024;
        var d = this.ensureBuffer(e);
        this.bufferLength = e
    };
    b.prototype.getBytes = function a(f) {
        var e, g = this.pos;
        if (f) {
            this.ensureBuffer(g + f);
            e = g + f;
            while (!this.eof && this.bufferLength < e) {
                this.readBlock()
            }
            var d = this.bufferLength;
            if (e > d) {
                e = d
            }
        } else {
            this.eof = true;
            e = this.bufferLength
        }
        this.pos = e;
        return this.buffer.subarray(g, e)
    };
    return b
})();
var StreamsSequenceStream = (function StreamsSequenceStreamClosure() {
    function a(c) {
        this.streams = c;
        DecodeStream.call(this)
    }
    a.prototype = Object.create(DecodeStream.prototype);
    a.prototype.readBlock = function b() {
        var h = this.streams;
        if (h.length === 0) {
            this.eof = true;
            return
        }
        var g = h.shift();
        var d = g.getBytes();
        var e = this.bufferLength;
        var f = e + d.length;
        var c = this.ensureBuffer(f);
        c.set(d, e);
        this.bufferLength = f
    };
    return a
})();
var FlateStream = (function FlateStreamClosure() {
    var c = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    var f = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]);
    var i = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]);
    var h = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 590000, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9];
    var b = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];

    function j(o) {
        var l = o.getBytes();
        var n = 0;
        this.dict = o.dict;
        var m = l[n++];
        var k = l[n++];
        if (m == -1 || k == -1) {
            error("Invalid header in flate stream: " + m + ", " + k)
        }
        if ((m & 15) != 8) {
            error("Unknown compression method in flate stream: " + m + ", " + k)
        }
        if ((((m << 8) + k) % 31) !== 0) {
            error("Bad FCHECK in flate stream: " + m + ", " + k)
        }
        if (k & 32) {
            error("FDICT bit set in flate stream: " + m + ", " + k)
        }
        this.bytes = l;
        this.bytesPos = n;
        this.codeSize = 0;
        this.codeBuf = 0;
        DecodeStream.call(this)
    }
    j.prototype = Object.create(DecodeStream.prototype);
    j.prototype.getBits = function d(o) {
        var m = this.codeSize;
        var n = this.codeBuf;
        var l = this.bytes;
        var p = this.bytesPos;
        var k;
        while (m < o) {
            if (typeof(k = l[p++]) == "undefined") {
                error("Bad encoding in flate stream")
            }
            n |= k << m;
            m += 8
        }
        k = n & ((1 << o) - 1);
        this.codeBuf = n >> o;
        this.codeSize = m -= o;
        this.bytesPos = p;
        return k
    };
    j.prototype.getCode = function e(r) {
        var k = r[0];
        var m = r[1];
        var o = this.codeSize;
        var s = this.codeBuf;
        var u = this.bytes;
        var p = this.bytesPos;
        while (o < m) {
            var q;
            if (typeof(q = u[p++]) == "undefined") {
                error("Bad encoding in flate stream")
            }
            s |= (q << o);
            o += 8
        }
        var l = k[s & ((1 << m) - 1)];
        var n = l >> 16;
        var t = l & 65535;
        if (o === 0 || o < n || n === 0) {
            error("Bad encoding in flate stream")
        }
        this.codeBuf = (s >> n);
        this.codeSize = (o - n);
        this.bytesPos = p;
        return t
    };
    j.prototype.generateHuffmanTable = function a(p) {
        var o = p.length;
        var q = 0;
        for (var r = 0; r < o; ++r) {
            if (p[r] > q) {
                q = p[r]
            }
        }
        var x = 1 << q;
        var k = new Uint32Array(x);
        for (var s = 1, l = 0, v = 2; s <= q; ++s, l <<= 1, v <<= 1) {
            for (var m = 0; m < o; ++m) {
                if (p[m] == s) {
                    var u = 0;
                    var w = l;
                    for (var r = 0; r < s; ++r) {
                        u = (u << 1) | (w & 1);
                        w >>= 1
                    }
                    for (var r = u; r < x; r += v) {
                        k[r] = (s << 16) | m
                    }++l
                }
            }
        }
        return [k, q]
    };
    j.prototype.readBlock = function g() {
        var o = this.getBits(3);
        if (o & 1) {
            this.eof = true
        }
        o >>= 1;
        if (o === 0) {
            var A = this.bytes;
            var x = this.bytesPos;
            var P;
            if (typeof(P = A[x++]) == "undefined") {
                error("Bad block header in flate stream")
            }
            var D = P;
            if (typeof(P = A[x++]) == "undefined") {
                error("Bad block header in flate stream")
            }
            D |= (P << 8);
            if (typeof(P = A[x++]) == "undefined") {
                error("Bad block header in flate stream")
            }
            var O = P;
            if (typeof(P = A[x++]) == "undefined") {
                error("Bad block header in flate stream")
            }
            O |= (P << 8);
            if (O != (~D & 65535)) {
                error("Bad uncompressed block length in flate stream")
            }
            this.codeBuf = 0;
            this.codeSize = 0;
            var t = this.bufferLength;
            var G = this.ensureBuffer(t + D);
            var p = t + D;
            this.bufferLength = p;
            for (var C = t; C < p; ++C) {
                if (typeof(P = A[x++]) == "undefined") {
                    this.eof = true;
                    break
                }
                G[C] = P
            }
            this.bytesPos = x;
            return
        }
        var v;
        var w;
        if (o == 1) {
            v = h;
            w = b
        } else {
            if (o == 2) {
                var Q = this.getBits(5) + 257;
                var y = this.getBits(5) + 1;
                var l = this.getBits(4) + 4;
                var q = new Uint8Array(c.length);
                for (var H = 0; H < l; ++H) {
                    q[c[H]] = this.getBits(3)
                }
                var z = this.generateHuffmanTable(q);
                var I = 0;
                var H = 0;
                var N = Q + y;
                var L = new Uint8Array(N);
                while (H < N) {
                    var m = this.getCode(z);
                    if (m == 16) {
                        var F = 2,
                            K = 3,
                            J = I
                    } else {
                        if (m == 17) {
                            var F = 3,
                                K = 3,
                                J = (I = 0)
                        } else {
                            if (m == 18) {
                                var F = 7,
                                    K = 11,
                                    J = (I = 0)
                            } else {
                                L[H++] = I = m;
                                continue
                            }
                        }
                    }
                    var R = this.getBits(F) + K;
                    while (R-- > 0) {
                        L[H++] = J
                    }
                }
                v = this.generateHuffmanTable(L.subarray(0, Q));
                w = this.generateHuffmanTable(L.subarray(Q, N))
            } else {
                error("Unknown block type in flate stream")
            }
        }
        var G = this.buffer;
        var M = G ? G.length : 0;
        var u = this.bufferLength;
        while (true) {
            var s = this.getCode(v);
            if (s < 256) {
                if (u + 1 >= M) {
                    G = this.ensureBuffer(u + 1);
                    M = G.length
                }
                G[u++] = s;
                continue
            }
            if (s == 256) {
                this.bufferLength = u;
                return
            }
            s -= 257;
            s = f[s];
            var r = s >> 16;
            if (r > 0) {
                r = this.getBits(r)
            }
            var I = (s & 65535) + r;
            s = this.getCode(w);
            s = i[s];
            r = s >> 16;
            if (r > 0) {
                r = this.getBits(r)
            }
            var B = (s & 65535) + r;
            if (u + I >= M) {
                G = this.ensureBuffer(u + I);
                M = G.length
            }
            for (var E = 0; E < I; ++E, ++u) {
                G[u] = G[u - B]
            }
        }
    };
    return j
})();
var PredictorStream = (function PredictorStreamClosure() {
    function a(i, h) {
        var d = this.predictor = h.get("Predictor") || 1;
        if (d <= 1) {
            return i
        }
        if (d !== 2 && (d < 10 || d > 15)) {
            error("Unsupported predictor: " + d)
        }
        if (d === 2) {
            this.readBlock = this.readBlockTiff
        } else {
            this.readBlock = this.readBlockPng
        }
        this.stream = i;
        this.dict = i.dict;
        var e = this.colors = h.get("Colors") || 1;
        var g = this.bits = h.get("BitsPerComponent") || 8;
        var f = this.columns = h.get("Columns") || 1;
        this.pixBytes = (e * g + 7) >> 3;
        this.rowBytes = (f * e * g + 7) >> 3;
        DecodeStream.call(this);
        return this
    }
    a.prototype = Object.create(DecodeStream.prototype);
    a.prototype.readBlockTiff = function b() {
        var u = this.rowBytes;
        var h = this.bufferLength;
        var s = this.ensureBuffer(h + u);
        var r = this.bits;
        var n = this.colors;
        var q = this.stream.getBytes(u);
        this.eof = !q.length;
        if (this.eof) {
            return
        }
        var d = 0,
            y = 0;
        var o = 0,
            p = 0;
        var l = h;
        if (r === 1) {
            for (var w = 0; w < u; ++w) {
                var x = q[w];
                d = (d << 8) | x;
                s[l++] = (x ^ (d >> n)) & 255;
                d &= 65535
            }
        } else {
            if (r === 8) {
                for (var w = 0; w < n; ++w) {
                    s[l++] = q[w]
                }
                for (; w < u; ++w) {
                    s[l] = s[l - n] + q[w];
                    l++
                }
            } else {
                var m = new Uint8Array(n + 1);
                var f = (1 << r) - 1;
                var v = 0,
                    t = h;
                var e = this.columns;
                for (var w = 0; w < e; ++w) {
                    for (var g = 0; g < n; ++g) {
                        if (o < r) {
                            d = (d << 8) | (q[v++] & 255);
                            o += 8
                        }
                        m[g] = (m[g] + (d >> (o - r))) & f;
                        o -= r;
                        y = (y << r) | m[g];
                        p += r;
                        if (p >= 8) {
                            s[t++] = (y >> (p - 8)) & 255;
                            p -= 8
                        }
                    }
                }
                if (p > 0) {
                    s[t++] = (y << (8 - p)) + (d & ((1 << (8 - p)) - 1))
                }
            }
        }
        this.bufferLength += u
    };
    a.prototype.readBlockPng = function c() {
        var g = this.rowBytes;
        var l = this.pixBytes;
        var h = this.stream.getByte();
        var r = this.stream.getBytes(g);
        this.eof = !r.length;
        if (this.eof) {
            return
        }
        var d = this.bufferLength;
        var n = this.ensureBuffer(d + g);
        var f = n.subarray(d - g, d);
        if (f.length === 0) {
            f = new Uint8Array(g)
        }
        var m = d;
        switch (h) {
            case 0:
                for (var q = 0; q < g; ++q) {
                    n[m++] = r[q]
                }
                break;
            case 1:
                for (var q = 0; q < l; ++q) {
                    n[m++] = r[q]
                }
                for (; q < g; ++q) {
                    n[m] = (n[m - l] + r[q]) & 255;
                    m++
                }
                break;
            case 2:
                for (var q = 0; q < g; ++q) {
                    n[m++] = (f[q] + r[q]) & 255
                }
                break;
            case 3:
                for (var q = 0; q < l; ++q) {
                    n[m++] = (f[q] >> 1) + r[q]
                }
                for (; q < g; ++q) {
                    n[m] = (((f[q] + n[m - l]) >> 1) + r[q]) & 255;
                    m++
                }
                break;
            case 4:
                for (var q = 0; q < l; ++q) {
                    var o = f[q];
                    var s = r[q];
                    n[m++] = o + s
                }
                for (; q < g; ++q) {
                    var o = f[q];
                    var u = f[q - l];
                    var k = n[m - l];
                    var e = k + o - u;
                    var w = e - k;
                    if (w < 0) {
                        w = -w
                    }
                    var v = e - o;
                    if (v < 0) {
                        v = -v
                    }
                    var t = e - u;
                    if (t < 0) {
                        t = -t
                    }
                    var s = r[q];
                    if (w <= v && w <= t) {
                        n[m++] = k + s
                    } else {
                        if (v <= t) {
                            n[m++] = o + s
                        } else {
                            n[m++] = u + s
                        }
                    }
                }
                break;
            default:
                error("Unsupported predictor: " + h)
        }
        this.bufferLength += g
    };
    return a
})();
var JpegStream = (function JpegStreamClosure() {
    function d(j) {
        var l = Math.max(j.length - 16, 1024);
        for (var k = 0; k < l; ++k) {
            if (j[k] == 255 && j[k + 1] == 238 && j[k + 2] === 0 && j[k + 3] == 14 && j[k + 4] == 65 && j[k + 5] == 100 && j[k + 6] == 111 && j[k + 7] == 98 && j[k + 8] == 101 && j[k + 9] === 0) {
                return true
            }
            if (j[k] == 255 && j[k + 1] == 192) {
                break
            }
        }
        return false
    }

    function c(i) {
        var k = new Uint8Array([255, 236, 0, 8, 69, 77, 66, 69, 68, 0]);
        var j = new Uint8Array(i.length + k.length);
        j.set(i, k.length);
        j[0] = i[0];
        j[1] = i[1];
        j.set(k, 2);
        return j
    }

    function b(i, k, j) {
        this.dict = k;
        this.isAdobeImage = false;
        this.colorTransform = k.get("ColorTransform") || -1;
        if (d(i)) {
            this.isAdobeImage = true;
            i = c(i)
        }
        this.bytes = i;
        DecodeStream.call(this)
    }
    b.prototype = Object.create(DecodeStream.prototype);
    b.prototype.ensureBuffer = function h(l) {
        if (this.bufferLength) {
            return
        }
        try {
            var k = new JpegImage();
            if (this.colorTransform != -1) {
                k.colorTransform = this.colorTransform
            }
            k.parse(this.bytes);
            var j = k.width;
            var i = k.height;
            var m = k.getData(j, i);
            this.buffer = m;
            this.bufferLength = m.length;
            this.eof = true
        } catch (n) {
            error("JPEG error: " + n)
        }
    };
    b.prototype.getIR = function g() {
        return bytesToString(this.bytes)
    };
    b.prototype.getChar = function f() {
        error("internal error: getChar is not valid on JpegStream")
    };
    b.prototype.isNativelySupported = function e(k, i) {
        var j = ColorSpace.parse(this.dict.get("ColorSpace", "CS"), k, i);
        if (j.name === "DeviceGray" || j.name === "DeviceRGB") {
            return true
        }
        if (j.name === "DeviceCMYK" && !this.isAdobeImage && this.colorTransform < 1) {
            return true
        }
        return false
    };
    b.prototype.isNativelyDecodable = function a(l, j) {
        var k = ColorSpace.parse(this.dict.get("ColorSpace", "CS"), l, j);
        var i = k.numComps;
        if (i == 1 || i == 3) {
            return true
        }
        return false
    };
    return b
})();
var JpxStream = (function JpxStreamClosure() {
    function a(d, e) {
        this.dict = e;
        this.bytes = d;
        DecodeStream.call(this)
    }
    a.prototype = Object.create(DecodeStream.prototype);
    a.prototype.ensureBuffer = function c(e) {
        if (this.bufferLength) {
            return
        }
        var o = new JpxImage();
        o.parse(this.bytes);
        var u = o.width;
        var s = o.height;
        var q = o.componentsCount;
        if (q != 1 && q != 3 && q != 4) {
            error("JPX with " + q + " components is not supported")
        }
        var B = new Uint8Array(u * s * q);
        for (var v = 0, g = o.tiles.length; v < g; v++) {
            var t = o.tiles[v];
            var d = t[0].width;
            var p = t[0].height;
            var f = t[0].left;
            var A = t[0].top;
            var r, z, n, m, l, h, x;
            switch (q) {
                case 1:
                    n = t[0].items;
                    r = u * A + f;
                    x = u - d;
                    z = 0;
                    for (var w = 0; w < p; w++) {
                        for (var y = 0; y < d; y++) {
                            B[r++] = n[z++]
                        }
                        r += x
                    }
                    break;
                case 3:
                    n = t[0].items;
                    m = t[1].items;
                    l = t[2].items;
                    r = (u * A + f) * 3;
                    x = (u - d) * 3;
                    z = 0;
                    for (var w = 0; w < p; w++) {
                        for (var y = 0; y < d; y++) {
                            B[r++] = n[z];
                            B[r++] = m[z];
                            B[r++] = l[z];
                            z++
                        }
                        r += x
                    }
                    break;
                case 4:
                    n = t[0].items;
                    m = t[1].items;
                    l = t[2].items;
                    h = t[3].items;
                    r = (u * A + f) * 4;
                    x = (u - d) * 4;
                    z = 0;
                    for (var w = 0; w < p; w++) {
                        for (var y = 0; y < d; y++) {
                            B[r++] = n[z];
                            B[r++] = m[z];
                            B[r++] = l[z];
                            B[r++] = h[z];
                            z++
                        }
                        r += x
                    }
                    break
            }
        }
        this.buffer = B;
        this.bufferLength = B.length;
        this.eof = true
    };
    a.prototype.getChar = function b() {
        error("internal error: getChar is not valid on JpxStream")
    };
    return a
})();
var Jbig2Stream = (function Jbig2StreamClosure() {
    function a(d, e) {
        this.dict = e;
        this.bytes = d;
        DecodeStream.call(this)
    }
    a.prototype = Object.create(DecodeStream.prototype);
    a.prototype.ensureBuffer = function b(m) {
        if (this.bufferLength) {
            return
        }
        var f = new Jbig2Image();
        var k = [],
            e = this.dict.get("DecodeParms");
        if (e && e.has("JBIG2Globals")) {
            var l = e.get("JBIG2Globals");
            var j = l.getBytes();
            k.push({
                data: j,
                start: 0,
                end: j.length
            })
        }
        k.push({
            data: this.bytes,
            start: 0,
            end: this.bytes.length
        });
        var h = f.parseChunks(k);
        var d = h.length;
        for (var g = 0; g < d; g++) {
            h[g] ^= 255
        }
        this.buffer = h;
        this.bufferLength = d;
        this.eof = true
    };
    a.prototype.getChar = function c() {
        error("internal error: getChar is not valid on Jbig2Stream")
    };
    return a
})();
var DecryptStream = (function DecryptStreamClosure() {
    function c(e, d) {
        this.str = e;
        this.dict = e.dict;
        this.decrypt = d;
        DecodeStream.call(this)
    }
    var b = 512;
    c.prototype = Object.create(DecodeStream.prototype);
    c.prototype.readBlock = function a() {
        var f = this.str.getBytes(b);
        if (!f || f.length === 0) {
            this.eof = true;
            return
        }
        var e = this.decrypt;
        f = e(f);
        var h = this.bufferLength;
        var g, j = f.length;
        var d = this.ensureBuffer(h + j);
        for (g = 0; g < j; g++) {
            d[h++] = f[g]
        }
        this.bufferLength = h
    };
    return c
})();
var Ascii85Stream = (function Ascii85StreamClosure() {
    function a(c) {
        this.str = c;
        this.dict = c.dict;
        this.input = new Uint8Array(5);
        DecodeStream.call(this)
    }
    a.prototype = Object.create(DecodeStream.prototype);
    a.prototype.readBlock = function b() {
        var g = "~".charCodeAt(0);
        var l = "z".charCodeAt(0);
        var j = this.str;
        var h = j.getByte();
        while (Lexer.isSpace(String.fromCharCode(h))) {
            h = j.getByte()
        }
        if (!h || h === g) {
            this.eof = true;
            return
        }
        var d = this.bufferLength,
            e;
        if (h == l) {
            e = this.ensureBuffer(d + 4);
            for (var f = 0; f < 4; ++f) {
                e[d + f] = 0
            }
            this.bufferLength += 4
        } else {
            var k = this.input;
            k[0] = h;
            for (var f = 1; f < 5; ++f) {
                h = j.getByte();
                while (Lexer.isSpace(String.fromCharCode(h))) {
                    h = j.getByte()
                }
                k[f] = h;
                if (!h || h == g) {
                    break
                }
            }
            e = this.ensureBuffer(d + f - 1);
            this.bufferLength += f - 1;
            if (f < 5) {
                for (; f < 5; ++f) {
                    k[f] = 33 + 84
                }
                this.eof = true
            }
            var m = 0;
            for (var f = 0; f < 5; ++f) {
                m = m * 85 + (k[f] - 33)
            }
            for (var f = 3; f >= 0; --f) {
                e[d + f] = m & 255;
                m >>= 8
            }
        }
    };
    return a
})();
var AsciiHexStream = (function AsciiHexStreamClosure() {
    function b(d) {
        this.str = d;
        this.dict = d.dict;
        DecodeStream.call(this)
    }
    var a = {
        9: -1,
        32: -1,
        48: 0,
        49: 1,
        50: 2,
        51: 3,
        52: 4,
        53: 5,
        54: 6,
        55: 7,
        56: 8,
        57: 9,
        65: 10,
        66: 11,
        67: 12,
        68: 13,
        69: 14,
        70: 15,
        97: 10,
        98: 11,
        99: 12,
        100: 13,
        101: 14,
        102: 15
    };
    b.prototype = Object.create(DecodeStream.prototype);
    b.prototype.readBlock = function c() {
        var l = ">".charCodeAt(0),
            m = this.str.getBytes(),
            j, f, k, g, d, h, e;
        k = (m.length + 1) >> 1;
        g = this.ensureBuffer(this.bufferLength + k);
        d = this.bufferLength;
        for (h = 0, e = m.length; h < e; h++) {
            j = a[m[h]];
            while (j == -1 && (h + 1) < e) {
                j = a[m[++h]]
            }
            if ((h + 1) < e && (m[h + 1] !== l)) {
                f = a[m[++h]];
                g[d++] = j * 16 + f
            } else {
                if (m[h] !== l) {
                    g[d++] = j * 16
                }
            }
        }
        this.bufferLength = d;
        this.eof = true
    };
    return b
})();
var RunLengthStream = (function RunLengthStreamClosure() {
    function b(c) {
        this.str = c;
        this.dict = c.dict;
        DecodeStream.call(this)
    }
    b.prototype = Object.create(DecodeStream.prototype);
    b.prototype.readBlock = function a() {
        var g = this.str.getBytes(2);
        if (!g || g.length < 2 || g[0] == 128) {
            this.eof = true;
            return
        }
        var f = this.bufferLength;
        var j = g[0];
        if (j < 128) {
            var d = this.ensureBuffer(f + j + 1);
            d[f++] = g[1];
            if (j > 0) {
                var h = this.str.getBytes(j);
                d.set(h, f);
                f += j
            }
        } else {
            j = 257 - j;
            var c = g[1];
            var d = this.ensureBuffer(f + j + 1);
            for (var e = 0; e < j; e++) {
                d[f++] = c
            }
        }
        this.bufferLength = f
    };
    return b
})();
var CCITTFaxStream = (function CCITTFaxStreamClosure() {
    var b = -2;
    var t = 0;
    var A = 1;
    var o = 2;
    var k = 3;
    var h = 4;
    var j = 5;
    var f = 6;
    var i = 7;
    var e = 8;
    var x = [
        [-1, -1],
        [-1, -1],
        [7, e],
        [7, i],
        [6, f],
        [6, f],
        [6, j],
        [6, j],
        [4, t],
        [4, t],
        [4, t],
        [4, t],
        [4, t],
        [4, t],
        [4, t],
        [4, t],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, A],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, h],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [3, k],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o],
        [1, o]
    ];
    var w = [
        [-1, -1],
        [12, b],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [11, 1792],
        [11, 1792],
        [12, 1984],
        [12, 2048],
        [12, 2112],
        [12, 2176],
        [12, 2240],
        [12, 2304],
        [11, 1856],
        [11, 1856],
        [11, 1920],
        [11, 1920],
        [12, 2368],
        [12, 2432],
        [12, 2496],
        [12, 2560]
    ];
    var v = [
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [8, 29],
        [8, 29],
        [8, 30],
        [8, 30],
        [8, 45],
        [8, 45],
        [8, 46],
        [8, 46],
        [7, 22],
        [7, 22],
        [7, 22],
        [7, 22],
        [7, 23],
        [7, 23],
        [7, 23],
        [7, 23],
        [8, 47],
        [8, 47],
        [8, 48],
        [8, 48],
        [6, 13],
        [6, 13],
        [6, 13],
        [6, 13],
        [6, 13],
        [6, 13],
        [6, 13],
        [6, 13],
        [7, 20],
        [7, 20],
        [7, 20],
        [7, 20],
        [8, 33],
        [8, 33],
        [8, 34],
        [8, 34],
        [8, 35],
        [8, 35],
        [8, 36],
        [8, 36],
        [8, 37],
        [8, 37],
        [8, 38],
        [8, 38],
        [7, 19],
        [7, 19],
        [7, 19],
        [7, 19],
        [8, 31],
        [8, 31],
        [8, 32],
        [8, 32],
        [6, 1],
        [6, 1],
        [6, 1],
        [6, 1],
        [6, 1],
        [6, 1],
        [6, 1],
        [6, 1],
        [6, 12],
        [6, 12],
        [6, 12],
        [6, 12],
        [6, 12],
        [6, 12],
        [6, 12],
        [6, 12],
        [8, 53],
        [8, 53],
        [8, 54],
        [8, 54],
        [7, 26],
        [7, 26],
        [7, 26],
        [7, 26],
        [8, 39],
        [8, 39],
        [8, 40],
        [8, 40],
        [8, 41],
        [8, 41],
        [8, 42],
        [8, 42],
        [8, 43],
        [8, 43],
        [8, 44],
        [8, 44],
        [7, 21],
        [7, 21],
        [7, 21],
        [7, 21],
        [7, 28],
        [7, 28],
        [7, 28],
        [7, 28],
        [8, 61],
        [8, 61],
        [8, 62],
        [8, 62],
        [8, 63],
        [8, 63],
        [8, 0],
        [8, 0],
        [8, 320],
        [8, 320],
        [8, 384],
        [8, 384],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 10],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [5, 11],
        [7, 27],
        [7, 27],
        [7, 27],
        [7, 27],
        [8, 59],
        [8, 59],
        [8, 60],
        [8, 60],
        [9, 1472],
        [9, 1536],
        [9, 1600],
        [9, 1728],
        [7, 18],
        [7, 18],
        [7, 18],
        [7, 18],
        [7, 24],
        [7, 24],
        [7, 24],
        [7, 24],
        [8, 49],
        [8, 49],
        [8, 50],
        [8, 50],
        [8, 51],
        [8, 51],
        [8, 52],
        [8, 52],
        [7, 25],
        [7, 25],
        [7, 25],
        [7, 25],
        [8, 55],
        [8, 55],
        [8, 56],
        [8, 56],
        [8, 57],
        [8, 57],
        [8, 58],
        [8, 58],
        [6, 192],
        [6, 192],
        [6, 192],
        [6, 192],
        [6, 192],
        [6, 192],
        [6, 192],
        [6, 192],
        [6, 1664],
        [6, 1664],
        [6, 1664],
        [6, 1664],
        [6, 1664],
        [6, 1664],
        [6, 1664],
        [6, 1664],
        [8, 448],
        [8, 448],
        [8, 512],
        [8, 512],
        [9, 704],
        [9, 768],
        [8, 640],
        [8, 640],
        [8, 576],
        [8, 576],
        [9, 832],
        [9, 896],
        [9, 960],
        [9, 1024],
        [9, 1088],
        [9, 1152],
        [9, 1216],
        [9, 1280],
        [9, 1344],
        [9, 1408],
        [7, 256],
        [7, 256],
        [7, 256],
        [7, 256],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 2],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [4, 3],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 128],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 8],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [5, 9],
        [6, 16],
        [6, 16],
        [6, 16],
        [6, 16],
        [6, 16],
        [6, 16],
        [6, 16],
        [6, 16],
        [6, 17],
        [6, 17],
        [6, 17],
        [6, 17],
        [6, 17],
        [6, 17],
        [6, 17],
        [6, 17],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [6, 14],
        [6, 14],
        [6, 14],
        [6, 14],
        [6, 14],
        [6, 14],
        [6, 14],
        [6, 14],
        [6, 15],
        [6, 15],
        [6, 15],
        [6, 15],
        [6, 15],
        [6, 15],
        [6, 15],
        [6, 15],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [5, 64],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7],
        [4, 7]
    ];
    var p = [
        [-1, -1],
        [-1, -1],
        [12, b],
        [12, b],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [11, 1792],
        [11, 1792],
        [11, 1792],
        [11, 1792],
        [12, 1984],
        [12, 1984],
        [12, 2048],
        [12, 2048],
        [12, 2112],
        [12, 2112],
        [12, 2176],
        [12, 2176],
        [12, 2240],
        [12, 2240],
        [12, 2304],
        [12, 2304],
        [11, 1856],
        [11, 1856],
        [11, 1856],
        [11, 1856],
        [11, 1920],
        [11, 1920],
        [11, 1920],
        [11, 1920],
        [12, 2368],
        [12, 2368],
        [12, 2432],
        [12, 2432],
        [12, 2496],
        [12, 2496],
        [12, 2560],
        [12, 2560],
        [10, 18],
        [10, 18],
        [10, 18],
        [10, 18],
        [10, 18],
        [10, 18],
        [10, 18],
        [10, 18],
        [12, 52],
        [12, 52],
        [13, 640],
        [13, 704],
        [13, 768],
        [13, 832],
        [12, 55],
        [12, 55],
        [12, 56],
        [12, 56],
        [13, 1280],
        [13, 1344],
        [13, 1408],
        [13, 1472],
        [12, 59],
        [12, 59],
        [12, 60],
        [12, 60],
        [13, 1536],
        [13, 1600],
        [11, 24],
        [11, 24],
        [11, 24],
        [11, 24],
        [11, 25],
        [11, 25],
        [11, 25],
        [11, 25],
        [13, 1664],
        [13, 1728],
        [12, 320],
        [12, 320],
        [12, 384],
        [12, 384],
        [12, 448],
        [12, 448],
        [13, 512],
        [13, 576],
        [12, 53],
        [12, 53],
        [12, 54],
        [12, 54],
        [13, 896],
        [13, 960],
        [13, 1024],
        [13, 1088],
        [13, 1152],
        [13, 1216],
        [10, 64],
        [10, 64],
        [10, 64],
        [10, 64],
        [10, 64],
        [10, 64],
        [10, 64],
        [10, 64]
    ];
    var n = [
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [8, 13],
        [11, 23],
        [11, 23],
        [12, 50],
        [12, 51],
        [12, 44],
        [12, 45],
        [12, 46],
        [12, 47],
        [12, 57],
        [12, 58],
        [12, 61],
        [12, 256],
        [10, 16],
        [10, 16],
        [10, 16],
        [10, 16],
        [10, 17],
        [10, 17],
        [10, 17],
        [10, 17],
        [12, 48],
        [12, 49],
        [12, 62],
        [12, 63],
        [12, 30],
        [12, 31],
        [12, 32],
        [12, 33],
        [12, 40],
        [12, 41],
        [11, 22],
        [11, 22],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [8, 14],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 10],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [7, 11],
        [9, 15],
        [9, 15],
        [9, 15],
        [9, 15],
        [9, 15],
        [9, 15],
        [9, 15],
        [9, 15],
        [12, 128],
        [12, 192],
        [12, 26],
        [12, 27],
        [12, 28],
        [12, 29],
        [11, 19],
        [11, 19],
        [11, 20],
        [11, 20],
        [12, 34],
        [12, 35],
        [12, 36],
        [12, 37],
        [12, 38],
        [12, 39],
        [11, 21],
        [11, 21],
        [12, 42],
        [12, 43],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12],
        [7, 12]
    ];
    var m = [
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [6, 9],
        [6, 8],
        [5, 7],
        [5, 7],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 5],
        [4, 5],
        [4, 5],
        [4, 5],
        [3, 1],
        [3, 1],
        [3, 1],
        [3, 1],
        [3, 1],
        [3, 1],
        [3, 1],
        [3, 1],
        [3, 4],
        [3, 4],
        [3, 4],
        [3, 4],
        [3, 4],
        [3, 4],
        [3, 4],
        [3, 4],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 3],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2]
    ];

    function y(D, C) {
        this.str = D;
        this.dict = D.dict;
        C = C || new Dict();
        this.encoding = C.get("K") || 0;
        this.eoline = C.get("EndOfLine") || false;
        this.byteAlign = C.get("EncodedByteAlign") || false;
        this.columns = C.get("Columns") || 1728;
        this.rows = C.get("Rows") || 0;
        var E = C.get("EndOfBlock");
        if (E === null || E === undefined) {
            E = true
        }
        this.eoblock = E;
        this.black = C.get("BlackIs1") || false;
        this.codingLine = new Uint32Array(this.columns + 1);
        this.refLine = new Uint32Array(this.columns + 2);
        this.codingLine[0] = this.columns;
        this.codingPos = 0;
        this.row = 0;
        this.nextLine2D = this.encoding < 0;
        this.inputBits = 0;
        this.inputBuf = 0;
        this.outputBits = 0;
        this.buf = EOF;
        var B;
        while ((B = this.lookBits(12)) === 0) {
            this.eatBits(1)
        }
        if (B == 1) {
            this.eatBits(12)
        }
        if (this.encoding > 0) {
            this.nextLine2D = !this.lookBits(1);
            this.eatBits(1)
        }
        DecodeStream.call(this)
    }
    y.prototype = Object.create(DecodeStream.prototype);
    y.prototype.readBlock = function d() {
        while (!this.eof) {
            var B = this.lookChar();
            this.buf = EOF;
            this.ensureBuffer(this.bufferLength + 1);
            this.buffer[this.bufferLength++] = B
        }
    };
    y.prototype.addPixels = function l(B, D) {
        var C = this.codingLine;
        var E = this.codingPos;
        if (B > C[E]) {
            if (B > this.columns) {
                info("row is wrong length");
                this.err = true;
                B = this.columns
            }
            if ((E & 1) ^ D) {
                ++E
            }
            C[E] = B
        }
        this.codingPos = E
    };
    y.prototype.addPixelsNeg = function s(B, D) {
        var C = this.codingLine;
        var E = this.codingPos;
        if (B > C[E]) {
            if (B > this.columns) {
                info("row is wrong length");
                this.err = true;
                B = this.columns
            }
            if ((E & 1) ^ D) {
                ++E
            }
            C[E] = B
        } else {
            if (B < C[E]) {
                if (B < 0) {
                    info("invalid code");
                    this.err = true;
                    B = 0
                }
                while (E > 0 && B < C[E - 1]) {
                    --E
                }
                C[E] = B
            }
        }
        this.codingPos = E
    };
    y.prototype.lookChar = function u() {
        if (this.buf != EOF) {
            return this.buf
        }
        var B = this.refLine;
        var H = this.codingLine;
        var C = this.columns;
        var D, F, K;
        if (this.outputBits === 0) {
            if (this.eof) {
                return null
            }
            this.err = false;
            var L, I, G;
            if (this.nextLine2D) {
                for (var E = 0; H[E] < C; ++E) {
                    B[E] = H[E]
                }
                B[E++] = C;
                B[E] = C;
                H[0] = 0;
                this.codingPos = 0;
                D = 0;
                F = 0;
                while (H[this.codingPos] < C) {
                    L = this.getTwoDimCode();
                    switch (L) {
                        case t:
                            this.addPixels(B[D + 1], F);
                            if (B[D + 1] < C) {
                                D += 2
                            }
                            break;
                        case A:
                            L = I = 0;
                            if (F) {
                                do {
                                    L += (G = this.getBlackCode())
                                } while (G >= 64);
                                do {
                                    I += (G = this.getWhiteCode())
                                } while (G >= 64)
                            } else {
                                do {
                                    L += (G = this.getWhiteCode())
                                } while (G >= 64);
                                do {
                                    I += (G = this.getBlackCode())
                                } while (G >= 64)
                            }
                            this.addPixels(H[this.codingPos] + L, F);
                            if (H[this.codingPos] < C) {
                                this.addPixels(H[this.codingPos] + I, F ^ 1)
                            }
                            while (B[D] <= H[this.codingPos] && B[D] < C) {
                                D += 2
                            }
                            break;
                        case i:
                            this.addPixels(B[D] + 3, F);
                            F ^= 1;
                            if (H[this.codingPos] < C) {
                                ++D;
                                while (B[D] <= H[this.codingPos] && B[D] < C) {
                                    D += 2
                                }
                            }
                            break;
                        case j:
                            this.addPixels(B[D] + 2, F);
                            F ^= 1;
                            if (H[this.codingPos] < C) {
                                ++D;
                                while (B[D] <= H[this.codingPos] && B[D] < C) {
                                    D += 2
                                }
                            }
                            break;
                        case k:
                            this.addPixels(B[D] + 1, F);
                            F ^= 1;
                            if (H[this.codingPos] < C) {
                                ++D;
                                while (B[D] <= H[this.codingPos] && B[D] < C) {
                                    D += 2
                                }
                            }
                            break;
                        case o:
                            this.addPixels(B[D], F);
                            F ^= 1;
                            if (H[this.codingPos] < C) {
                                ++D;
                                while (B[D] <= H[this.codingPos] && B[D] < C) {
                                    D += 2
                                }
                            }
                            break;
                        case e:
                            this.addPixelsNeg(B[D] - 3, F);
                            F ^= 1;
                            if (H[this.codingPos] < C) {
                                if (D > 0) {
                                    --D
                                } else {
                                    ++D
                                }
                                while (B[D] <= H[this.codingPos] && B[D] < C) {
                                    D += 2
                                }
                            }
                            break;
                        case f:
                            this.addPixelsNeg(B[D] - 2, F);
                            F ^= 1;
                            if (H[this.codingPos] < C) {
                                if (D > 0) {
                                    --D
                                } else {
                                    ++D
                                }
                                while (B[D] <= H[this.codingPos] && B[D] < C) {
                                    D += 2
                                }
                            }
                            break;
                        case h:
                            this.addPixelsNeg(B[D] - 1, F);
                            F ^= 1;
                            if (H[this.codingPos] < C) {
                                if (D > 0) {
                                    --D
                                } else {
                                    ++D
                                }
                                while (B[D] <= H[this.codingPos] && B[D] < C) {
                                    D += 2
                                }
                            }
                            break;
                        case EOF:
                            this.addPixels(C, 0);
                            this.eof = true;
                            break;
                        default:
                            info("bad 2d code");
                            this.addPixels(C, 0);
                            this.err = true
                    }
                }
            } else {
                H[0] = 0;
                this.codingPos = 0;
                F = 0;
                while (H[this.codingPos] < C) {
                    L = 0;
                    if (F) {
                        do {
                            L += (G = this.getBlackCode())
                        } while (G >= 64)
                    } else {
                        do {
                            L += (G = this.getWhiteCode())
                        } while (G >= 64)
                    }
                    this.addPixels(H[this.codingPos] + L, F);
                    F ^= 1
                }
            }
            if (this.byteAlign) {
                this.inputBits &= ~7
            }
            var J = false;
            if (!this.eoblock && this.row == this.rows - 1) {
                this.eof = true
            } else {
                L = this.lookBits(12);
                while (L === 0) {
                    this.eatBits(1);
                    L = this.lookBits(12)
                }
                if (L == 1) {
                    this.eatBits(12);
                    J = true
                } else {
                    if (L == EOF) {
                        this.eof = true
                    }
                }
            }
            if (!this.eof && this.encoding > 0) {
                this.nextLine2D = !this.lookBits(1);
                this.eatBits(1)
            }
            if (this.eoblock && J) {
                L = this.lookBits(12);
                if (L == 1) {
                    this.eatBits(12);
                    if (this.encoding > 0) {
                        this.lookBits(1);
                        this.eatBits(1)
                    }
                    if (this.encoding >= 0) {
                        for (var E = 0; E < 4; ++E) {
                            L = this.lookBits(12);
                            if (L != 1) {
                                info("bad rtc code: " + L)
                            }
                            this.eatBits(12);
                            if (this.encoding > 0) {
                                this.lookBits(1);
                                this.eatBits(1)
                            }
                        }
                    }
                    this.eof = true
                }
            } else {
                if (this.err && this.eoline) {
                    while (true) {
                        L = this.lookBits(13);
                        if (L == EOF) {
                            this.eof = true;
                            return null
                        }
                        if ((L >> 1) == 1) {
                            break
                        }
                        this.eatBits(1)
                    }
                    this.eatBits(12);
                    if (this.encoding > 0) {
                        this.eatBits(1);
                        this.nextLine2D = !(L & 1)
                    }
                }
            }
            if (H[0] > 0) {
                this.outputBits = H[this.codingPos = 0]
            } else {
                this.outputBits = H[this.codingPos = 1]
            }
            this.row++
        }
        if (this.outputBits >= 8) {
            this.buf = (this.codingPos & 1) ? 0 : 255;
            this.outputBits -= 8;
            if (this.outputBits === 0 && H[this.codingPos] < C) {
                this.codingPos++;
                this.outputBits = (H[this.codingPos] - H[this.codingPos - 1])
            }
        } else {
            var K = 8;
            this.buf = 0;
            do {
                if (this.outputBits > K) {
                    this.buf <<= K;
                    if (!(this.codingPos & 1)) {
                        this.buf |= 255 >> (8 - K)
                    }
                    this.outputBits -= K;
                    K = 0
                } else {
                    this.buf <<= this.outputBits;
                    if (!(this.codingPos & 1)) {
                        this.buf |= 255 >> (8 - this.outputBits)
                    }
                    K -= this.outputBits;
                    this.outputBits = 0;
                    if (H[this.codingPos] < C) {
                        this.codingPos++;
                        this.outputBits = (H[this.codingPos] - H[this.codingPos - 1])
                    } else {
                        if (K > 0) {
                            this.buf <<= K;
                            K = 0
                        }
                    }
                }
            } while (K)
        }
        if (this.black) {
            this.buf ^= 255
        }
        return this.buf
    };
    y.prototype.findTableCode = function z(I, C, F, B) {
        var G = B || 0;
        for (var D = I; D <= C; ++D) {
            var E = this.lookBits(D);
            if (E == EOF) {
                return [true, 1, false]
            }
            if (D < C) {
                E <<= C - D
            }
            if (!G || E >= G) {
                var H = F[E - G];
                if (H[0] == D) {
                    this.eatBits(D);
                    return [true, H[1], true]
                }
            }
        }
        return [false, 0, false]
    };
    y.prototype.getTwoDimCode = function g() {
        var C = 0;
        var D;
        if (this.eoblock) {
            C = this.lookBits(7);
            D = x[C];
            if (D && D[0] > 0) {
                this.eatBits(D[0]);
                return D[1]
            }
        } else {
            var B = this.findTableCode(1, 7, x);
            if (B[0] && B[2]) {
                return B[1]
            }
        }
        info("Bad two dim code");
        return EOF
    };
    y.prototype.getWhiteCode = function r() {
        var C = 0;
        var D;
        var E;
        if (this.eoblock) {
            C = this.lookBits(12);
            if (C == EOF) {
                return 1
            }
            if ((C >> 5) === 0) {
                D = w[C]
            } else {
                D = v[C >> 3]
            }
            if (D[0] > 0) {
                this.eatBits(D[0]);
                return D[1]
            }
        } else {
            var B = this.findTableCode(1, 9, v);
            if (B[0]) {
                return B[1]
            }
            B = this.findTableCode(11, 12, w);
            if (B[0]) {
                return B[1]
            }
        }
        info("bad white code");
        this.eatBits(1);
        return 1
    };
    y.prototype.getBlackCode = function a() {
        var C, D;
        if (this.eoblock) {
            C = this.lookBits(13);
            if (C == EOF) {
                return 1
            }
            if ((C >> 7) === 0) {
                D = p[C]
            } else {
                if ((C >> 9) === 0 && (C >> 7) !== 0) {
                    D = n[(C >> 1) - 64]
                } else {
                    D = m[C >> 7]
                }
            }
            if (D[0] > 0) {
                this.eatBits(D[0]);
                return D[1]
            }
        } else {
            var B = this.findTableCode(2, 6, m);
            if (B[0]) {
                return B[1]
            }
            B = this.findTableCode(7, 12, n, 64);
            if (B[0]) {
                return B[1]
            }
            B = this.findTableCode(10, 13, p);
            if (B[0]) {
                return B[1]
            }
        }
        info("bad black code");
        this.eatBits(1);
        return 1
    };
    y.prototype.lookBits = function q(C) {
        var B;
        while (this.inputBits < C) {
            if ((B = this.str.getByte()) === null || B === undefined) {
                if (this.inputBits === 0) {
                    return EOF
                }
                return ((this.inputBuf << (C - this.inputBits)) & (65535 >> (16 - C)))
            }
            this.inputBuf = (this.inputBuf << 8) + B;
            this.inputBits += 8
        }
        return (this.inputBuf >> (this.inputBits - C)) & (65535 >> (16 - C))
    };
    y.prototype.eatBits = function c(B) {
        if ((this.inputBits -= B) < 0) {
            this.inputBits = 0
        }
    };
    return y
})();
var LZWStream = (function LZWStreamClosure() {
    function a(h, g) {
        this.str = h;
        this.dict = h.dict;
        this.cachedData = 0;
        this.bitsCached = 0;
        var f = 4096;
        var d = {
            earlyChange: g,
            codeLength: 9,
            nextCode: 258,
            dictionaryValues: new Uint8Array(f),
            dictionaryLengths: new Uint16Array(f),
            dictionaryPrevCodes: new Uint16Array(f),
            currentSequence: new Uint8Array(f),
            currentSequenceLength: 0
        };
        for (var e = 0; e < 256; ++e) {
            d.dictionaryValues[e] = e;
            d.dictionaryLengths[e] = 1
        }
        this.lzwState = d;
        DecodeStream.call(this)
    }
    a.prototype = Object.create(DecodeStream.prototype);
    a.prototype.readBits = function c(g) {
        var e = this.bitsCached;
        var d = this.cachedData;
        while (e < g) {
            var f = this.str.getByte();
            if (f === null || f === undefined) {
                this.eof = true;
                return null
            }
            d = (d << 8) | f;
            e += 8
        }
        this.bitsCached = (e -= g);
        this.cachedData = d;
        this.lastCode = null;
        return (d >>> e) & ((1 << g) - 1)
    };
    a.prototype.readBlock = function b() {
        var l = 512;
        var k = l * 2,
            w = l;
        var v, u, r;
        var g = this.lzwState;
        if (!g) {
            return
        }
        var A = g.earlyChange;
        var p = g.nextCode;
        var e = g.dictionaryValues;
        var t = g.dictionaryLengths;
        var o = g.dictionaryPrevCodes;
        var x = g.codeLength;
        var z = g.prevCode;
        var y = g.currentSequence;
        var f = g.currentSequenceLength;
        var m = 0;
        var h = this.bufferLength;
        var s = this.ensureBuffer(this.bufferLength + k);
        for (v = 0; v < l; v++) {
            var d = this.readBits(x);
            var n = f > 0;
            if (d < 256) {
                y[0] = d;
                f = 1
            } else {
                if (d >= 258) {
                    if (d < p) {
                        f = t[d];
                        for (u = f - 1, r = d; u >= 0; u--) {
                            y[u] = e[r];
                            r = o[r]
                        }
                    } else {
                        y[f++] = y[0]
                    }
                } else {
                    if (d == 256) {
                        x = 9;
                        p = 258;
                        f = 0;
                        continue
                    } else {
                        this.eof = true;
                        delete this.lzwState;
                        break
                    }
                }
            }
            if (n) {
                o[p] = z;
                t[p] = t[z] + 1;
                e[p] = y[0];
                p++;
                x = (p + A) & (p + A - 1) ? x : Math.min(Math.log(p + A) / 0.6931471805599453 + 1, 12) | 0
            }
            z = d;
            m += f;
            if (k < m) {
                do {
                    k += w
                } while (k < m);
                s = this.ensureBuffer(this.bufferLength + k)
            }
            for (u = 0; u < f; u++) {
                s[h++] = y[u]
            }
        }
        g.nextCode = p;
        g.codeLength = x;
        g.prevCode = z;
        g.currentSequenceLength = f;
        this.bufferLength = h
    };
    return a
})();
var NullStream = (function NullStreamClosure() {
    function a() {
        Stream.call(this, new Uint8Array(0))
    }
    a.prototype = Stream.prototype;
    return a
})();
"use strict";

function MessageHandler(e, f) {
    this.name = e;
    this.comObj = f;
    this.callbackIndex = 1;
    var g = this.callbacks = {};
    var c = this.actionHandler = {};
    c.console_log = [function d(i) {}];
    if ("console" in globalScope) {
        c.console_error = [function h(i) {
            globalScope.console.error.apply(null, i)
        }]
    } else {
        c.console_error = [function h(i) {
            log.apply(null, i)
        }]
    }
    c._warn = [function b(i) {
        warn(i)
    }];
    f.onmessage = function a(i) {
        var l = i.data;
        if (l.isReply) {
            var k = l.callbackId;
            if (l.callbackId in g) {
                var n = g[k];
                delete g[k];
                n(l.data)
            } else {
                error("Cannot resolve callback " + k)
            }
        } else {
            if (l.action in c) {
                var j = c[l.action];
                if (l.callbackId) {
                    var m = new Promise();
                    m.then(function(o) {
                        f.postMessage({
                            isReply: true,
                            callbackId: l.callbackId,
                            data: o
                        })
                    });
                    j[0].call(j[1], l.data, m)
                } else {
                    j[0].call(j[1], l.data)
                }
            } else {
                error("Unkown action from worker: " + l.action)
            }
        }
    }
}
MessageHandler.prototype = {
    on: function messageHandlerOn(b, d, c) {
        var a = this.actionHandler;
        if (a[b]) {
            error('There is already an actionName called "' + b + '"')
        }
        a[b] = [d, c]
    },
    send: function messageHandlerSend(a, d, e) {
        var b = {
            action: a,
            data: d
        };
        if (e) {
            var c = this.callbackIndex++;
            this.callbacks[c] = e;
            b.callbackId = c
        }
        this.comObj.postMessage(b)
    }
};
var WorkerMessageHandler = {
    setup: function wphSetup(m) {
        var k;

        function o(s) {
            var r = new Promise();
            var q = function q() {
                var u = k.ensureModel("numPages");
                var x = k.ensureModel("fingerprint");
                var t = k.ensureCatalog("documentOutline");
                var w = k.ensureModel("documentInfo");
                var A = k.ensureCatalog("metadata");
                var z = k.ensureXRef("encrypt");
                var v = k.ensureCatalog("javaScript");
                Promise.all([u, x, t, w, A, z, v]).then(function y(B) {
                    var C = {
                        numPages: B[0],
                        fingerprint: B[1],
                        outline: B[2],
                        info: B[3],
                        metadata: B[4],
                        encrypted: !!B[5],
                        javaScript: B[6]
                    };
                    r.resolve(C)
                }, p)
            };
            var p = function p(t) {
                r.reject(t)
            };
            k.ensureModel("checkHeader", []).then(function() {
                k.ensureModel("parseStartXRef", []).then(function() {
                    k.ensureModel("parse", [s]).then(q, p)
                }, p)
            }, p);
            return r
        }

        function b(s) {
            var w = new Promise();
            var p = s.source;
            var u = s.disableRange;
            if (p.data) {
                try {
                    k = new LocalPdfManager(p.data, p.password);
                    w.resolve()
                } catch (x) {
                    w.reject(x)
                }
                return w
            } else {
                if (p.chunkedViewerLoading) {
                    try {
                        k = new NetworkPdfManager(p, m);
                        w.resolve()
                    } catch (x) {
                        w.reject(x)
                    }
                    return w
                }
            }
            var r = new NetworkManager(p.url, {
                httpHeaders: p.httpHeaders
            });
            var y = r.requestFull({
                onHeadersReceived: function v() {
                    if (u) {
                        return
                    }
                    var D = r.getRequestXhr(y);
                    if (D.getResponseHeader("Accept-Ranges") !== "bytes") {
                        return
                    }
                    var C = D.getResponseHeader("Content-Encoding") || "identity";
                    if (C !== "identity") {
                        return
                    }
                    var B = D.getResponseHeader("Content-Length");
                    B = parseInt(B, 10);
                    if (!isInt(B)) {
                        return
                    }
                    r.abortRequest(y);
                    p.length = B;
                    try {
                        k = new NetworkPdfManager(p, m);
                        w.resolve(k)
                    } catch (A) {
                        w.reject(A)
                    }
                },
                onDone: function q(A) {
                    try {
                        k = new LocalPdfManager(A.chunk, p.password);
                        w.resolve()
                    } catch (B) {
                        w.reject(B)
                    }
                },
                onError: function t(A) {
                    if (A == 404) {
                        var B = new MissingPDFException('Missing PDF "' + p.url + '".');
                        m.send("MissingPDF", {
                            exception: B
                        })
                    } else {
                        m.send("DocError", "Unexpected server response (" + A + ') while retrieving PDF "' + p.url + '".')
                    }
                },
                onProgress: function z(A) {
                    m.send("DocProgress", {
                        loaded: A.loaded,
                        total: A.lengthComputable ? A.total : void(0)
                    })
                }
            });
            return w
        }
        m.on("test", function e(q) {
            if (!(q instanceof Uint8Array)) {
                m.send("test", false);
                return
            }
            var t = new XMLHttpRequest();
            var p = "response" in t;
            try {
                var s = t.responseType
            } catch (r) {
                p = false
            }
            if (!p) {
                m.send("test", false);
                return
            }
            m.send("test", true)
        });
        m.on("GetDocRequest", function j(r) {
            var s = function(t) {
                m.send("GetDoc", {
                    pdfInfo: t
                });
                k.ensureModel("traversePages", []).then(null, q)
            };
            var q = function(t) {
                if (t instanceof PasswordException) {
                    if (t.code === PasswordResponses.NEED_PASSWORD) {
                        m.send("NeedPassword", {
                            exception: t
                        })
                    } else {
                        if (t.code === PasswordResponses.INCORRECT_PASSWORD) {
                            m.send("IncorrectPassword", {
                                exception: t
                            })
                        }
                    }
                } else {
                    if (t instanceof InvalidPDFException) {
                        m.send("InvalidPDF", {
                            exception: t
                        })
                    } else {
                        if (t instanceof MissingPDFException) {
                            m.send("MissingPDF", {
                                exception: t
                            })
                        } else {
                            m.send("UnknownError", {
                                exception: new UnknownErrorException(t.message, t.toString())
                            })
                        }
                    }
                }
            };
            b(r).then(function p() {
                o(false).then(s, function t(u) {
                    if (!(u instanceof XRefParseException)) {
                        if (u instanceof PasswordException) {
                            k.passwordChangedPromise = new Promise();
                            k.passwordChangedPromise.then(p)
                        }
                        q(u);
                        return
                    }
                    k.requestLoadedStream();
                    k.onLoadedStream().then(function() {
                        o(true).then(s, q)
                    })
                }, q)
            }, q)
        });
        m.on("GetPageRequest", function h(q) {
            var p = q.pageIndex;
            k.getPage(p).then(function(t) {
                var s = k.ensure(t, "rotate");
                var r = k.ensure(t, "ref");
                var u = k.ensure(t, "view");
                Promise.all([s, r, u]).then(function(v) {
                    var w = {
                        pageIndex: q.pageIndex,
                        rotate: v[0],
                        ref: v[1],
                        view: v[2]
                    };
                    m.send("GetPage", {
                        pageInfo: w
                    })
                })
            })
        });
        m.on("GetDestinations", function n(p, q) {
            k.ensureCatalog("destinations").then(function(r) {
                q.resolve(r)
            })
        });
        m.on("GetData", function d(p, q) {
            k.requestLoadedStream();
            k.onLoadedStream().then(function(r) {
                q.resolve(r.bytes)
            })
        });
        m.on("DataLoaded", function l(p, q) {
            k.onLoadedStream().then(function(r) {
                q.resolve({
                    length: r.bytes.byteLength
                })
            })
        });
        m.on("UpdatePassword", function g(p) {
            k.updatePassword(p)
        });
        m.on("GetAnnotationsRequest", function a(p) {
            k.getPage(p.pageIndex).then(function(q) {
                k.ensure(q, "getAnnotationsData", []).then(function(r) {
                    m.send("GetAnnotations", {
                        pageIndex: p.pageIndex,
                        annotations: r
                    })
                })
            })
        });
        m.on("RenderPageRequest", function i(p) {
            k.getPage(p.pageIndex).then(function(r) {
                var q = p.pageIndex + 1;
                var s = Date.now();
                r.getOperatorList(m).then(function(t) {
                    var z = t.queue;
                    var u = Object.keys(t.dependencies);
                    log("page=%d - getOperatorList: time=%dms, len=%d", q, Date.now() - s, z.fnArray.length);
                    var y = {};
                    for (var v = 0, w = u.length; v < w; v++) {
                        var x = u[v];
                        if (x.indexOf("g_font_") === 0) {
                            y[x] = true
                        }
                    }
                    m.send("RenderPage", {
                        pageIndex: p.pageIndex,
                        operatorList: z,
                        depFonts: Object.keys(y)
                    })
                }, function(v) {
                    var u = "worker.js: while trying to getPage() and getOperatorList()";
                    var t;
                    if (typeof v === "string") {
                        t = {
                            message: v,
                            stack: u
                        }
                    } else {
                        if (typeof v === "object") {
                            t = {
                                message: v.message || v.toString(),
                                stack: v.stack || u
                            }
                        } else {
                            t = {
                                message: "Unknown exception type: " + (typeof v),
                                stack: u
                            }
                        }
                    }
                    m.send("PageError", {
                        pageNum: q,
                        error: t
                    })
                })
            })
        }, this);
        m.on("GetTextContent", function c(p, q) {
            k.getPage(p.pageIndex).then(function(s) {
                var r = p.pageIndex + 1;
                var t = Date.now();
                s.extractTextContent().then(function(u) {
                    q.resolve(u);
                    log("text indexing: page=%d - time=%dms", r, Date.now() - t)
                }, function(u) {
                    q.reject(u)
                })
            })
        });
        m.on("Terminate", function f(p, q) {
            k.streamManager.networkManager.abortAllRequests();
            q.resolve()
        })
    }
};
var consoleTimer = {};
var workerConsole = {
    log: function log() {
        var a = Array.prototype.slice.call(arguments);
        globalScope.postMessage({
            action: "console_log",
            data: a
        })
    },
    error: function error() {
        var a = Array.prototype.slice.call(arguments);
        globalScope.postMessage({
            action: "console_error",
            data: a
        });
        throw "pdf.js execution error"
    },
    time: function time(a) {
        consoleTimer[a] = Date.now()
    },
    timeEnd: function timeEnd(a) {
        var b = consoleTimer[a];
        if (!b) {
            error("Unkown timer name " + a)
        }
        this.log("Timer:", a, Date.now() - b)
    }
};
if (typeof window === "undefined") {
    globalScope.console = workerConsole;
    PDFJS.LogManager.addLogger({
        warn: function(a) {
            globalScope.postMessage({
                action: "_warn",
                data: a
            })
        }
    });
    var handler = new MessageHandler("worker_processor", this);
    WorkerMessageHandler.setup(handler)
}
PDFJS.workerSrc = "";