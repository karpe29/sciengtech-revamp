/**
 * Google Form wiring for checkout submissions.
 * Form: https://docs.google.com/forms/d/e/1FAIpQLSc1h7jsmlO4ZsmHDLLuim2fgGa4vzRB1wrBcooNTLtX8znDbw/viewform
 */
(function (global) {
  'use strict';

  global.SciEngGoogleForm = {
    formId: '1FAIpQLSc1h7jsmlO4ZsmHDLLuim2fgGa4vzRB1wrBcooNTLtX8znDbw',

    fields: {
      fullName: 'entry.1196115552',
      email: 'entry.717380141',
      institute: 'entry.1038746144',
      phone: 'entry.727891837',
      designation: 'entry.424289704',
      orderItems: 'entry.1533809902',
      notes: 'entry.599864005',
    },

    thankYouPath: 'thank-you.html',
  };
})(typeof window !== 'undefined' ? window : globalThis);
