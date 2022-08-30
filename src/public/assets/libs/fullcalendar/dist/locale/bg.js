!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('moment'), require('fullcalendar')))
    : 'function' == typeof define && define.amd
    ? define(['moment', 'fullcalendar'], t)
    : 'object' == typeof exports
    ? t(require('moment'), require('fullcalendar'))
    : t(e.moment, e.FullCalendar);
})('undefined' != typeof self ? self : this, function (e, t) {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, 'a', n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ''),
      t((t.s = 89))
    );
  })({
    0: function (t, n) {
      t.exports = e;
    },
    1: function (e, n) {
      e.exports = t;
    },
    89: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }), n(90);
      var r = n(1);
      r.datepickerLocale('bg', 'bg', {
        closeText: 'затвори',
        prevText: '&#x3C;назад',
        nextText: 'напред&#x3E;',
        nextBigText: '&#x3E;&#x3E;',
        currentText: 'днес',
        monthNames: [
          'Януари',
          'Февруари',
          'Март',
          'Април',
          'Май',
          'Юни',
          'Юли',
          'Август',
          'Септември',
          'Октомври',
          'Ноември',
          'Декември',
        ],
        monthNamesShort: [
          'Яну',
          'Фев',
          'Мар',
          'Апр',
          'Май',
          'Юни',
          'Юли',
          'Авг',
          'Сеп',
          'Окт',
          'Нов',
          'Дек',
        ],
        dayNames: [
          'Неделя',
          'Понеделник',
          'Вторник',
          'Сряда',
          'Четвъртък',
          'Петък',
          'Събота',
        ],
        dayNamesShort: ['Нед', 'Пон', 'Вто', 'Сря', 'Чет', 'Пет', 'Съб'],
        dayNamesMin: ['Не', 'По', 'Вт', 'Ср', 'Че', 'Пе', 'Съ'],
        weekHeader: 'Wk',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: '',
      }),
        r.locale('bg', {
          buttonText: {
            month: 'Месец',
            week: 'Седмица',
            day: 'Ден',
            list: 'График',
          },
          allDayText: 'Цял ден',
          eventLimitText: function (e) {
            return '+още ' + e;
          },
          noEventsMessage: 'Няма събития за показване',
        });
    },
    90: function (e, t, n) {
      !(function (e, t) {
        t(n(0));
      })(0, function (e) {
        return e.defineLocale('bg', {
          months:
            'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split(
              '_',
            ),
          monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split(
            '_',
          ),
          weekdays:
            'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
          weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
          weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[Днес в] LT',
            nextDay: '[Утре в] LT',
            nextWeek: 'dddd [в] LT',
            lastDay: '[Вчера в] LT',
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[В изминалия] dddd [в] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'след %s',
            past: 'преди %s',
            s: 'няколко секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дни',
            M: 'месец',
            MM: '%d месеца',
            y: 'година',
            yy: '%d години',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function (e) {
            var t = e % 10,
              n = e % 100;
            return 0 === e
              ? e + '-ев'
              : 0 === n
              ? e + '-ен'
              : n > 10 && n < 20
              ? e + '-ти'
              : 1 === t
              ? e + '-ви'
              : 2 === t
              ? e + '-ри'
              : 7 === t || 8 === t
              ? e + '-ми'
              : e + '-ти';
          },
          week: { dow: 1, doy: 7 },
        });
      });
    },
  });
});
