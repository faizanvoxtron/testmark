/*
 * International Telephone Input v17.0.8
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

!function (a) { "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], function (b) { a(b) }) : a(jQuery) }(function (a, b) {
    "use strict"; function c(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function d(a, b) { for (var c = 0; c < b.length; c++) { var d = b[c]; d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d) } } function e(a, b, c) { return b && d(a.prototype, b), c && d(a, c), a } for (var f = [["Afghanistan", "af", "93"], ["Albania", "al", "355"], ["Algeria", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria", "at", "43"], ["Azerbaijan", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain", "bh", "973"], ["Bangladesh", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus", "by", "375"], ["Belgium", "be", "32"], ["Belize", "bz", "501"], ["Benin", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi", "bi", "257"], ["Cambodia", "kh", "855"], ["Cameroon", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic", "cf", "236"], ["Chad", "td", "235"], ["Chile", "cl", "56"], ["China", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros", "km", "269"], ["Congo (DRC)", "cd", "243"], ["Congo (Republic)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus", "cy", "357"], ["Czech Republic", "cz", "420"], ["Denmark", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands", "fk", "500"], ["Faroe Islands", "fo", "298"], ["Fiji", "fj", "679"], ["Finland", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana", "gf", "594"], ["French Polynesia", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia", "ge", "995"], ["Germany", "de", "49"], ["Ghana", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece", "gr", "30"], ["Greenland", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea", "gn", "224"], ["Guinea-Bissau", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong", "hk", "852"], ["Hungary", "hu", "36"], ["Iceland", "is", "354"], ["India", "in", "91"], ["Indonesia", "id", "62"], ["Iran", "ir", "98"], ["Iraq", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel", "il", "972"], ["Italy", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan", "jo", "962"], ["Kazakhstan", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait", "kw", "965"], ["Kyrgyzstan", "kg", "996"], ["Laos", "la", "856"], ["Latvia", "lv", "371"], ["Lebanon", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau", "mo", "853"], ["Macedonia (FYROM)", "mk", "389"], ["Madagascar", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania", "mr", "222"], ["Mauritius", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia", "mn", "976"], ["Montenegro", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco", "ma", "212", 0], ["Mozambique", "mz", "258"], ["Myanmar (Burma)", "mm", "95"], ["Namibia", "na", "264"], ["Nauru", "nr", "674"], ["Nepal", "np", "977"], ["Netherlands", "nl", "31"], ["New Caledonia", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea", "kp", "850"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway", "no", "47", 0], ["Oman", "om", "968"], ["Pakistan", "pk", "92"], ["Palau", "pw", "680"], ["Palestine", "ps", "970"], ["Panama", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru", "pe", "51"], ["Philippines", "ph", "63"], ["Poland", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar", "qa", "974"], ["Réunion", "re", "262", 0], ["Romania", "ro", "40"], ["Russia", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe", "st", "239"], ["Saudi Arabia", "sa", "966"], ["Senegal", "sn", "221"], ["Serbia", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia", "sk", "421"], ["Slovenia", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea", "kr", "82"], ["South Sudan", "ss", "211"], ["Spain", "es", "34"], ["Sri Lanka", "lk", "94"], ["Sudan", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria", "sy", "963"], ["Taiwan", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia", "tn", "216"], ["Turkey", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine", "ua", "380"], ["United Arab Emirates", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam", "vn", "84"], ["Wallis and Futuna", "wf", "681"], ["Western Sahara", "eh", "212", 1, ["5288", "5289"]], ["Yemen", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]], g = 0; g < f.length; g++) { var h = f[g]; f[g] = { name: h[0], iso2: h[1], dialCode: h[2], priority: h[3] || 0, areaCodes: h[4] || null } } var i = { getInstance: function (a) { var b = a.getAttribute("data-intl-tel-input-id"); return window.intlTelInputGlobals.instances[b] }, instances: {}, documentReady: function () { return "complete" === document.readyState } }; "object" == typeof window && (window.intlTelInputGlobals = i); var j = 0, k = { allowDropdown: !0, autoHideDialCode: !0, autoPlaceholder: "polite", customContainer: "", customPlaceholder: null, dropdownContainer: null, excludeCountries: [], formatOnDisplay: !0, geoIpLookup: null, hiddenInput: "", initialCountry: "", localizedCountries: null, nationalMode: !0, onlyCountries: [], placeholderNumberType: "MOBILE", preferredCountries: ["us", "gb"], separateDialCode: !1, utilsScript: "" }, l = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"], m = function (a, b) { for (var c = Object.keys(a), d = 0; d < c.length; d++)b(c[d], a[c[d]]) }, n = function (a) { m(window.intlTelInputGlobals.instances, function (b) { window.intlTelInputGlobals.instances[b][a]() }) }, o = function () {
        function a(b, d) { var e = this; c(this, a), this.id = j++, this.a = b, this.b = null, this.c = null; var f = d || {}; this.d = {}, m(k, function (a, b) { e.d[a] = f.hasOwnProperty(a) ? f[a] : b }), this.e = Boolean(b.getAttribute("placeholder")) } return e(a, [{ key: "_init", value: function () { var a = this; if (this.d.nationalMode && (this.d.autoHideDialCode = !1), this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = !1), this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (document.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = document.body)), "undefined" != typeof Promise) { var b = new Promise(function (b, c) { a.h = b, a.i = c }), c = new Promise(function (b, c) { a.i0 = b, a.i1 = c }); this.promise = Promise.all([b, c]) } else this.h = this.i = function () { }, this.i0 = this.i1 = function () { }; this.s = {}, this._b(), this._f(), this._h(), this._i(), this._i3() } }, { key: "_b", value: function () { this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1) } }, { key: "_c", value: function (a, c, d) { c.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = c.length), this.q.hasOwnProperty(c) || (this.q[c] = []); for (var e = 0; e < this.q[c].length; e++)if (this.q[c][e] === a) return; var f = d !== b ? d : this.q[c].length; this.q[c][f] = a } }, { key: "_d", value: function () { if (this.d.onlyCountries.length) { var a = this.d.onlyCountries.map(function (a) { return a.toLowerCase() }); this.p = f.filter(function (b) { return a.indexOf(b.iso2) > -1 }) } else if (this.d.excludeCountries.length) { var b = this.d.excludeCountries.map(function (a) { return a.toLowerCase() }); this.p = f.filter(function (a) { return -1 === b.indexOf(a.iso2) }) } else this.p = f } }, { key: "_d0", value: function () { for (var a = 0; a < this.p.length; a++) { var b = this.p[a].iso2.toLowerCase(); this.d.localizedCountries.hasOwnProperty(b) && (this.p[a].name = this.d.localizedCountries[b]) } } }, { key: "_d1", value: function (a, b) { return a.name.localeCompare(b.name) } }, { key: "_d2", value: function () { this.countryCodeMaxLen = 0, this.dialCodes = {}, this.q = {}; for (var a = 0; a < this.p.length; a++) { var b = this.p[a]; this.dialCodes[b.dialCode] || (this.dialCodes[b.dialCode] = !0), this._c(b.iso2, b.dialCode, b.priority) } for (var c = 0; c < this.p.length; c++) { var d = this.p[c]; if (d.areaCodes) for (var e = this.q[d.dialCode][0], f = 0; f < d.areaCodes.length; f++) { for (var g = d.areaCodes[f], h = 1; h < g.length; h++) { var i = d.dialCode + g.substr(0, h); this._c(e, i), this._c(d.iso2, i) } this._c(d.iso2, d.dialCode + g) } } } }, { key: "_e", value: function () { this.preferredCountries = []; for (var a = 0; a < this.d.preferredCountries.length; a++) { var b = this.d.preferredCountries[a].toLowerCase(), c = this._y(b, !1, !0); c && this.preferredCountries.push(c) } } }, { key: "_e2", value: function (a, b, c) { var d = document.createElement(a); return b && m(b, function (a, b) { return d.setAttribute(a, b) }), c && c.appendChild(d), d } }, { key: "_f", value: function () { this.a.hasAttribute("autocomplete") || this.a.form && this.a.form.hasAttribute("autocomplete") || this.a.setAttribute("autocomplete", "off"); var a = "iti"; this.d.allowDropdown && (a += " iti--allow-dropdown"), this.d.separateDialCode && (a += " iti--separate-dial-code"), this.d.customContainer && (a += " ", a += this.d.customContainer); var b = this._e2("div", { "class": a }); if (this.a.parentNode.insertBefore(b, this.a), this.k = this._e2("div", { "class": "iti__flag-container" }, b), b.appendChild(this.a), this.selectedFlag = this._e2("div", { "class": "iti__selected-flag", role: "combobox", "aria-controls": "iti-".concat(this.id, "__country-listbox"), "aria-owns": "iti-".concat(this.id, "__country-listbox"), "aria-expanded": "false" }, this.k), this.l = this._e2("div", { "class": "iti__flag" }, this.selectedFlag), this.d.separateDialCode && (this.t = this._e2("div", { "class": "iti__selected-dial-code" }, this.selectedFlag)), this.d.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"), this.u = this._e2("div", { "class": "iti__arrow" }, this.selectedFlag), this.m = this._e2("ul", { "class": "iti__country-list iti__hide", id: "iti-".concat(this.id, "__country-listbox"), role: "listbox", "aria-label": "List of countries" }), this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred", !0), this._e2("li", { "class": "iti__divider", role: "separator", "aria-disabled": "true" }, this.m)), this._g(this.p, "iti__standard"), this.d.dropdownContainer ? (this.dropdown = this._e2("div", { "class": "iti iti--container" }), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)), this.d.hiddenInput) { var c = this.d.hiddenInput, d = this.a.getAttribute("name"); if (d) { var e = d.lastIndexOf("["); -1 !== e && (c = "".concat(d.substr(0, e), "[").concat(c, "]")) } this.hiddenInput = this._e2("input", { type: "hidden", name: c }), b.appendChild(this.hiddenInput) } } }, { key: "_g", value: function (a, b, c) { for (var d = "", e = 0; e < a.length; e++) { var f = a[e], g = c ? "-preferred" : ""; d += "<li class='iti__country ".concat(b, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(f.iso2).concat(g, "' role='option' data-dial-code='").concat(f.dialCode, "' data-country-code='").concat(f.iso2, "' aria-selected='false'>"), d += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(f.iso2, "'></div></div>"), d += "<span class='iti__country-name'>".concat(f.name, "</span>"), d += "<span class='iti__dial-code'>+".concat(f.dialCode, "</span>"), d += "</li>" } this.m.insertAdjacentHTML("beforeend", d) } }, { key: "_h", value: function () { var a = this.a.value, b = this._5(a), c = this._w(a), d = this.d, e = d.initialCountry, f = d.nationalMode, g = d.autoHideDialCode, h = d.separateDialCode; b && !c ? this._v(a) : "auto" !== e && (e ? this._z(e.toLowerCase()) : b && c ? this._z("us") : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, a || this._z(this.j)), a || f || g || h || (this.a.value = "+".concat(this.s.dialCode))), a && this._u(a) } }, { key: "_i", value: function () { this._j(), this.d.autoHideDialCode && this._l(), this.d.allowDropdown && this._i2(), this.hiddenInput && this._i0() } }, { key: "_i0", value: function () { var a = this; this._a14 = function () { a.hiddenInput.value = a.getNumber() }, this.a.form && this.a.form.addEventListener("submit", this._a14) } }, { key: "_i1", value: function () { for (var a = this.a; a && "LABEL" !== a.tagName;)a = a.parentNode; return a } }, { key: "_i2", value: function () { var a = this; this._a9 = function (b) { a.m.classList.contains("iti__hide") ? a.a.focus() : b.preventDefault() }; var b = this._i1(); b && b.addEventListener("click", this._a9), this._a10 = function () { !a.m.classList.contains("iti__hide") || a.a.disabled || a.a.readOnly || a._n() }, this.selectedFlag.addEventListener("click", this._a10), this._a11 = function (b) { a.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(b.key) && (b.preventDefault(), b.stopPropagation(), a._n()), "Tab" === b.key && a._2() }, this.k.addEventListener("keydown", this._a11) } }, { key: "_i3", value: function () { var a = this; this.d.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript) : window.addEventListener("load", function () { window.intlTelInputGlobals.loadUtils(a.d.utilsScript) }) : this.i0(), "auto" === this.d.initialCountry ? this._i4() : this.h() } }, { key: "_i4", value: function () { window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.d.geoIpLookup && this.d.geoIpLookup(function (a) { window.intlTelInputGlobals.autoCountry = a.toLowerCase(), setTimeout(function () { return n("handleAutoCountry") }) }, function () { return n("rejectAutoCountryPromise") })) } }, { key: "_j", value: function () { var a = this; this._a12 = function () { a._v(a.a.value) && a._m2CountryChange() }, this.a.addEventListener("keyup", this._a12), this._a13 = function () { setTimeout(a._a12) }, this.a.addEventListener("cut", this._a13), this.a.addEventListener("paste", this._a13) } }, { key: "_j2", value: function (a) { var b = this.a.getAttribute("maxlength"); return b && a.length > b ? a.substr(0, b) : a } }, { key: "_l", value: function () { var a = this; this._a8 = function () { a._l2() }, this.a.form && this.a.form.addEventListener("submit", this._a8), this.a.addEventListener("blur", this._a8) } }, { key: "_l2", value: function () { if ("+" === this.a.value.charAt(0)) { var a = this._m(this.a.value); a && this.s.dialCode !== a || (this.a.value = "") } } }, { key: "_m", value: function (a) { return a.replace(/\D/g, "") } }, { key: "_m2", value: function (a) { var b = document.createEvent("Event"); b.initEvent(a, !0, !0), this.a.dispatchEvent(b) } }, { key: "_n", value: function () { this.m.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._o(), this.b && (this._x(this.b, !1), this._3(this.b, !0)), this._p(), this.u.classList.add("iti__arrow--up"), this._m2("open:countrydropdown") } }, { key: "_n2", value: function (a, b, c) { c && !a.classList.contains(b) ? a.classList.add(b) : !c && a.classList.contains(b) && a.classList.remove(b) } }, { key: "_o", value: function () { var a = this; if (this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), !this.g) { var b = this.a.getBoundingClientRect(), c = window.pageYOffset || document.documentElement.scrollTop, d = b.top + c, e = this.m.offsetHeight, f = d + this.a.offsetHeight + e < c + window.innerHeight, g = d - e > c; if (this._n2(this.m, "iti__country-list--dropup", !f && g), this.d.dropdownContainer) { var h = !f && g ? 0 : this.a.offsetHeight; this.dropdown.style.top = "".concat(d + h, "px"), this.dropdown.style.left = "".concat(b.left + document.body.scrollLeft, "px"), this._a4 = function () { return a._2() }, window.addEventListener("scroll", this._a4) } } } }, { key: "_o2", value: function (a) { for (var b = a; b && b !== this.m && !b.classList.contains("iti__country");)b = b.parentNode; return b === this.m ? null : b } }, { key: "_p", value: function () { var a = this; this._a0 = function (b) { var c = a._o2(b.target); c && a._x(c, !1) }, this.m.addEventListener("mouseover", this._a0), this._a1 = function (b) { var c = a._o2(b.target); c && a._1(c) }, this.m.addEventListener("click", this._a1); var b = !0; this._a2 = function () { b || a._2(), b = !1 }, document.documentElement.addEventListener("click", this._a2); var c = "", d = null; this._a3 = function (b) { b.preventDefault(), "ArrowUp" === b.key || "Up" === b.key || "ArrowDown" === b.key || "Down" === b.key ? a._q(b.key) : "Enter" === b.key ? a._r() : "Escape" === b.key ? a._2() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key) && (d && clearTimeout(d), c += b.key.toLowerCase(), a._s(c), d = setTimeout(function () { c = "" }, 1e3)) }, document.addEventListener("keydown", this._a3) } }, { key: "_q", value: function (a) { var b = "ArrowUp" === a || "Up" === a ? this.c.previousElementSibling : this.c.nextElementSibling; b && (b.classList.contains("iti__divider") && (b = "ArrowUp" === a || "Up" === a ? b.previousElementSibling : b.nextElementSibling), this._x(b, !0)) } }, { key: "_r", value: function () { this.c && this._1(this.c) } }, { key: "_s", value: function (a) { for (var b = 0; b < this.p.length; b++)if (this._t(this.p[b].name, a)) { var c = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(this.p[b].iso2)); this._x(c, !1), this._3(c, !0); break } } }, { key: "_t", value: function (a, b) { return a.substr(0, b.length).toLowerCase() === b } }, { key: "_u", value: function (a) { var b = a; if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) { var c = !this.d.separateDialCode && (this.d.nationalMode || "+" !== b.charAt(0)), d = intlTelInputUtils.numberFormat, e = d.NATIONAL, f = d.INTERNATIONAL, g = c ? e : f; b = intlTelInputUtils.formatNumber(b, this.s.iso2, g) } b = this._7(b), this.a.value = b } }, { key: "_v", value: function (a) { var b = a, c = this.s.dialCode, d = "1" === c; b && this.d.nationalMode && d && "+" !== b.charAt(0) && ("1" !== b.charAt(0) && (b = "1".concat(b)), b = "+".concat(b)), this.d.separateDialCode && c && "+" !== b.charAt(0) && (b = "+".concat(c).concat(b)); var e = this._5(b, !0), f = this._m(b), g = null; if (e) { var h = this.q[this._m(e)], i = -1 !== h.indexOf(this.s.iso2) && f.length <= e.length - 1; if (!("1" === c && this._w(f)) && !i) for (var j = 0; j < h.length; j++)if (h[j]) { g = h[j]; break } } else "+" === b.charAt(0) && f.length ? g = "" : b && "+" !== b || (g = this.j); return null !== g && this._z(g) } }, { key: "_w", value: function (a) { var b = this._m(a); if ("1" === b.charAt(0)) { var c = b.substr(1, 3); return -1 !== l.indexOf(c) } return !1 } }, { key: "_x", value: function (a, b) { var c = this.c; c && c.classList.remove("iti__highlight"), this.c = a, this.c.classList.add("iti__highlight"), b && this.c.focus() } }, { key: "_y", value: function (a, b, c) { for (var d = b ? f : this.p, e = 0; e < d.length; e++)if (d[e].iso2 === a) return d[e]; if (c) return null; throw new Error("No country data for '".concat(a, "'")) } }, { key: "_z", value: function (a) { var b = this.s.iso2 ? this.s : {}; this.s = a ? this._y(a, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.setAttribute("class", "iti__flag iti__".concat(a)); var c = a ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown"; if (this.selectedFlag.setAttribute("title", c), this.d.separateDialCode) { var d = this.s.dialCode ? "+".concat(this.s.dialCode) : ""; this.t.innerHTML = d; var e = this.selectedFlag.offsetWidth || this._z2(); this.a.style.paddingLeft = "".concat(e + 6, "px") } if (this._0(), this.d.allowDropdown) { var f = this.b; if (f && (f.classList.remove("iti__active"), f.setAttribute("aria-selected", "false")), a) { var g = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a, "-preferred")) || this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a)); g.setAttribute("aria-selected", "true"), g.classList.add("iti__active"), this.b = g, this.selectedFlag.setAttribute("aria-activedescendant", g.getAttribute("id")) } } return b.iso2 !== a } }, { key: "_z2", value: function () { var a = this.a.parentNode.cloneNode(); a.style.visibility = "hidden", document.body.appendChild(a); var b = this.k.cloneNode(); a.appendChild(b); var c = this.selectedFlag.cloneNode(!0); b.appendChild(c); var d = c.offsetWidth; return a.parentNode.removeChild(a), d } }, { key: "_0", value: function () { var a = "aggressive" === this.d.autoPlaceholder || !this.e && "polite" === this.d.autoPlaceholder; if (window.intlTelInputUtils && a) { var b = intlTelInputUtils.numberType[this.d.placeholderNumberType], c = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, b) : ""; c = this._7(c), "function" == typeof this.d.customPlaceholder && (c = this.d.customPlaceholder(c, this.s)), this.a.setAttribute("placeholder", c) } } }, { key: "_1", value: function (a) { var b = this._z(a.getAttribute("data-country-code")); this._2(), this._4(a.getAttribute("data-dial-code"), !0), this.a.focus(); var c = this.a.value.length; this.a.setSelectionRange(c, c), b && this._m2CountryChange() } }, { key: "_2", value: function () { this.m.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.u.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._a3), document.documentElement.removeEventListener("click", this._a2), this.m.removeEventListener("mouseover", this._a0), this.m.removeEventListener("click", this._a1), this.d.dropdownContainer && (this.g || window.removeEventListener("scroll", this._a4), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._m2("close:countrydropdown") } }, { key: "_3", value: function (a, b) { var c = this.m, d = window.pageYOffset || document.documentElement.scrollTop, e = c.offsetHeight, f = c.getBoundingClientRect().top + d, g = f + e, h = a.offsetHeight, i = a.getBoundingClientRect().top + d, j = i + h, k = i - f + c.scrollTop, l = e / 2 - h / 2; if (i < f) b && (k -= l), c.scrollTop = k; else if (j > g) { b && (k += l); var m = e - h; c.scrollTop = k - m } } }, { key: "_4", value: function (a, b) { var c, d = this.a.value, e = "+".concat(a); if ("+" === d.charAt(0)) { var f = this._5(d); c = f ? d.replace(f, e) : e } else { if (this.d.nationalMode || this.d.separateDialCode) return; if (d) c = e + d; else { if (!b && this.d.autoHideDialCode) return; c = e } } this.a.value = c } }, { key: "_5", value: function (a, b) { var c = ""; if ("+" === a.charAt(0)) for (var d = "", e = 0; e < a.length; e++) { var f = a.charAt(e); if (!isNaN(parseInt(f, 10))) { if (d += f, b) this.q[d] && (c = a.substr(0, e + 1)); else if (this.dialCodes[d]) { c = a.substr(0, e + 1); break } if (d.length === this.countryCodeMaxLen) break } } return c } }, { key: "_6", value: function () { var a = this.a.value.trim(), b = this.s.dialCode, c = this._m(a); return (this.d.separateDialCode && "+" !== a.charAt(0) && b && c ? "+".concat(b) : "") + a } }, { key: "_7", value: function (a) { var b = a; if (this.d.separateDialCode) { var c = this._5(b); if (c) { c = "+".concat(this.s.dialCode); var d = " " === b[c.length] || "-" === b[c.length] ? c.length + 1 : c.length; b = b.substr(d) } } return this._j2(b) } }, { key: "_m2CountryChange", value: function () { this._m2("countrychange") } }, { key: "handleAutoCountry", value: function () { "auto" === this.d.initialCountry && (this.j = window.intlTelInputGlobals.autoCountry, this.a.value || this.setCountry(this.j), this.h()) } }, { key: "handleUtils", value: function () { window.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), this.i0() } }, { key: "destroy", value: function () { var a = this.a.form; if (this.d.allowDropdown) { this._2(), this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11); var b = this._i1(); b && b.removeEventListener("click", this._a9) } this.hiddenInput && a && a.removeEventListener("submit", this._a14), this.d.autoHideDialCode && (a && a.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8)), this.a.removeEventListener("keyup", this._a12), this.a.removeEventListener("cut", this._a13), this.a.removeEventListener("paste", this._a13), this.a.removeAttribute("data-intl-tel-input-id"); var c = this.a.parentNode; c.parentNode.insertBefore(this.a, c), c.parentNode.removeChild(c), delete window.intlTelInputGlobals.instances[this.id] } }, { key: "getExtension", value: function () { return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : "" } }, {
            key: "getNumber", value: function (a) {
                if (window.intlTelInputUtils) {
                    var b = this.s.iso2
                    ; return intlTelInputUtils.formatNumber(this._6(), b, a)
                } return ""
            }
        }, { key: "getNumberType", value: function () { return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99 } }, { key: "getSelectedCountryData", value: function () { return this.s } }, { key: "getValidationError", value: function () { if (window.intlTelInputUtils) { var a = this.s.iso2; return intlTelInputUtils.getValidationError(this._6(), a) } return -99 } }, { key: "isValidNumber", value: function () { var a = this._6().trim(), b = this.d.nationalMode ? this.s.iso2 : ""; return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(a, b) : null } }, { key: "setCountry", value: function (a) { var b = a.toLowerCase(); this.l.classList.contains("iti__".concat(b)) || (this._z(b), this._4(this.s.dialCode, !1), this._m2CountryChange()) } }, { key: "setNumber", value: function (a) { var b = this._v(a); this._u(a), b && this._m2CountryChange() } }, { key: "setPlaceholderNumberType", value: function (a) { this.d.placeholderNumberType = a, this._0() } }]), a
    }(); i.getCountryData = function () { return f }; var p = function (a, b, c) { var d = document.createElement("script"); d.onload = function () { n("handleUtils"), b && b() }, d.onerror = function () { n("rejectUtilsScriptPromise"), c && c() }, d.className = "iti-load-utils", d.async = !0, d.src = a, document.body.appendChild(d) }; i.loadUtils = function (a) { if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) { if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise(function (b, c) { return p(a, b, c) }); p(a) } return null }, i.defaults = k, i.version = "17.0.8"; a.fn.intlTelInput = function (c) { var d = arguments; if (c === b || "object" == typeof c) return this.each(function () { if (!a.data(this, "plugin_intlTelInput")) { var b = new o(this, c); b._init(), window.intlTelInputGlobals.instances[b.id] = b, a.data(this, "plugin_intlTelInput", b) } }); if ("string" == typeof c && "_" !== c[0]) { var e; return this.each(function () { var b = a.data(this, "plugin_intlTelInput"); b instanceof o && "function" == typeof b[c] && (e = b[c].apply(b, Array.prototype.slice.call(d, 1))), "destroy" === c && a.data(this, "plugin_intlTelInput", null) }), e !== b ? e : this } }
});



/*
***************************************************
** http://davealger.info
***************************************************

This is a javascript only way to fingerprint a user with better than 90% accuracy in as few bytes as possible and no cookie storage!

Special thanks to Valentin Vasilyev for the original fingerprintjs slightly modified and to Open Source Device Fingerprinting by Dark Wave Tech for the various identity functions

***************************************************
*/

; (function (name, context, definition) { if (typeof module !== 'undefined' && module.exports) { module.exports = definition(); } else if (typeof define === 'function' && define.amd) { define(definition); } else { context[name] = definition(); } })('Fingerprint', this, function () { 'use strict'; var Fingerprint = function (options) { var nativeForEach, nativeMap; nativeForEach = Array.prototype.forEach; nativeMap = Array.prototype.map; this.each = function (obj, iterator, context) { if (obj === null) { return; } if (nativeForEach && obj.forEach === nativeForEach) { obj.forEach(iterator, context); } else if (obj.length === +obj.length) { for (var i = 0, l = obj.length; i < l; i++) { if (iterator.call(context, obj[i], i, obj) === {}) return; } } else { for (var key in obj) { if (obj.hasOwnProperty(key)) { if (iterator.call(context, obj[key], key, obj) === {}) return; } } } }; this.map = function (obj, iterator, context) { var results = []; if (obj == null) return results; if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context); this.each(obj, function (value, index, list) { results[results.length] = iterator.call(context, value, index, list); }); return results; }; if (typeof options == 'object') { this.hasher = options.hasher; this.screen_resolution = options.screen_resolution; this.screen_orientation = options.screen_orientation; this.canvas = options.canvas; this.ie_activex = options.ie_activex; } else if (typeof options == 'function') { this.hasher = options; } }; Fingerprint.prototype = { get: function () { var keys = []; keys.push(navigator.userAgent); keys.push(navigator.language); keys.push(screen.colorDepth); if (this.screen_resolution) { var resolution = this.getScreenResolution(); if (typeof resolution !== 'undefined') { keys.push(this.getScreenResolution().join('x')); } } keys.push(new Date().getTimezoneOffset()); keys.push(this.hasSessionStorage()); keys.push(this.hasLocalStorage()); keys.push(!!window.indexedDB); if (document.body) { keys.push(typeof (document.body.addBehavior)); } else { keys.push(typeof undefined); } keys.push(typeof (window.openDatabase)); keys.push(navigator.cpuClass); keys.push(navigator.platform); keys.push(navigator.doNotTrack); keys.push(this.getPluginsString()); if (this.canvas && this.isCanvasSupported()) { keys.push(this.getCanvasFingerprint()); } if (this.hasher) { return this.hasher(keys.join('###'), 31); } else { return this.murmurhash3_32_gc(keys.join('###'), 31); } }, murmurhash3_32_gc: function (key, seed) { var remainder, bytes, h1, h1b, c1, c2, k1, i; remainder = key.length & 3; bytes = key.length - remainder; h1 = seed; c1 = 0xcc9e2d51; c2 = 0x1b873593; i = 0; while (i < bytes) { k1 = ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 16) | ((key.charCodeAt(++i) & 0xff) << 24); ++i; k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff; k1 = (k1 << 15) | (k1 >>> 17); k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff; h1 ^= k1; h1 = (h1 << 13) | (h1 >>> 19); h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff; h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16)); } k1 = 0; switch (remainder) { case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16; case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8; case 1: k1 ^= (key.charCodeAt(i) & 0xff); k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff; k1 = (k1 << 15) | (k1 >>> 17); k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff; h1 ^= k1; } h1 ^= key.length; h1 ^= h1 >>> 16; h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff; h1 ^= h1 >>> 13; h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff; h1 ^= h1 >>> 16; return h1 >>> 0; }, hasLocalStorage: function () { try { return !!window.localStorage; } catch (e) { return true; } }, hasSessionStorage: function () { try { return !!window.sessionStorage; } catch (e) { return true; } }, isCanvasSupported: function () { var elem = document.createElement('canvas'); return !!(elem.getContext && elem.getContext('2d')); }, isIE: function () { if (navigator.appName === 'Microsoft Internet Explorer') { return true; } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { return true; } return false; }, getPluginsString: function () { if (this.isIE() && this.ie_activex) { return this.getIEPluginsString(); } else { return this.getRegularPluginsString(); } }, getRegularPluginsString: function () { return this.map(navigator.plugins, function (p) { var mimeTypes = this.map(p, function (mt) { return [mt.type, mt.suffixes].join('~'); }).join(','); return [p.name, p.description, mimeTypes].join('::'); }, this).join(';'); }, getIEPluginsString: function () { if (window.ActiveXObject) { var names = ['ShockwaveFlash.ShockwaveFlash', 'AcroPDF.PDF', 'PDF.PdfCtrl', 'QuickTime.QuickTime', 'rmocx.RealPlayer G2 Control', 'rmocx.RealPlayer G2 Control.1', 'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)', 'RealVideo.RealVideo(tm) ActiveX Control (32-bit)', 'RealPlayer', 'SWCtl.SWCtl', 'WMPlayer.OCX', 'AgControl.AgControl', 'Skype.Detection']; return this.map(names, function (name) { try { new ActiveXObject(name); return name; } catch (e) { return null; } }).join(';'); } else { return ""; } }, getScreenResolution: function () { var resolution; if (this.screen_orientation) { resolution = (screen.height > screen.width) ? [screen.height, screen.width] : [screen.width, screen.height]; } else { resolution = [screen.height, screen.width]; } return resolution; }, getCanvasFingerprint: function () { var canvas = document.createElement('canvas'); var ctx = canvas.getContext('2d'); var txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-={}|[]\:"<>?;,.'; ctx.textBaseline = "top"; ctx.font = "14px 'Arial'"; ctx.textBaseline = "alphabetic"; ctx.fillStyle = "#f60"; ctx.fillRect(125, 1, 62, 20); ctx.fillStyle = "#069"; ctx.fillText(txt, 2, 15); ctx.fillStyle = "rgba(102, 204, 0, 0.7)"; ctx.fillText(txt, 4, 17); return canvas.toDataURL(); } }; return Fingerprint; });
/**************************************************/


/**
http://www.darkwavetech.com/fingerprint/fingerprint_code.html
**/
function fingerprint_flash() {
    "use strict";
    var strOnError, objPlayerVersion, strVersion, strOut;

    strOnError = "N/A";
    objPlayerVersion = null;
    strVersion = null;
    strOut = null;

    try {
        objPlayerVersion = swfobject.getFlashPlayerVersion();
        strVersion = objPlayerVersion.major + "." + objPlayerVersion.minor + "." + objPlayerVersion.release;
        if (strVersion === "0.0.0") {
            strVersion = "N/A";
        }
        strOut = strVersion;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}


function fingerprint_browser() {
    "use strict";
    var strOnError, strUserAgent, numVersion, strBrowser, strOut;

    strOnError = "Error";
    strUserAgent = null;
    numVersion = null;
    strBrowser = null;
    strOut = null;

    try {
        strUserAgent = navigator.userAgent.toLowerCase();
        if (/msie (\d+\.\d+);/.test(strUserAgent)) { //test for MSIE x.x;
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            if (strUserAgent.indexOf("trident/6") > -1) {
                numVersion = 10;
            }
            if (strUserAgent.indexOf("trident/5") > -1) {
                numVersion = 9;
            }
            if (strUserAgent.indexOf("trident/4") > -1) {
                numVersion = 8;
            }
            strBrowser = "Internet Explorer " + numVersion;
        } else if (strUserAgent.indexOf("trident/7") > -1) { //IE 11+ gets rid of the legacy 'MSIE' in the user-agent string;
            numVersion = 11;
            strBrowser = "Internet Explorer " + numVersion;
        } else if (/firefox[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Firefox " + numVersion;
        } else if (/opera[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Opera/x.x or Opera x.x (ignoring remaining decimal places);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Opera " + numVersion;
        } else if (/chrome[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Chrome/x.x or Chrome x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Chrome " + numVersion;
        } else if (/version[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Version/x.x or Version x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Safari " + numVersion;
        } else if (/rv[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for rv/x.x or rv x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Mozilla " + numVersion;
        } else if (/mozilla[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Mozilla/x.x or Mozilla x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Mozilla " + numVersion;
        } else if (/binget[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for BinGet/x.x or BinGet x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (BinGet) " + numVersion;
        } else if (/curl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Curl/x.x or Curl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (cURL) " + numVersion;
        } else if (/java[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Java/x.x or Java x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Java) " + numVersion;
        } else if (/libwww-perl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for libwww-perl/x.x or libwww-perl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (libwww-perl) " + numVersion;
        } else if (/microsoft url control -[\s](\d+\.\d+)/.test(strUserAgent)) { //test for Microsoft URL Control - x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Microsoft URL Control) " + numVersion;
        } else if (/peach[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Peach/x.x or Peach x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Peach) " + numVersion;
        } else if (/php[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for PHP/x.x or PHP x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (PHP) " + numVersion;
        } else if (/pxyscand[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for pxyscand/x.x or pxyscand x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (pxyscand) " + numVersion;
        } else if (/pycurl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for pycurl/x.x or pycurl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (PycURL) " + numVersion;
        } else if (/python-urllib[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for python-urllib/x.x or python-urllib x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Python URLlib) " + numVersion;
        } else if (/appengine-google/.test(strUserAgent)) { //test for AppEngine-Google;
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Cloud (Google AppEngine) " + numVersion;
        } else {
            strBrowser = "Unknown";
        }
        strOut = strBrowser;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_canvas() {
    "use strict";
    var strOnError, canvas, strCText, strText, strOut;

    strOnError = "Error";
    canvas = null;
    strCText = null;
    strText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/?";
    strOut = null;

    try {
        canvas = document.createElement('canvas');
        strCText = canvas.getContext('2d');
        strCText.textBaseline = "top";
        strCText.font = "14px 'Arial'";
        strCText.textBaseline = "alphabetic";
        strCText.fillStyle = "#f60";
        strCText.fillRect(125, 1, 62, 20);
        strCText.fillStyle = "#069";
        strCText.fillText(strText, 2, 15);
        strCText.fillStyle = "rgba(102, 204, 0, 0.7)";
        strCText.fillText(strText, 4, 17);
        strOut = canvas.toDataURL();
        return strOut;
    } catch (err) {
        return strOnError;
    }
}


function fingerprint_connection() {
    "use strict";
    var strOnError, strConnection, strOut;

    strOnError = "N/A";
    strConnection = null;
    strOut = null;

    try {
        // only on android
        strConnection = navigator.connection.type;
        strOut = strConnection;
    } catch (err) {
        // return N/A if navigator.connection object does not apply to this device
        return strOnError;
    }
    return strOut;
}


function fingerprint_cookie() {
    "use strict";
    var strOnError, bolCookieEnabled, bolOut;

    strOnError = "Error";
    bolCookieEnabled = null;
    bolOut = null;

    try {
        bolCookieEnabled = (navigator.cookieEnabled) ? true : false;

        //if not IE4+ nor NS6+
        if (typeof navigator.cookieEnabled === "undefined" && !bolCookieEnabled) {
            document.cookie = "testcookie";
            bolCookieEnabled = (document.cookie.indexOf("testcookie") !== -1) ? true : false;
        }
        bolOut = bolCookieEnabled;
        return bolOut;
    } catch (err) {
        return strOnError;
    }
}



function fingerprint_display() {
    "use strict";
    var strSep, strPair, strOnError, strScreen, strDisplay, strOut;

    strSep = "|";
    strPair = "=";
    strOnError = "Error";
    strScreen = null;
    strDisplay = null;
    strOut = null;

    try {
        strScreen = window.screen;
        if (strScreen) {
            strDisplay = strScreen.colorDepth + strSep + strScreen.width + strSep + strScreen.height + strSep + strScreen.availWidth + strSep + strScreen.availHeight;
        }
        strOut = strDisplay;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_fontsmoothing() {
    "use strict";
    var strOnError, strFontSmoothing, canvasNode, ctx, i, j, imageData, alpha, strOut;

    strOnError = "Unknown";
    strFontSmoothing = null;
    canvasNode = null;
    ctx = null;
    imageData = null;
    alpha = null;
    strOut = null;

    if (typeof (screen.fontSmoothingEnabled) !== "undefined") {
        strFontSmoothing = screen.fontSmoothingEnabled;
    } else {
        try {
            fontsmoothing = "false";
            canvasNode = document.createElement('canvas');
            canvasNode.width = "35";
            canvasNode.height = "35";
            canvasNode.style.display = 'none';
            document.body.appendChild(canvasNode);
            ctx = canvasNode.getContext('2d');
            ctx.textBaseline = "top";
            ctx.font = "32px Arial";
            ctx.fillStyle = "black";
            ctx.strokeStyle = "black";
            ctx.fillText("O", 0, 0);
            for (j = 8; j <= 32; j = j + 1) {
                for (i = 1; i <= 32; i = i + 1) {
                    imageData = ctx.getImageData(i, j, 1, 1).data;
                    alpha = imageData[3];
                    if (alpha !== 255 && alpha !== 0) {
                        strFontSmoothing = "true"; // font-smoothing must be on.
                    }
                }
            }
            strOut = strFontSmoothing;
        } catch (err) {
            return strOnError;
        }
    }
    strOut = strFontSmoothing;
    return strOut;
}

function fingerprint_fonts() {
    "use strict";
    var strOnError, style, fonts, count, template, fragment, divs, i, font, div, body, result, e;

    strOnError = "Error";
    style = null;
    fonts = null;
    font = null;
    count = 0;
    template = null;
    divs = null;
    e = null;
    div = null;
    body = null;
    i = 0;

    try {
        style = "position: absolute; visibility: hidden; display: block !important";
        fonts = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"];
        count = fonts.length;
        template = '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',sans-serif !important">ww</b>' + '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',monospace !important">ww</b>';
        fragment = document.createDocumentFragment();
        divs = [];
        for (i = 0; i < count; i = i + 1) {
            font = fonts[i];
            div = document.createElement('div');
            font = font.replace(/['"<>]/g, '');
            div.innerHTML = template.replace(/X/g, font);
            div.style.cssText = style;
            fragment.appendChild(div);
            divs.push(div);
        }
        body = document.body;
        body.insertBefore(fragment, body.firstChild);
        result = [];
        for (i = 0; i < count; i = i + 1) {
            e = divs[i].getElementsByTagName('b');
            if (e[0].offsetWidth === e[1].offsetWidth) {
                result.push(fonts[i]);
            }
        }
        // do not combine these two loops, remove child will cause reflow
        // and induce severe performance hit
        for (i = 0; i < count; i = i + 1) {
            body.removeChild(divs[i]);
        }
        return result.join('|');
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_formfields() {
    "use strict";
    var i, j, numOfForms, numOfInputs, strFormsInPage, strFormsInputsData, strInputsInForm, strTmp, strOut;

    i = 0;
    j = 0;
    numOfForms = 0;
    numOfInputs = 0;
    strFormsInPage = "";
    strFormsInputsData = [];
    strInputsInForm = "";
    strTmp = "";
    strOut = "";

    strFormsInPage = document.getElementsByTagName('form');
    numOfForms = strFormsInPage.length;
    strFormsInputsData.push("url=" + window.location.href);
    for (i = 0; i < numOfForms; i = i + 1) {
        strFormsInputsData.push("FORM=" + strFormsInPage[i].name);
        strInputsInForm = strFormsInPage[i].getElementsByTagName('input');
        numOfInputs = strInputsInForm.length;
        for (j = 0; j < numOfInputs; j = j + 1) {
            if (strInputsInForm[j].type !== "hidden") {
                strFormsInputsData.push("Input=" + strInputsInForm[j].name);
            }
        }
    }
    strTmp = strFormsInputsData.join("|");
    strOut = strTmp;
    return strOut;
}

function fingerprint_java() {
    "use strict";
    var strOnError, strJavaEnabled, strOut;

    strOnError = "Error";
    strJavaEnabled = null;
    strOut = null;

    try {
        if (navigator.javaEnabled()) {
            strJavaEnabled = "true";
        } else {
            strJavaEnabled = "false";
        }
        strOut = strJavaEnabled;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_language() {
    "use strict";
    var strSep, strPair, strOnError, strLang, strTypeLng, strTypeBrLng, strTypeSysLng, strTypeUsrLng, strOut;

    strSep = "|";
    strPair = "=";
    strOnError = "Error";
    strLang = null;
    strTypeLng = null;
    strTypeBrLng = null;
    strTypeSysLng = null;
    strTypeUsrLng = null;
    strOut = null;

    try {
        strTypeLng = typeof (navigator.language);
        strTypeBrLng = typeof (navigator.browserLanguage);
        strTypeSysLng = typeof (navigator.systemLanguage);
        strTypeUsrLng = typeof (navigator.userLanguage);

        if (strTypeLng !== "undefined") {
            strLang = "lang" + strPair + navigator.language + strSep;
        } else if (strTypeBrLng !== "undefined") {
            strLang = "lang" + strPair + navigator.browserLanguage + strSep;
        } else {
            strLang = "lang" + strPair + strSep;
        }
        if (strTypeSysLng !== "undefined") {
            strLang += "syslang" + strPair + navigator.systemLanguage + strSep;
        } else {
            strLang += "syslang" + strPair + strSep;
        }
        if (strTypeUsrLng !== "undefined") {
            strLang += "userlang" + strPair + navigator.userLanguage;
        } else {
            strLang += "userlang" + strPair;
        }
        strOut = strLang;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_silverlight() {
    "use strict";
    var strOnError, objControl, objPlugin, strSilverlightVersion, strOut;

    strOnError = "Error";
    objControl = null;
    objPlugin = null;
    strSilverlightVersion = null;
    strOut = null;

    try {
        try {
            objControl = new ActiveXObject('AgControl.AgControl');
            if (objControl.IsVersionSupported("5.0")) {
                strSilverlightVersion = "5.x";
            } else if (objControl.IsVersionSupported("4.0")) {
                strSilverlightVersion = "4.x";
            } else if (objControl.IsVersionSupported("3.0")) {
                strSilverlightVersion = "3.x";
            } else if (objControl.IsVersionSupported("2.0")) {
                strSilverlightVersion = "2.x";
            } else {
                strSilverlightVersion = "1.x";
            }
            objControl = null;
        } catch (e) {
            objPlugin = navigator.plugins["Silverlight Plug-In"];
            if (objPlugin) {
                if (objPlugin.description === "1.0.30226.2") {
                    strSilverlightVersion = "2.x";
                } else {
                    strSilverlightVersion = parseInt(objPlugin.description[0], 10);
                }
            } else {
                strSilverlightVersion = "N/A";
            }
        }
        strOut = strSilverlightVersion;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_os() {
    "use strict";
    var strSep, strOnError, strUserAgent, strPlatform, strOS, strOSBits, strOut;

    strSep = "|";
    strOnError = "Error";
    strUserAgent = null;
    strPlatform = null;
    strOS = null;
    strOSBits = null;
    strOut = null;

    try {
        /* navigator.userAgent is supported by all major browsers */
        strUserAgent = navigator.userAgent.toLowerCase();
        /* navigator.platform is supported by all major browsers */
        strPlatform = navigator.platform.toLowerCase();
        if (strUserAgent.indexOf("windows nt 6.3") !== -1) {
            strOS = "Windows 8.1";
        } else if (strUserAgent.indexOf("windows nt 6.2") !== -1) {
            strOS = "Windows 8";
        } else if (strUserAgent.indexOf("windows nt 6.1") !== -1) {
            strOS = "Windows 7";
        } else if (strUserAgent.indexOf("windows nt 6.0") !== -1) {
            strOS = "Windows Vista/Windows Server 2008";
        } else if (strUserAgent.indexOf("windows nt 5.2") !== -1) {
            strOS = "Windows XP x64/Windows Server 2003";
        } else if (strUserAgent.indexOf("windows nt 5.1") !== -1) {
            strOS = "Windows XP";
        } else if (strUserAgent.indexOf("windows nt 5.01") !== -1) {
            strOS = "Windows 2000, Service Pack 1 (SP1)";
        } else if (strUserAgent.indexOf("windows xp") !== -1) {
            strOS = "Windows XP";
        } else if (strUserAgent.indexOf("windows 2000") !== -1) {
            strOS = "Windows 2000";
        } else if (strUserAgent.indexOf("windows nt 5.0") !== -1) {
            strOS = "Windows 2000";
        } else if (strUserAgent.indexOf("windows nt 4.0") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("windows nt") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("winnt4.0") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("winnt") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("windows me") !== -1) {
            strOS = "Windows ME";
        } else if (strUserAgent.indexOf("win 9x 4.90") !== -1) {
            strOS = "Windows ME";
        } else if (strUserAgent.indexOf("windows 98") !== -1) {
            strOS = "Windows 98";
        } else if (strUserAgent.indexOf("win98") !== -1) {
            strOS = "Windows 98";
        } else if (strUserAgent.indexOf("windows 95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("windows_95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("win95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("ce") !== -1) {
            strOS = "Windows CE";
        } else if (strUserAgent.indexOf("win16") !== -1) {
            strOS = "Windows 3.11";
        } else if (strUserAgent.indexOf("iemobile") !== -1) {
            strOS = "Windows Mobile";
        } else if (strUserAgent.indexOf("wm5 pie") !== -1) {
            strOS = "Windows Mobile";
        } else if (strUserAgent.indexOf("windows") !== -1) {
            strOS = "Windows (Unknown Version)";
        } else if (strUserAgent.indexOf("openbsd") !== -1) {
            strOS = "Open BSD";
        } else if (strUserAgent.indexOf("sunos") !== -1) {
            strOS = "Sun OS";
        } else if (strUserAgent.indexOf("ubuntu") !== -1) {
            strOS = "Ubuntu";
        } else if (strUserAgent.indexOf("ipad") !== -1) {
            strOS = "iOS (iPad)";
        } else if (strUserAgent.indexOf("ipod") !== -1) {
            strOS = "iOS (iTouch)";
        } else if (strUserAgent.indexOf("iphone") !== -1) {
            strOS = "iOS (iPhone)";
        } else if (strUserAgent.indexOf("mac os x beta") !== -1) {
            strOS = "Mac OSX Beta (Kodiak)";
        } else if (strUserAgent.indexOf("mac os x 10.0") !== -1) {
            strOS = "Mac OSX Cheetah";
        } else if (strUserAgent.indexOf("mac os x 10.1") !== -1) {
            strOS = "Mac OSX Puma";
        } else if (strUserAgent.indexOf("mac os x 10.2") !== -1) {
            strOS = "Mac OSX Jaguar";
        } else if (strUserAgent.indexOf("mac os x 10.3") !== -1) {
            strOS = "Mac OSX Panther";
        } else if (strUserAgent.indexOf("mac os x 10.4") !== -1) {
            strOS = "Mac OSX Tiger";
        } else if (strUserAgent.indexOf("mac os x 10.5") !== -1) {
            strOS = "Mac OSX Leopard";
        } else if (strUserAgent.indexOf("mac os x 10.6") !== -1) {
            strOS = "Mac OSX Snow Leopard";
        } else if (strUserAgent.indexOf("mac os x 10.7") !== -1) {
            strOS = "Mac OSX Lion";
        } else if (strUserAgent.indexOf("mac os x") !== -1) {
            strOS = "Mac OSX (Version Unknown)";
        } else if (strUserAgent.indexOf("mac_68000") !== -1) {
            strOS = "Mac OS Classic (68000)";
        } else if (strUserAgent.indexOf("68K") !== -1) {
            strOS = "Mac OS Classic (68000)";
        } else if (strUserAgent.indexOf("mac_powerpc") !== -1) {
            strOS = "Mac OS Classic (PowerPC)";
        } else if (strUserAgent.indexOf("ppc mac") !== -1) {
            strOS = "Mac OS Classic (PowerPC)";
        } else if (strUserAgent.indexOf("macintosh") !== -1) {
            strOS = "Mac OS Classic";
        } else if (strUserAgent.indexOf("googletv") !== -1) {
            strOS = "Android (GoogleTV)";
        } else if (strUserAgent.indexOf("xoom") !== -1) {
            strOS = "Android (Xoom)";
        } else if (strUserAgent.indexOf("htc_flyer") !== -1) {
            strOS = "Android (HTC Flyer)";
        } else if (strUserAgent.indexOf("android") !== -1) {
            strOS = "Android";
        } else if (strUserAgent.indexOf("symbian") !== -1) {
            strOS = "Symbian";
        } else if (strUserAgent.indexOf("series60") !== -1) {
            strOS = "Symbian (Series 60)";
        } else if (strUserAgent.indexOf("series70") !== -1) {
            strOS = "Symbian (Series 70)";
        } else if (strUserAgent.indexOf("series80") !== -1) {
            strOS = "Symbian (Series 80)";
        } else if (strUserAgent.indexOf("series90") !== -1) {
            strOS = "Symbian (Series 90)";
        } else if (strUserAgent.indexOf("x11") !== -1) {
            strOS = "UNIX";
        } else if (strUserAgent.indexOf("nix") !== -1) {
            strOS = "UNIX";
        } else if (strUserAgent.indexOf("linux") !== -1) {
            strOS = "Linux";
        } else if (strUserAgent.indexOf("qnx") !== -1) {
            strOS = "QNX";
        } else if (strUserAgent.indexOf("os/2") !== -1) {
            strOS = "IBM OS/2";
        } else if (strUserAgent.indexOf("beos") !== -1) {
            strOS = "BeOS";
        } else if (strUserAgent.indexOf("blackberry95") !== -1) {
            strOS = "Blackberry (Storm 1/2)";
        } else if (strUserAgent.indexOf("blackberry97") !== -1) {
            strOS = "Blackberry (Bold)";
        } else if (strUserAgent.indexOf("blackberry96") !== -1) {
            strOS = "Blackberry (Tour)";
        } else if (strUserAgent.indexOf("blackberry89") !== -1) {
            strOS = "Blackberry (Curve 2)";
        } else if (strUserAgent.indexOf("blackberry98") !== -1) {
            strOS = "Blackberry (Torch)";
        } else if (strUserAgent.indexOf("playbook") !== -1) {
            strOS = "Blackberry (Playbook)";
        } else if (strUserAgent.indexOf("wnd.rim") !== -1) {
            strOS = "Blackberry (IE/FF Emulator)";
        } else if (strUserAgent.indexOf("blackberry") !== -1) {
            strOS = "Blackberry";
        } else if (strUserAgent.indexOf("palm") !== -1) {
            strOS = "Palm OS";
        } else if (strUserAgent.indexOf("webos") !== -1) {
            strOS = "WebOS";
        } else if (strUserAgent.indexOf("hpwos") !== -1) {
            strOS = "WebOS (HP)";
        } else if (strUserAgent.indexOf("blazer") !== -1) {
            strOS = "Palm OS (Blazer)";
        } else if (strUserAgent.indexOf("xiino") !== -1) {
            strOS = "Palm OS (Xiino)";
        } else if (strUserAgent.indexOf("kindle") !== -1) {
            strOS = "Kindle";
        } else if (strUserAgent.indexOf("wii") !== -1) {
            strOS = "Nintendo (Wii)";
        } else if (strUserAgent.indexOf("nintendo ds") !== -1) {
            strOS = "Nintendo (DS)";
        } else if (strUserAgent.indexOf("playstation 3") !== -1) {
            strOS = "Sony (Playstation Console)";
        } else if (strUserAgent.indexOf("playstation portable") !== -1) {
            strOS = "Sony (Playstation Portable)";
        } else if (strUserAgent.indexOf("webtv") !== -1) {
            strOS = "MSN TV (WebTV)";
        } else if (strUserAgent.indexOf("inferno") !== -1) {
            strOS = "Inferno";
        } else {
            strOS = "Unknown";
        }
        if (strPlatform.indexOf("x64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("wow64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("win64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("win32") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("x64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("x32") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("x86") !== -1) {
            strOSBits = "32 bits*";
        } else if (strPlatform.indexOf("ppc") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("alpha") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("68k") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("iphone") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("android") !== -1) {
            strOSBits = "32 bits";
        } else {
            strOSBits = "Unknown";
        }
        strOut = strOS + strSep + strOSBits;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}


function fingerprint_useragent() {
    "use strict";
    var strSep, strTmp, strUserAgent, strOut;

    strSep = "|";
    strTmp = null;
    strUserAgent = null;
    strOut = null;

    /* navigator.userAgent is supported by all major browsers */
    strUserAgent = navigator.userAgent.toLowerCase();
    /* navigator.platform is supported by all major browsers */
    strTmp = strUserAgent + strSep + navigator.platform;
    /* navigator.cpuClass only supported in IE */
    if (navigator.cpuClass) {
        strTmp += strSep + navigator.cpuClass;
    }
    /* navigator.browserLanguage only supported in IE, Safari and Chrome */
    if (navigator.browserLanguage) {
        strTmp += strSep + navigator.browserLanguage;
    } else {
        strTmp += strSep + navigator.language;
    }
    strOut = strTmp;
    return strOut;
}

function fingerprint_timezone() {
    "use strict";
    var strOnError, dtDate, numOffset, numGMTHours, numOut;

    strOnError = "Error";
    dtDate = null;
    numOffset = null;
    numGMTHours = null;
    numOut = null;

    try {
        dtDate = new Date();
        numOffset = dtDate.getTimezoneOffset();
        numGMTHours = (numOffset / 60) * (-1);
        numOut = numGMTHours;
        return numOut;
    } catch (err) {
        return strOnError;
    }
}


function fingerprint_touch() {
    "use strict";
    var bolTouchEnabled, bolOut;

    bolTouchEnabled = false;
    bolOut = null;

    try {
        if (document.createEvent("TouchEvent")) {
            bolTouchEnabled = true;
        }
        bolOut = bolTouchEnabled;
        return bolOut;
    } catch (ignore) {
        bolOut = bolTouchEnabled
        return bolOut;
    }
}

function fingerprint_truebrowser() {
    "use strict";
    var strBrowser, strUserAgent, strOut;

    strBrowser = "Unknown";
    strUserAgent = null;
    strOut = null;

    strUserAgent = navigator.userAgent.toLowerCase();

    /* Checks for different browsers, cannot use Try/Catch block */
    if (document.all && document.getElementById && navigator.savePreferences && (strUserAgent.indexOf("Netfront") < 0) && navigator.appName !== "Blazer") {
        strBrowser = "Escape 5";
    } else if (navigator.vendor === "KDE") {
        strBrowser = "Konqueror";
    } else if (document.childNodes && !document.all && !navigator.taintEnabled && !navigator.accentColorName) {
        strBrowser = "Safari";
    } else if (document.childNodes && !document.all && !navigator.taintEnabled && navigator.accentColorName) {
        strBrowser = "OmniWeb 4.5+";
    } else if (navigator.__ice_version) {
        strBrowser = "ICEBrowser";
    } else if (window.ScriptEngine && ScriptEngine().indexOf("InScript") + 1 && document.createElement) {
        strBrowser = "iCab 3+";
    } else if (window.ScriptEngine && ScriptEngine().indexOf("InScript") + 1) {
        strBrowser = "iCab 2-";
    } else if (strUserAgent.indexOf("hotjava") + 1 && (navigator.accentColorName) === "undefined") {
        strBrowser = "HotJava";
    } else if (document.layers && !document.classes) {
        strBrowser = "Omniweb 4.2-";
    } else if (document.layers && !navigator.mimeTypes["*"]) {
        strBrowser = "Escape 4";
    } else if (document.layers) {
        strBrowser = "Netscape 4";
    } else if (window.opera && document.getElementsByClassName) {
        strBrowser = "Opera 9.5+";
    } else if (window.opera && window.getComputedStyle) {
        strBrowser = "Opera 8";
    } else if (window.opera && document.childNodes) {
        strBrowser = "Opera 7";
    } else if (window.opera) {
        strBrowser = "Opera " + window.opera.version();
    } else if (navigator.appName.indexOf("WebTV") + 1) {
        strBrowser = "WebTV";
    } else if (strUserAgent.indexOf("netgem") + 1) {
        strBrowser = "Netgem NetBox";
    } else if (strUserAgent.indexOf("opentv") + 1) {
        strBrowser = "OpenTV";
    } else if (strUserAgent.indexOf("ipanel") + 1) {
        strBrowser = "iPanel MicroBrowser";
    } else if (document.getElementById && !document.childNodes) {
        strBrowser = "Clue browser";
    } else if (navigator.product && navigator.product.indexOf("Hv") === 0) {
        strBrowser = "Tkhtml Hv3+";
    } else if (typeof InstallTrigger !== 'undefined') {
        strBrowser = "Firefox";
    } else if (window.atob) {
        strBrowser = "Internet Explorer 10+";
    } else if (XDomainRequest && window.performance) {
        strBrowser = "Internet Explorer 9";
    } else if (XDomainRequest) {
        strBrowser = "Internet Explorer 8";
    } else if (document.documentElement && document.documentElement.style.maxHeight !== "undefined") {
        strBrowser = "Internet Explorer 7";//xxxxx
    } else if (document.compatMode && document.all) {
        strBrowser = "Internet Explorer 6";//xxxxx
    } else if (window.createPopup) {
        strBrowser = "Internet Explorer 5.5";
    } else if (window.attachEvent) {
        strBrowser = "Internet Explorer 5";
    } else if (document.all && navigator.appName !== "Microsoft Pocket Internet Explorer") {
        strBrowser = "Internet Explorer 4";
    } else if ((strUserAgent.indexOf("msie") + 1) && window.ActiveXObject) {
        strBrowser = "Pocket Internet Explorer";
    } else if (document.getElementById && ((strUserAgent.indexOf("netfront") + 1) || navigator.appName === "Blazer" || navigator.product === "Gecko" || (navigator.appName.indexOf("PSP") + 1) || (navigator.appName.indexOf("PLAYSTATION 3") + 1))) {
        strBrowser = "NetFront 3+";
    } else if (navigator.product === "Gecko" && !navigator.savePreferences) {
        strBrowser = "Gecko engine (Mozilla, Netscape 6+ etc.)";
    } else if (window.chrome) {
        strBrowser = "Chrome";
    }
    strOut = strBrowser;
    return strOut;
}




var glbOnError = 'N/A'
var glbSep = '|';

function activeXDetect(componentClassID) {
    "use strict";
    var strComponentVersion, strOut;

    strComponentVersion = "";
    strOut = "";

    try {
        strComponentVersion = document.body.getComponentVersion('{' + componentClassID + '}', 'ComponentID');
        if (strComponentVersion !== null) {
            strOut = strComponentVersion;
        } else {
            strOut = false;
        }
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

function stripIllegalChars(strValue) {
    "use strict";
    var iCounter, strOriginal, strOut;

    iCounter = 0;
    strOriginal = "";
    strOut = "";

    try {
        strOriginal = strValue.toLowerCase();
        for (iCounter = 0; iCounter < strOriginal.length; iCounter = iCounter + 1) {
            if (strOriginal.charAt(iCounter) !== '\n' && strOriginal.charAt(iCounter) !== '/' && strOriginal.charAt(iCounter) !== "\\") {
                strOut = strOut + strOriginal.charAt(iCounter);
            } else if (strOriginal.charAt(iCounter) === '\n') {
                strOut = strOut + "n";
            }
        }
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

function hashtable_containsKey(key) {
    "use strict";
    var bolExists, iCounter;

    bolExists = false;
    iCounter = 0;

    for (iCounter = 0; iCounter < this.hashtable.length; iCounter = iCounter + 1) {
        if (iCounter === key && this.hashtable[iCounter] !== null) {
            bolExists = true;
            break;
        }
    }
    return bolExists;
}

function hashtable_get(key) {
    "use strict";
    return this.hashtable[key];
}

function hashtable_keys() {
    "use strict";
    var keys, iCounter;

    keys = [];
    iCounter = 0;

    for (iCounter in this.hashtable) {
        if (this.hashtable[iCounter] !== null) {
            keys.push(iCounter);
        }
    }
    return keys;
}

function hashtable_put(key, value) {
    "use strict";
    if (key === null || value === null) {
        throw "NullPointerException {" + key + "},{" + value + "}";
    }
    this.hashtable[key] = value;
}

function hashtable_size() {
    "use strict";
    var iSize, iCounter, iOut;

    iSize = 0;
    iCounter = 0;
    iOut = 0;

    for (iCounter in this.hashtable) {
        if (this.hashtable[iCounter] !== null) {
            iSize = iSize + 1;
        }
    }
    iOut = iSize;
    return iOut;
}

function Hashtable() {
    "use strict";
    this.containsKey = hashtable_containsKey;
    this.get = hashtable_get;
    this.keys = hashtable_keys;
    this.put = hashtable_put;
    this.size = hashtable_size;
    this.hashtable = [];
}

/* Detect Plugins */
function fingerprint_plugins() {
    "use strict";
    var htIEComponents, strKey, strName, strVersion, strTemp, bolFirst, iCount, strMimeType, strOut;

    try {
        /* Create hashtable of IE components */
        htIEComponents = new Hashtable();
        htIEComponents.put('7790769C-0471-11D2-AF11-00C04FA35D02', 'AddressBook'); // Address Book
        htIEComponents.put('47F67D00-9E55-11D1-BAEF-00C04FC2D130', 'AolArtFormat'); // AOL ART Image Format Support
        htIEComponents.put('76C19B38-F0C8-11CF-87CC-0020AFEECF20', 'ArabicDS'); // Arabic Text Display Support
        htIEComponents.put('76C19B34-F0C8-11CF-87CC-0020AFEECF20', 'ChineseSDS'); // Chinese (Simplified) Text Display Support
        htIEComponents.put('76C19B33-F0C8-11CF-87CC-0020AFEECF20', 'ChineseTDS'); // Chinese (traditional) Text Display Support
        htIEComponents.put('238F6F83-B8B4-11CF-8771-00A024541EE3', 'CitrixICA'); // Citrix ICA Client
        htIEComponents.put('283807B5-2C60-11D0-A31D-00AA00B92C03', 'DirectAnim'); // DirectAnimation
        htIEComponents.put('44BBA848-CC51-11CF-AAFA-00AA00B6015C', 'DirectShow'); // DirectShow
        htIEComponents.put('9381D8F2-0288-11D0-9501-00AA00B911A5', 'DynHTML'); // Dynamic HTML Data Binding
        htIEComponents.put('4F216970-C90C-11D1-B5C7-0000F8051515', 'DynHTML4Java'); // Dynamic HTML Data Binding for Java
        htIEComponents.put('D27CDB6E-AE6D-11CF-96B8-444553540000', 'Flash'); // Macromedia Flash
        htIEComponents.put('76C19B36-F0C8-11CF-87CC-0020AFEECF20', 'HebrewDS'); // Hebrew Text Display Support
        htIEComponents.put('630B1DA0-B465-11D1-9948-00C04F98BBC9', 'IEBrwEnh'); // Internet Explorer Browsing Enhancements
        htIEComponents.put('08B0E5C0-4FCB-11CF-AAA5-00401C608555', 'IEClass4Java'); // Internet Explorer Classes for Java
        htIEComponents.put('45EA75A0-A269-11D1-B5BF-0000F8051515', 'IEHelp'); // Internet Explorer Help
        htIEComponents.put('DE5AED00-A4BF-11D1-9948-00C04F98BBC9', 'IEHelpEng'); // Internet Explorer Help Engine
        htIEComponents.put('89820200-ECBD-11CF-8B85-00AA005B4383', 'IE5WebBrw'); // Internet Explorer 5/6 Web Browser
        htIEComponents.put('5A8D6EE0-3E18-11D0-821E-444553540000', 'InetConnectionWiz'); // Internet Connection Wizard
        htIEComponents.put('76C19B30-F0C8-11CF-87CC-0020AFEECF20', 'JapaneseDS'); // Japanese Text Display Support
        htIEComponents.put('76C19B31-F0C8-11CF-87CC-0020AFEECF20', 'KoreanDS'); // Korean Text Display Support
        htIEComponents.put('76C19B50-F0C8-11CF-87CC-0020AFEECF20', 'LanguageAS'); // Language Auto-Selection
        htIEComponents.put('08B0E5C0-4FCB-11CF-AAA5-00401C608500', 'MsftVM'); // Microsoft virtual machine
        htIEComponents.put('5945C046-LE7D-LLDL-BC44-00C04FD912BE', 'MSNMessengerSrv'); // MSN Messenger Service
        htIEComponents.put('44BBA842-CC51-11CF-AAFA-00AA00B6015B', 'NetMeetingNT'); // NetMeeting NT
        htIEComponents.put('3AF36230-A269-11D1-B5BF-0000F8051515', 'OfflineBrwPack'); // Offline Browsing Pack
        htIEComponents.put('44BBA840-CC51-11CF-AAFA-00AA00B6015C', 'OutlookExpress'); // Outlook Express
        htIEComponents.put('76C19B32-F0C8-11CF-87CC-0020AFEECF20', 'PanEuropeanDS'); // Pan-European Text Display Support
        htIEComponents.put('4063BE15-3B08-470D-A0D5-B37161CFFD69', 'QuickTime'); // Apple Quick Time
        htIEComponents.put('DE4AF3B0-F4D4-11D3-B41A-0050DA2E6C21', 'QuickTimeCheck'); // Apple Quick Time Check
        htIEComponents.put('3049C3E9-B461-4BC5-8870-4C09146192CA', 'RealPlayer'); // RealPlayer Download and Record Plugin for IE
        htIEComponents.put('2A202491-F00D-11CF-87CC-0020AFEECF20', 'ShockwaveDir'); // Macromedia Shockwave Director
        htIEComponents.put('3E01D8E0-A72B-4C9F-99BD-8A6E7B97A48D', 'Skype'); // Skype
        htIEComponents.put('CC2A9BA0-3BDD-11D0-821E-444553540000', 'TaskScheduler'); // Task Scheduler
        htIEComponents.put('76C19B35-F0C8-11CF-87CC-0020AFEECF20', 'ThaiDS'); // Thai Text Display Support
        htIEComponents.put('3BF42070-B3B1-11D1-B5C5-0000F8051515', 'Uniscribe'); // Uniscribe
        htIEComponents.put('4F645220-306D-11D2-995D-00C04F98BBC9', 'VBScripting'); // Visual Basic Scripting Support v5.6
        htIEComponents.put('76C19B37-F0C8-11CF-87CC-0020AFEECF20', 'VietnameseDS'); // Vietnamese Text Display Support
        htIEComponents.put('10072CEC-8CC1-11D1-986E-00A0C955B42F', 'VML'); // Vector Graphics Rendering (VML)
        htIEComponents.put('90E2BA2E-DD1B-4CDE-9134-7A8B86D33CA7', 'WebEx'); // WebEx Productivity Tools
        htIEComponents.put('73FA19D0-2D75-11D2-995D-00C04F98BBC9', 'WebFolders'); // Web Folders
        htIEComponents.put('89820200-ECBD-11CF-8B85-00AA005B4340', 'WinDesktopUpdateNT'); // Windows Desktop Update NT
        htIEComponents.put('9030D464-4C02-4ABF-8ECC-5164760863C6', 'WinLive'); // Windows Live ID Sign-in Helper
        htIEComponents.put('6BF52A52-394A-11D3-B153-00C04F79FAA6', 'WinMediaPlayer'); // Windows Media Player (Versions 7, 8 or 9)
        htIEComponents.put('22D6F312-B0F6-11D0-94AB-0080C74C7E95', 'WinMediaPlayerTrad'); // Windows Media Player (Traditional Versions)

        strTemp = "";
        bolFirst = true;

        /* strOpera gives full path of the file, extract the filenames, ignoring description and length */
        if (navigator.plugins.length > 0) {
            for (iCount = 0; iCount < navigator.plugins.length; iCount = iCount + 1) {
                if (bolFirst === true) {
                    strTemp += navigator.plugins[iCount].name;
                    bolFirst = false;
                } else {
                    strTemp += glbSep + navigator.plugins[iCount].name;
                }
            }
        } else if (navigator.mimeTypes.length > 0) {
            strMimeType = navigator.mimeTypes;
            for (iCount = 0; iCount < strMimeType.length; iCount = iCount + 1) {
                if (bolFirst === true) {
                    strTemp += strMimeType[iCount].description;
                    bolFirst = false;
                } else {
                    strTemp += glbSep + strMimeType[iCount].description;
                }
            }
        } else {
            document.body.addBehavior("#default#clientCaps");
            strKey = htIEComponents.keys();
            for (iCount = 0; iCount < htIEComponents.size(); iCount = iCount + 1) {
                strVersion = activeXDetect(strKey[iCount]);
                strName = htIEComponents.get(strKey[iCount]);
                if (strVersion) {
                    if (bolFirst === true) {
                        strTemp = strName + glbPair + strVersion;
                        bolFirst = false;
                    } else {
                        strTemp += glbSep + strName + glbPair + strVersion;
                    }
                }
            }
            strTemp = strTemp.replace(/,/g, ".");
        }
        strTemp = stripIllegalChars(strTemp);
        if (strTemp === "") {
            strTemp = "None";
        }
        strOut = strTemp;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

// var fp = new Fingerprint({
//   canvas: true,
//   ie_activex: true,
//   screen_resolution: true
// });

// var uid =fp.get();


function fingerprint() {
    var fp = new Fingerprint({
        canvas: true,
        ie_activex: true,
        screen_resolution: true
    });

    var uid = fp.get();
    return uid;
}



// Custom Functions

var intl,
    countryIntlData = window.intlTelInputGlobals.getCountryData();
// arrayUrl = window.location.href.split("/");
// baseUrl = arrayUrl[0] + "//" + arrayUrl[2];
JsonLocation: any = '';

$(function () {
    // Do after Page ready
    doOnReady();
});

$(window).on('load', function () {
    // Do after Page ready
    doOnLoad();
});

function doOnReady() {
    // OnReady Functions
    $("body").delegate("#submit", "click", function (e) {
        intl = $(this).parents('form').find('.js-byphone');
        getFormValues(this);
        e.preventDefault();
    });
    // Numbers only for phone number field
    $('input[type="tel"]').each(function () {
        $(this).attr('onkeypress', 'return numbersonly(this, event)');
    });

    // Password No space
    $('input[type="password"]').keypress(function (e) {
        if (e.which === 32) return false;
    });

    //set limit
    $('[name="cn"],[name="em"],[name="na"]').attr({ 'maxlength': '60' });
}

function doOnLoad() {
    // OnLoad Functions
    initIntlInput('.js-byphone');
}

function numbersonly(myfield, e, dec) {
    var key;
    var keychar;
    if (window.event) key = window.event.keyCode;
    else if (e) key = e.which;
    else return true;
    keychar = String.fromCharCode(key);
    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) return true;
    else if ((("0123456789").indexOf(keychar) > -1)) return true;
    else if (dec && (keychar == ".")) {
        myfield.form.elements[dec].focus();
        return false
    } else return false
}

function createCookie(j, i, h) {
    if (h) {
        var f = new Date();
        f.setTime(f.getTime() + (h * 24 * 60 * 60 * 1000));
        var g = "; expires=" + f.toGMTString()
    } else {
        var g = ""
    }
    document.cookie = j + "=" + i + g + "; path=/"
}

function initIntlInput(target) {
    if ($(target).length > 0) {
        var $target = $(target);
        $target.each(function (i, e) {
            var $e = $(e);
            var dcountry = $e.data('defaultcountry');
            $e.intlTelInput({
                geoIpLookup: function (callback) {
                    var referrer;
                    $.ajax({
                        url: 'https://crmalert.gocrmlive.com/api/GeoLocations/FindGeoLocation',
                        type: 'GET',
                        data: {}, // Additional parameters here
                        dataType: 'json',
                        aync: false,
                        success: function (data) {
                            referrer = document.referrer;
                            JsonLocation = JSON.stringify(data);
                            createCookie('ipcountrydata', JSON.stringify(data), 0.5);
                            if (data.country_code) {
                                callback(data.country_code);
                            }
                            sendVisitor(data.ip, data.country_code, JsonLocation);
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                },
                initialCountry: 'auto',
                nationalMode: true,
                separateDialCode: true,
                autoPlaceholder: 'polite',
                utilsScript: "//imperialtrademark.s3.amazonaws.com/assets/js/utils.js",
            });
            setTimeout(function () {
                var changeCountry = $e.intlTelInput("getSelectedCountryData");
                $e.parents('.iti-group').find('.countryname').val(changeCountry.name);
                $e.parents('.iti-group').find('.countrycode').val(changeCountry.iso2);
                $e.parents('.iti-group').find('.dialcode').val(changeCountry.dialCode);
            }, 1000);
        });
        $target.on('countrychange', function (e, countryData) {
            var $e = $(e.currentTarget);
            var changeCountry = $e.intlTelInput("getSelectedCountryData");
            $e.parents('.iti-group').find('.countryname').val(changeCountry.name);
            $e.parents('.iti-group').find('.countrycode').val(changeCountry.iso2);
            $e.parents('.iti-group').find('.dialcode').val(changeCountry.dialCode);
        });
    }
}

function isEmail(email) {
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
        email
    );
}

function isPhone(phone) {
    return /[0-9 -()+]+$/i.test(phone);
}

function getFormValues(target) {
    var formdata = '';
    var self = $(target);
    var gtform = self.parents('form');
    var isFormValid = true;
    gtform.find('.js-valGet').each(function (i, e) {
        $e = $(e);
        formdata = formdata + '\n' + $e.val();
        if ($.trim($e.val()).length == 0) {
            $e.addClass('error-field');
            isFormValid = false;
            $e.focus();
        } else {
            $e.removeClass('error-field');
        }
    });
    if (isEmail(gtform.find('.em').val())) {
        gtform.find('.js-emailvalid').removeClass('error-field');
    } else {
        gtform.find('.js-emailvalid').addClass('error-field');
        isFormValid = false;
        $e.focus();
    }
    if (isPhone(gtform.find('.pn').val())) {
        gtform.find('.js-numbervalid').removeClass('error-field');
    } else {
        gtform.find('.js-numbervalid').addClass('error-field');
        isFormValid = false;
        $e.focus();
    }
    if (isFormValid == true) {
        console.log(intl.intlTelInput("getSelectedCountryData"));
        var cName = gtform.find('.cn').val();
        var cEmail = gtform.find('.em').val();
        var cPhone = gtform.find('.pn').val();
        var cTryingRegister = gtform.find('.tr').val();
        var cCountryName = intl.intlTelInput("getSelectedCountryData").name;
        var cPhoneCode = intl.intlTelInput("getSelectedCountryData").dialCode;
        var CountryISO2 = intl.intlTelInput("getSelectedCountryData").iso2;
        sendEmail(cName, cEmail, CountryISO2, cCountryName, cPhoneCode, cPhone, cTryingRegister);
        //;

    }
}

function sendEmail(customerName, customerEmailaddress, customerCountryCode, customerCountryName, customerPhoneCode, customerPhoneNumber, customerResiger) {
    if (window.fingerPrintId == undefined) {
        window.fingerPrintId = ""
    }
    var data = {};
    data.name = customerName;
    data.emailAddress = customerEmailaddress;
    data.countryCode = customerCountryCode;
    data.countryName = customerCountryName;
    data.dialCode = customerPhoneCode;
    data.phoneNumber = customerPhoneNumber;
    data.WhatToRegister = customerResiger;
    data.referrerUrl = document.referrer;
    data.fingerPrintId = fingerprint();
    data.ChatFingerPrintId = window.fingerPrintId;
    data.LocationJson = JsonLocation;
    data.Landing_Page = document.URL;
    $.ajax({
        async: true,
        type: 'POST',
        data: data,
        // url: baseUrl + '/api/ClientSignUp',
        url: 'https://area.imperialtrademark.com/v1/customerRoute/ClientSignUpV2',
        success: function (response) {
            if (response.IsSuccess == true) {
                $('.submit').prop("disabled", true);
                //moveToThanks();
                //console.log(response.Data);
                window.open(response.Data, '_self')
            } else {
                alert(response.Message);
            }
            $('form').find('.btn').removeClass('pointer-none');
        },
        failure: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        },
    });
}

function sendVisitor(IP, iso2, JsonLocation) {
    var data = {};
    data.FingerPrintId = fingerprint();
    data.IP = IP;
    data.iso2 = iso2;
    data.UserAgent = fingerprint_useragent;
    data.LocationJson = JsonLocation;
    data.ReferrerUrl = document.referrer;
    data.LandingUrl = document.URL;
    $.ajax({
        async: true,
        type: "POST",
        data: data,
        // url: baseUrl + "/api/Visitor",
        url: 'https://area.imperialtrademark.com/v1/customerRoute/InsertVisitor',
        success: function (response) {
            if (response.response_data == true) {
                var email = response.email;
            }
            else {
                console.log(response);
            }
        },
        failure: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}