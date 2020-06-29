"use strict";

// luplino.ui.toast
(function () {

    var UI = luplino.ui;
    var U = luplino.util;
    var TOAST;

    UI.addClass({
        className: "toast"
    }, function () {
        /**
         * @class lotoast
         * @classdesc
         * @author jowrney@jowrney.com
         * @example
         * ```
         * ```js
         * var toast = new luplino.ui.toast();
         * toast.setConfig({
         *     icon: '<i class="fa fa-bug"></i>',
         *     containerPosition: "bottom-right",
         *     closeIcon: '<i class="fa fa-times"></i>'
         * });
         *
         * toast.onStateChanged = function(){
         *     console.log(this);
         * };
         *
         * toast.push({
         *     icon: '<i class="fa fa-book"></i>',
         *     msg:"999999"
         * });
         *
         * toast.push({
         *     theme: theme,
         *     msg: 'toast message'
         * });
         * ```
         */
        var lotoast = function lotoast() {
            var self = this,
                cfg,
                toastSeq = 0,
                toastSeqClear = null;

            this.instanceId = luplino.getGuid();
            this.config = {
                clickEventName: "click", //(('ontouchstart' in document.documentElement) ? "touchstart" : "click"),
                theme: 'default',
                width: 300,
                icon: '',
                closeIcon: '',
                msg: '',
                lang: {
                    "ok": "ok", "cancel": "cancel"
                },
                displayTime: 3000,
                animateTime: 250,
                containerPosition: "bottom-left"
            };
            this.toastContainer = null;
            this.queue = [];

            cfg = this.config;

            var onStateChanged = function onStateChanged(opts, that) {
                    if (opts && opts.onStateChanged) {
                        opts.onStateChanged.call(that, that);
                    } else if (this.onStateChanged) {
                        this.onStateChanged.call(that, that);
                    }

                    opts = null;
                    that = null;
                    return true;
                },

                /**
                 * @method lotoast.getContent
                 * @param {String} toastId
                 * @param {Object} opts
                 * @returns toastDisplay
                 * @example
                 * ```js
                 * lotoast.getContent('lo-toast-3-1', opts);
                 * ```
                 */
                getContent = function getContent(toastId, opts) {

                    var data = {
                        toastId: toastId,
                        theme: opts.theme,
                        icon: opts.icon,
                        msg: (opts.msg || "").replace(/\n/g, "<br/>"),
                        btns: opts.btns,
                        closeIcon: opts.closeIcon
                    };

                    try {
                        return TOAST.tmpl.get.call(this, "toastDisplay", data);
                    } finally {
                        toastId = null;
                        data = null;
                    }
                },

                /**
                 * @method lotoast.open
                 * @param opts
                 * @param callBack
                 * @returns {lotoast}
                 */
                open = function open(opts, callBack) {
                    if (toastSeqClear) clearTimeout(toastSeqClear);

                    var toastBox,
                        box = {
                            width: opts.width
                        };

                    opts.id = 'lo-toast-' + self.containerId + '-' + ++toastSeq;
                    if (jQuery('#' + opts.id).get(0)) return this;

                    if (U.left(cfg.containerPosition, '-') == 'bottom') {
                        this.toastContainer.append(getContent(opts.id, opts));
                    } else {
                        this.toastContainer.prepend(getContent(opts.id, opts));
                    }

                    toastBox = jQuery('#' + opts.id);
                    toastBox.css({ width: box.width });
                    opts.toastBox = toastBox;
                    this.queue.push(opts);

                    onStateChanged.call(this, opts, {
                        self: this,
                        state: "open",
                        toastId: opts.id
                    });

                    if (opts.toastType === "push") {
                        // 자동 제거 타이머 시작
                        setTimeout(function () {
                            this.close(opts, callBack);
                        }.bind(this), cfg.displayTime);

                        toastBox.find("[data-lo-toast-btn]").on(cfg.clickEventName, function (e) {
                            btnOnClick.call(this, e || window.event, opts, toastBox, callBack);
                        }.bind(this));
                    } else if (opts.toastType === "confirm") {
                        toastBox.find("[data-lo-toast-btn]").on(cfg.clickEventName, function (e) {
                            btnOnClick.call(this, e || window.event, opts, toastBox, callBack);
                        }.bind(this));
                    }

                    box = null;
                },
                btnOnClick = function btnOnClick(e, opts, toastBox, callBack, target, k) {
                    target = U.findParentNode(e.target, function (target) {
                        if (target.getAttribute("data-lo-toast-btn")) {
                            return true;
                        }
                    });

                    if (target) {
                        k = target.getAttribute("data-lo-toast-btn");

                        var that = {
                            key: k, value: opts.btns ? opts.btns[k] : k,
                            toastId: opts.id,
                            btn_target: target
                        };

                        if (opts.btns && opts.btns[k].onClick) {
                            opts.btns[k].onClick.call(that, k);
                        } else if (opts.toastType === "push") {
                            if (callBack) callBack.call(that, k);
                            this.close(opts, callBack);
                        } else if (opts.toastType === "confirm") {
                            if (callBack) callBack.call(that, k);
                            this.close(opts, callBack);
                        }
                    }

                    e = null;
                    opts = null;
                    toastBox = null;
                    callBack = null;
                    target = null;
                    k = null;
                };

            /**
             * Preferences of toast UI
             * @method lotoast.set_config
             * @param {Object} config - 클래스 속성값
             * @returns {lotoast}
             * @example
             * ```
             * ```
             */
            //== class body start
            this.init = function () {
                this.onStateChanged = cfg.onStateChanged;
                // after set_config();
                self.containerId = luplino.getGuid();
                var styles = [];
                if (cfg.zIndex) {
                    styles.push("z-index:" + cfg.zIndex);
                }
                jQuery(document.body).append('<div class="lo-ui-toast-container ' + cfg.containerPosition + '" data-toast-container="' + '' + self.containerId + '" style="' + styles.join(";") + '"></div>');
                this.toastContainer = jQuery('[data-toast-container="' + self.containerId + '"]');
            };

            /**
             * @method lotoast.push
             * @param opts
             * @param callBack
             * @returns {lotoast}
             */
            this.push = function (opts, callBack) {
                if (!self.containerId) {
                    this.init();
                }
                if (U.isString(opts)) {
                    opts = {
                        title: cfg.title,
                        msg: opts
                    };
                }
                opts.toastType = "push";

                self.dialogConfig = {};
                jQuery.extend(true, self.dialogConfig, cfg, opts);
                opts = self.dialogConfig;

                open.call(this, opts, callBack);

                opts = null;
                callBack = null;
                return this;
            };

            /**
             * @method lotoast.confirm
             * @param opts
             * @param callBack
             * @returns {lotoast}
             */
            this.confirm = function (opts, callBack) {
                if (!self.containerId) {
                    this.init();
                }
                if (U.isString(opts)) {
                    opts = {
                        title: cfg.title,
                        msg: opts
                    };
                }
                opts.toastType = "confirm";

                self.dialogConfig = {};
                jQuery.extend(true, self.dialogConfig, cfg, opts);
                opts = self.dialogConfig;

                if (typeof opts.btns === "undefined") {
                    opts.btns = {
                        ok: { label: cfg.lang["ok"], theme: opts.theme }
                    };
                }
                open.call(this, opts, callBack);

                opts = null;
                callBack = null;
                return this;
            };

            /**
             * close the toast
             * @method lotoast.close
             * @returns {lotoast}
             * @example
             * ```
             * my_toast.close();
             * ```
             */
            this.close = function (opts, callBack) {
                if (typeof opts === "undefined") {
                    opts = U.last(this.queue);
                }

                var toastBox = opts.toastBox;
                toastBox.addClass(opts.toastType == "push" ? "removed" : "destroy");
                this.queue = U.filter(this.queue, function () {
                    return opts.id != this.id;
                });
                setTimeout(function () {
                    var that = {
                        toastId: opts.id
                    };

                    toastBox.remove();
                    if (callBack) callBack.call(that);

                    that = {
                        self: this,
                        state: "close",
                        toastId: opts.id
                    };
                    onStateChanged.call(this, opts, that);

                    // 3초후에도 아무 일이 없다면 완전히 제거
                    if (this.queue.length === 0) {
                        if (toastSeqClear) clearTimeout(toastSeqClear);
                        toastSeqClear = setTimeout(function () {
                            /// console.log("try clear seq");
                            if (this.queue.length === 0) toastSeq = 0;
                        }.bind(this), 3000);
                    }

                    that = null;
                    opts = null;
                    callBack = null;
                    toastBox = null;
                }.bind(this), cfg.animateTime);

                return this;
            };

            // 클래스 생성자
            this.main = function () {

                UI.toast_instance = UI.toast_instance || [];
                UI.toast_instance.push(this);

                if (arguments && U.isObject(arguments[0])) {
                    this.setConfig(arguments[0]);
                }
            }.apply(this, arguments);
        };
        return lotoast;
    }());
    TOAST = luplino.ui.toast;
})();
// luplino.ui.toast.tmpl
(function () {

    var TOAST = luplino.ui.toast;

    var toastDisplay = function toastDisplay(columnKeys) {
        return "\n        <div id=\"{{toastId}}\" data-lo-ui=\"toast\" class=\"lo-ui-toast {{theme}}\">\n            {{#icon}}\n            <div class=\"lo-toast-icon\">{{{.}}}</div>\n            {{/icon}}\n            <div class=\"lo-toast-body\">{{{msg}}}</div>\n            {{#btns}}\n            <div class=\"lo-toast-buttons\">\n                <div class=\"lo-button-wrap\">\n                    {{#@each}}\n                    <button type=\"button\" data-lo-toast-btn=\"{{@key}}\" class=\"btn btn-{{@value.theme}}\">{{{@value.label}}}</button>\n                    {{/@each}}\n                </div>\n            </div>\n            {{/btns}}\n            {{^btns}}\n                <a class=\"lo-toast-close\" data-lo-toast-btn=\"ok\">{{{closeIcon}}}</a>\n            {{/btns}}\n            <div style=\"clear:both;\"></div>\n        </div>";
    };

    TOAST.tmpl = {
        "toastDisplay": toastDisplay,

        get: function get(tmplName, data, columnKeys) {
            return luplino.mustache.render(TOAST.tmpl[tmplName].call(this, columnKeys), data);
        }
    };
})();