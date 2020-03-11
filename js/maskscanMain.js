(this["webpackJsonpreact-kakaomap-templates"] = this["webpackJsonpreact-kakaomap-templates"] || []).push([
    [0], {
        161: function(e, t, a) {
            e.exports = {
                App: "App_App__3jZN5"
            }
        },
        185: function(e, t, a) {
            e.exports = a(306)
        },
        282: function(e, t, a) {},
        306: function(e, t, a) {
            "use strict";
            a.r(t);
            a(255);
            var n = a(0),
                o = a.n(n),
                r = a(23),
                c = a.n(r),
                l = (a(282), a(360)),
                i = a(171),
                s = a(89),
                u = a(341),
                m = Object(i.a)({
                    palette: {
                        primary: s.a,
                        secondary: u.a
                    },
                    typography: {
                        fontFamily: ["Noto Sans KR"].join(",")
                    }
                }),
                p = a(161),
                d = a.n(p),
                f = a(19),
                b = a(81),
                g = a(342),
                h = a(42),
                E = a(343),
                v = a(345),
                O = a(174),
                j = a(363),
                k = a(12),
                y = a(164),
                w = a.n(y),
                C = Object(g.a)((function(e) {
                    return {
                        root: {
                            flexGrow: 1
                        },
                        menuButton: {
                            marginRight: e.spacing(2)
                        },
                        title: Object(h.a)({
                            flexGrow: 1,
                            display: "none"
                        }, e.breakpoints.up("sm"), {
                            display: "block"
                        }),
                        search: Object(h.a)({
                            position: "relative",
                            borderRadius: e.shape.borderRadius,
                            backgroundColor: Object(k.c)(e.palette.common.white, .15),
                            "&:hover": {
                                backgroundColor: Object(k.c)(e.palette.common.white, .25)
                            },
                            marginLeft: 0,
                            width: "100%"
                        }, e.breakpoints.up("sm"), {
                            marginLeft: e.spacing(1),
                            width: "auto"
                        }),
                        searchIcon: {
                            width: e.spacing(7),
                            height: "100%",
                            position: "absolute",
                            pointerEvents: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        inputRoot: {
                            color: "inherit",
                            width: "100%"
                        },
                        inputInput: Object(h.a)({
                            padding: e.spacing(1, 1, 1, 7),
                            transition: e.transitions.create("width"),
                            width: "100%"
                        }, e.breakpoints.up("sm"), {
                            width: 120,
                            "&:focus": {
                                width: 200
                            }
                        })
                    }
                })),
                S = function(e) {
                    var t = e.onSearch,
                        a = C(),
                        r = Object(n.useState)(""),
                        c = Object(f.a)(r, 2),
                        l = c[0],
                        i = c[1];
                    return o.a.createElement("div", {
                        className: a.root
                    }, o.a.createElement(E.a, {
                        position: "fixed"
                    }, o.a.createElement(v.a, null, o.a.createElement(O.a, {
                        className: a.title,
                        variant: "h6",
                        noWrap: !0
                    }, "마스크 NOW"), o.a.createElement("div", {
                        className: a.search
                    }, o.a.createElement("div", {
                        className: a.searchIcon
                    }, o.a.createElement(w.a, null)), o.a.createElement(j.a, {
                        placeholder: "장소 검색",
                        classes: {
                            root: a.inputRoot,
                            input: a.inputInput
                        },
                        inputProps: {
                            "aria-label": "search"
                        },
                        onChange: function(e) {
                            return i(e.target.value)
                        },
                        value: l,
                        onKeyPress: function(e) {
                            13 === e.charCode && (t(l), e.target.blur())
                        }
                    })))))
                };
            S.defaultProps = {
                onSearch: function() {}
            };
            var x = S,
                B = a(307),
                L = a(346),
                z = a(347),
                N = a(348),
                T = a(349),
                F = Object(g.a)((function(e) {
                    return {
                        rightTopToolbar: Object(h.a)({
                            position: "fixed",
                            zIndex: 1e3,
                            right: e.spacing(1),
                            top: e.spacing(8),
                            backgroundColor: "#fff"
                        }, e.breakpoints.up("sm"), {
                            top: e.spacing(10),
                            right: e.spacing(2)
                        }),
                        leftTopToolbar: Object(h.a)({
                            position: "fixed",
                            zIndex: 1e3,
                            left: e.spacing(1),
                            top: e.spacing(8),
                            backgroundColor: "#fff"
                        }, e.breakpoints.up("sm"), {
                            top: e.spacing(10),
                            left: e.spacing(2)
                        })
                    }
                })),
                I = function(e) {
                    var t = e.pending,
                        a = e.onLocationButtonClick,
                        n = e.onRenewButtonClick,
                        r = e.onFilterButtonClick,
                        c = F();
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: c.rightTopToolbar
                    }, o.a.createElement(L.a, {
                        orientation: "vertical",
                        variant: "outlined",
                        color: "primary",
                        "aria-label": "outlined primary button group"
                    }, o.a.createElement(B.a, {
                        disabled: t,
                        onClick: function() {
                            return a()
                        }
                    }, o.a.createElement(z.a, null)), o.a.createElement(B.a, {
                        disabled: t,
                        onClick: function() {
                            return n()
                        }
                    }, o.a.createElement(N.a, null)))), o.a.createElement("div", {
                        className: c.leftTopToolbar
                    }, o.a.createElement(L.a, {
                        orientation: "vertical",
                        variant: "outlined",
                        color: "primary",
                        "aria-label": "outlined primary button group"
                    }, o.a.createElement(B.a, {
                        disabled: t,
                        onClick: function() {
                            return r()
                        }
                    }, o.a.createElement(T.a, null), o.a.createElement("span", {
                        style: {
                            marginBottom: 1
                        }
                    }, "옵션")))))
                };
            I.defaultProps = {
                onLocationButtonClick: function() {},
                onRenewButtonClick: function() {},
                onFilterButtonClick: function() {}
            };
            var _, R = I,
                A = a(357),
                M = a(85),
                P = a(165),
                W = a(71),
                G = a.n(W),
                K = G.a.CancelToken,
                H = function() {
                    function e() {
                        Object(M.a)(this, e)
                    }
                    return Object(P.a)(e, [{
                        key: "fetchShopsByBounds",
                        value: function(e, t, a) {
                            return _ && _(), G.a.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=".concat(e, "&lng=").concat(t, "&m=").concat(a), {
                                cancelToken: new K((function(e) {
                                    _ = e
                                }))
                            })
                        }
                    }]), e
                }(),
                D = new function e() {
                    Object(M.a)(this, e), this.Shop = new H
                },
                J = Object(g.a)((function(e) {
                    return {
                        info: {
                            position: "fixed",
                            zIndex: 9999,
                            backgroundColor: "rgba(0,0,0,0.6)",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            top: "50%",
                            left: "50%",
                            width: 240,
                            height: 80,
                            marginTop: -40,
                            marginLeft: -120,
                            fontSize: 15
                        }
                    }
                })),
                Z = function(e) {
                    var t = e.message,
                        a = J();
                    return o.a.createElement("div", {
                        className: a.info
                    }, t)
                },
                q = a(351),
                U = a(91),
                $ = a(88),
                Q = a(350),
                V = a(90),
                X = Object(g.a)((function(e) {
                    return {
                        normal: {
                            padding: e.spacing(.7),
                            color: "#fff",
                            textAlign: "center",
                            minWidth: 40
                        },
                        title: {
                            fontSize: 13,
                            fontWeight: 700
                        },
                        content: {
                            fontSize: 11
                        }
                    }
                })),
                Y = {
                    plenty: {
                        label: "100\uac1c \uc774\uc0c1",
                        backgroundColor: U.a[700],
                        color: $.a[100],
                        tooltipFontColor: U.a[300]
                    },
                    some: {
                        label: "30~99\uac1c",
                        backgroundColor: Q.a[700],
                        color: $.a[100],
                        tooltipFontColor: Q.a[300]
                    },
                    few: {
                        label: "2~29개",
                        backgroundColor: V.a[700],
                        color: $.a[100],
                        tooltipFontColor: V.a[300]
                    },
                    empty: {
                        label: "\ud488\uc808",
                        backgroundColor: $.a[700],
                        color: $.a[100],
                        tooltipFontColor: $.a[300]
                    }
                },
                ee = function(e) {
                    var t = e.code,
                        a = e.name,
                        n = e.addr,
                        r = e.remain_stat,
                        c = e.stock_at,
                        l = e.created_at,
                        i = X(),
                        s = !!Y[r],
                        u = Y[r] || {
                            label: "\uc815\ubcf4\uc5c6\uc74c",
                            backgroundColor: $.a[700],
                            color: $.a[100],
                            tooltipFontColor: $.a[300]
                        };
                    return o.a.createElement("div", {
                        "data-shop-code": t,
                        className: i.container,
                        "data-tippy-content": Object(b.renderToStaticMarkup)(o.a.createElement((function() {
                            return o.a.createElement("div", null, o.a.createElement(O.a, {
                                className: i.title,
                                style: {
                                    marginBottom: 3
                                }
                            }, a), s && o.a.createElement(O.a, {
                                className: i.content,
                                component: "p",
                                style: {
                                    color: u.tooltipFontColor
                                }
                            }, u.label), o.a.createElement(O.a, {
                                className: i.content,
                                component: "p"
                            }, n), o.a.createElement(O.a, {
                                className: i.content,
                                component: "p"
                            }, "\uc785\uace0\uc2dc\uac04: ", c), o.a.createElement(O.a, {
                                className: i.content,
                                component: "p"
                            }, "\uc5c5\ub370\uc774\ud2b8: ", l))
                        }), null))
                    }, o.a.createElement(q.a, {
                        className: i.normal,
                        style: {
                            backgroundColor: u.backgroundColor,
                            color: u.color
                        }
                    }, o.a.createElement(O.a, {
                        className: i.title,
                        component: "p"
                    }, u.label)))
                },
                te = a(73),
                ae = (a(305), a(352)),
                ne = a(361),
                oe = a(353),
                re = a(356),
                ce = a(362),
                le = a(354),
                ie = function(e) {
                    var t = e.open,
                        a = e.handleClose,
                        r = e.onFilterChange,
                        c = Object(n.useState)(!1),
                        l = Object(f.a)(c, 2),
                        i = l[0],
                        s = l[1];
                    return Object(n.useEffect)((function() {
                        r({
                            hideEmpty: i
                        })
                    }), [i]), o.a.createElement(ne.a, {
                        onClose: a,
                        "aria-labelledby": "simple-dialog-title",
                        open: t
                    }, o.a.createElement(ae.a, {
                        id: "filter-dialog-title"
                    }, "옵션"), o.a.createElement(oe.a, null, o.a.createElement(le.a, {
                        control: o.a.createElement(ce.a, {
                            checked: i,
                            onChange: function(e) {
                                return s(e.target.checked)
                            },
                            value: "hideEmpty"
                        }),
                        label: "재고 없는 곳은 표시 안함"
                    })), o.a.createElement(re.a, null, o.a.createElement(B.a, {
                        onClick: a,
                        variant: "contained",
                        color: "primary"
                    }, "닫기")))
                },
                se = a(355),
                ue = a(364),
                me = a(358),
                pe = Object(g.a)((function(e) {
                    return {
                        map: {
                            width: "100%",
                            height: "100%"
                        },
                        progress: {
                            position: "fixed",
                            zIndex: 9999,
                            width: "100%",
                            background:"#a9a9a9"
                        },
                        dimmer: {
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            top: 0,
                            left: 0,
                            zIndex: 10,
                            backgroundColor: "rgba(192,192,192,0.3)",
                            pointerEvents: "none"
                        }
                    }
                }));
            var de = function(e) {
                    var t = e.serviceOpen,
                        a = Object(n.useState)(!0),
                        r = Object(f.a)(a, 2),
                        c = r[0],
                        l = r[1],
                        i = Object(n.useState)([]),
                        s = Object(f.a)(i, 2),
                        u = s[0],
                        m = s[1],
                        p = Object(n.useState)([]),
                        d = Object(f.a)(p, 2),
                        g = d[0],
                        h = d[1],
                        E = Object(n.useState)(window.kakao),
                        v = Object(f.a)(E, 1)[0],
                        O = Object(n.useState)(null),
                        j = Object(f.a)(O, 2),
                        k = j[0],
                        y = j[1],
                        w = Object(n.useState)(null),
                        C = Object(f.a)(w, 2),
                        S = C[0],
                        B = C[1],
                        L = Object(n.useState)(""),
                        z = Object(f.a)(L, 2),
                        N = z[0],
                        T = z[1],
                        F = Object(n.useState)(null),
                        I = Object(f.a)(F, 2),
                        M = I[0],
                        P = I[1],
                        W = Object(n.useState)({}),
                        K = Object(f.a)(W, 2),
                        H = K[0],
                        J = K[1],
                        q = Object(n.useState)(!1),
                        U = Object(f.a)(q, 2),
                        $ = U[0],
                        Q = U[1],
                        V = pe(),
                        X = function(e, t) {
                            var a = Object(n.useState)(e),
                                o = Object(f.a)(a, 2),
                                r = o[0],
                                c = o[1];
                            return Object(n.useEffect)((function() {
                                var a = setTimeout((function() {
                                    c(e)
                                }), t);
                                return function() {
                                    clearTimeout(a)
                                }
                            }), [e, t]), r
                        }(S, 300),
                        Y = Object(n.useCallback)((function() {
                            return k.getBounds()
                        }), [k]),
                        ae = function() {
                            document.querySelectorAll("[data-shop-code]").forEach((function(e) {
                                return e.parentNode.removeChild(e)
                            }))
                        };
                    return Object(n.useEffect)((function() {
                        var e = document.getElementById("map"),
                            t = {
                                center: new v.maps.LatLng(37.4019528117587, 127.10828323199647),
                                level: 5
                            },
                            a = new v.maps.Map(e, t);
                        y(a), l(!1)
                    }), [v.maps]), Object(n.useEffect)((function() {
                        k && (v.maps.event.addListener(k, "tilesloaded", (function() {
                            k.getLevel() <= 5 ? (B(Y()), T("")) : (ae(), _ && (_(), l(!1)), T("범위가 너무 넓어요."))
                        })), v.maps.event.addListener(k, "zoom_start", (function() {
                            Object(te.b)()
                        })), v.maps.event.addListener(k, "dragstart", (function() {
                            Object(te.b)()
                        })))
                    }), [k]), Object(n.useEffect)((function() {
                        if (S) {
                            var e = k.getCenter(),
                                a = e.Ha,
                                n = e.Ga,
                                o = k.getLevel(),
                                r = 12 * Math.pow(o + 4, 2);
                            console.log(r), console.log("center", e), t && (l(!0), D.Shop.fetchShopsByBounds(a, n, r).then((function(e) {
                                var t = e.data.stores;
                                m(t), l(!1)
                            })).catch((function(e) {
                                G.a.isCancel(e) || (l(!1), P("현재 접속량이 많아 서비스가 원활하지 않습니다."))
                            }))), console.log(H)
                        }
                    }), [X]), Object(n.useEffect)((function() {
                        var e = H.hideEmpty;
                        console.log("hideEmpty", e), h(e ? u.filter((function(e) {
                            return e.remain_stat && "empty" !== e.remain_stat
                        })) : u)
                    }), [H, u]), Object(n.useEffect)((function() {
                        console.log("setShopOverlays", g),
                            function(e) {
                                setTimeout((function() {
                                    Object(te.b)(), ae(), e.forEach((function(e) {
                                        var t = e.lat,
                                            a = e.lng;
                                        new v.maps.CustomOverlay({
                                            map: k,
                                            clickable: !0,
                                            position: new v.maps.LatLng(t, a),
                                            content: Object(b.renderToStaticMarkup)(o.a.createElement(ee, e)),
                                            zIndex: 99999
                                        }).setMap(k), Object(te.a)("[data-tippy-content]", {
                                            allowHTML: !0
                                        })
                                    }))
                                }), 0)
                            }(g)
                    }), [g]), o.a.createElement(o.a.Fragment, null, o.a.createElement(x, {
                        onSearch: function(e) {
                            var t;
                            e && (t = e, l(!0), (new v.maps.services.Places).keywordSearch(t, (function(e, t) {
                                if (t === v.maps.services.Status.OK) {
                                    var a = e[0],
                                        n = a.x,
                                        o = a.y,
                                        r = new v.maps.LatLng(o, n);
                                    k.panTo(r), k.setLevel(3)
                                } else t === v.maps.services.Status.ZERO_RESULT ? alert("검색 결과가 없어요.") : alert("오류가 발생했어요. 다시 시도해 주세요.");
                                l(!1)
                            })))
                        }
                    }), o.a.createElement(R, {
                        pending: c,
                        onLocationButtonClick: function() {
                            navigator.geolocation ? (l(!0), navigator.geolocation.getCurrentPosition((function(e) {
                                var t = e.coords,
                                    a = t.latitude,
                                    n = t.longitude,
                                    o = new v.maps.LatLng(a, n);
                                k.panTo(o), B(Y()), l(!1)
                            }), (function() {
                                l(!1), alert("위치 정보를 가져오는 데 실패했어요.")
                            }))) : (alert("위치 정보를 가져오는 데 실패했어요."), l(!1))
                        },
                        onRenewButtonClick: function() {
                            k.getLevel() <= 5 && B(Y())
                        },
                        onFilterButtonClick: function() {
                            return Q(!0)
                        }
                    }), c && o.a.createElement(o.a.Fragment, null, o.a.createElement(A.a, {
                        color: "secondary",
                        className: V.progress
                    })), N && o.a.createElement(Z, {
                        message: N
                    }), o.a.createElement(ie, {
                        open: $,
                        onFilterChange: function(e) {
                            return J(e)
                        },
                        handleClose: function() {
                            return Q(!1)
                        }
                    }), o.a.createElement(ue.a, {
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        open: !!M,
                        autoHideDuration: 3e3,
                        onClose: function() {
                            return P(null)
                        },
                        message: M,
                        action: o.a.createElement(o.a.Fragment, null, o.a.createElement(se.a, {
                            size: "small",
                            "aria-label": "close",
                            color: "inherit",
                            onClick: function() {
                                return P(null)
                            }
                        }, o.a.createElement(me.a, null)))
                    }), o.a.createElement("div", {
                        id: "map",
                        className: V.map
                    }))
                },
                fe = Object(g.a)((function(e) {
                    return {
                        root: Object(h.a)({
                            position: "fixed",
                            zIndex: 1e3,
                            right: 0,
                            bottom: 0,
                            width: 200,
                            padding: e.spacing(1),
                            textAlign: "right",
                            textShadow: "1px 1px 1px #fff",
                            fontSize: 10
                        }, e.breakpoints.up("sm"), {
                            fontSize: 11
                        })
                    }
                })),
                be = function() {
                    var e = fe();
                    return o.a.createElement("div", {
                        className: e.root
                    }, o.a.createElement("div", null, "개발 : 코로나콕"), o.a.createElement("div", null, "corona.coc.kr"), o.a.createElement("div", null, "지도 제공 : kakao"))
                },
                ge = function() {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(be, null))
                },
                he = a(359),
                Ee = function(e) {
                    var t = e.serviceOpen,
                        a = Object(n.useState)(!0),
                        r = Object(f.a)(a, 2),
                        c = r[0],
                        l = r[1],
                        i = function() {
                            l(!1)
                        };
                    return o.a.createElement(ne.a, {
                        open: c,
                        onClose: i,
                        disableEscapeKeyDown: !0,
                        disableBackdropClick: !0,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                    }, o.a.createElement(ae.a, {
                        id: "alert-dialog-title"
                    }, "공지사항"), o.a.createElement(oe.a, null, !t && o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 15,
                            color: "red"
                        }
                    
                    },  o.a.createElement("strong", null, "현재 베타서비스 중입니다.")), o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 13
                        }
                    },  " 마스크 NOW에서 제공하는 정보는 실제 정보와 차이가 있을 수 있으며, ", o.a.createElement("strong", null, "수 분 가량 지연이 발생할 수 있습니다.")), o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 13
                        }
                    }, "해당 정보를 지나치게 신뢰하여 약국에 불필요한 이의 제기를 하지 말아주세요. "), o.a.createElement(he.a, {
                        style: {
                            margin: "10px 0"
                        }
                    }), o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 11
                        }
                    }, "마스크 재고 정보 제공 : 한국정보화진흥원(", o.a.createElement("a", {
                        href: "https://www.nia.or.kr",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "https://www.nia.or.kr"), ")")), o.a.createElement(re.a, null, o.a.createElement(B.a, {
                        onClick: i,
                        variant: "contained",
                        color: "primary",
                        disabled: !t
                    }, t ? "확인" : "시작")))
                };
            var ve = function() {
                return o.a.createElement(l.a, {
                    theme: m
                }, o.a.createElement("div", {
                    className: d.a.App
                }, o.a.createElement(de, {
                    serviceOpen: !0
                }), o.a.createElement(ge, null), o.a.createElement(Ee, {
                    serviceOpen: !0
                })))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            c.a.render(o.a.createElement(ve, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        }
    },
    [
        [185, 1, 2]
    ]
]);
