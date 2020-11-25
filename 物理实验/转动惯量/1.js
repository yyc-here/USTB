var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var zwt_t1 = parseFloat(document.getElementById("zwt_t1").value);
    var zwt_t2 = parseFloat(document.getElementById("zwt_t2").value);
    var zwt_t3 = parseFloat(document.getElementById("zwt_t3").value);

    var slyz_d0_1 = parseFloat(document.getElementById("slyz_d0_1").value);
    var slyz_d0_2 = parseFloat(document.getElementById("slyz_d0_2").value);
    var slyz_d0_3 = parseFloat(document.getElementById("slyz_d0_3").value);
    var slyz_t0_1 = parseFloat(document.getElementById("slyz_t0_1").value);
    var slyz_t0_2 = parseFloat(document.getElementById("slyz_t0_2").value);
    var slyz_t0_3 = parseFloat(document.getElementById("slyz_t0_3").value);

    var jsyt_d0_1 = parseFloat(document.getElementById("jsyt_d0_1").value);
    var jsyt_d0_2 = parseFloat(document.getElementById("jsyt_d0_2").value);
    var jsyt_d0_3 = parseFloat(document.getElementById("jsyt_d0_3").value);
    var jsyt_d1_1 = parseFloat(document.getElementById("jsyt_d1_1").value);
    var jsyt_d1_2 = parseFloat(document.getElementById("jsyt_d1_2").value);
    var jsyt_d1_3 = parseFloat(document.getElementById("jsyt_d1_3").value);
    var jsyt_t0_1 = parseFloat(document.getElementById("jsyt_t0_1").value);
    var jsyt_t0_2 = parseFloat(document.getElementById("jsyt_t0_2").value);
    var jsyt_t0_3 = parseFloat(document.getElementById("jsyt_t0_3").value);

    var sxq_d0_1 = parseFloat(document.getElementById("sxq_d0_1").value);
    var sxq_d0_2 = parseFloat(document.getElementById("sxq_d0_2").value);
    var sxq_d0_3 = parseFloat(document.getElementById("sxq_d0_3").value);
    var sxq_t0_1 = parseFloat(document.getElementById("sxq_t0_1").value);
    var sxq_t0_2 = parseFloat(document.getElementById("sxq_t0_2").value);
    var sxq_t0_3 = parseFloat(document.getElementById("sxq_t0_3").value);

    var jsxg_d0_1 = parseFloat(document.getElementById("jsxg_d0_1").value);
    var jsxg_d0_2 = parseFloat(document.getElementById("jsxg_d0_2").value);
    var jsxg_d0_3 = parseFloat(document.getElementById("jsxg_d0_3").value);
    var jsxg_t0_1 = parseFloat(document.getElementById("jsxg_t0_1").value);
    var jsxg_t0_2 = parseFloat(document.getElementById("jsxg_t0_2").value);
    var jsxg_t0_3 = parseFloat(document.getElementById("jsxg_t0_3").value);

    var xhk_5_t1 = parseFloat(document.getElementById("xhk_5_t1").value);
    var xhk_10_t1 = parseFloat(document.getElementById("xhk_10_t1").value);
    var xhk_15_t1 = parseFloat(document.getElementById("xhk_15_t1").value);
    var xhk_20_t1 = parseFloat(document.getElementById("xhk_20_t1").value);
    var xhk_5_t2 = parseFloat(document.getElementById("xhk_5_t2").value);
    var xhk_10_t2 = parseFloat(document.getElementById("xhk_10_t2").value);
    var xhk_15_t2 = parseFloat(document.getElementById("xhk_15_t2").value);
    var xhk_20_t2 = parseFloat(document.getElementById("xhk_20_t2").value);
    var xhk_5_t3 = parseFloat(document.getElementById("xhk_5_t3").value);
    var xhk_10_t3 = parseFloat(document.getElementById("xhk_10_t3").value);
    var xhk_15_t3 = parseFloat(document.getElementById("xhk_15_t3").value);
    var xhk_20_t3 = parseFloat(document.getElementById("xhk_20_t3").value);

    var zwt_t0 = (zwt_t1 + zwt_t2 + zwt_t3) / 30;
    //console.log(zwt_t0);
    document.getElementById("t0").textContent = zwt_t0;

    var slyz_m = parseFloat(document.getElementById("slyz_m").value);
    var slyz_d0 = (slyz_d0_1 + slyz_d0_2 + slyz_d0_3) / 3;
    document.getElementById("slyz_d0_0").textContent = slyz_d0;
    var slyz_t0 = (slyz_t0_1 + slyz_t0_2 + slyz_t0_3) / 30;
    document.getElementById("slyz_t0_0").textContent = slyz_t0;

    var jsyt_m = parseFloat(document.getElementById("jsyt_m").value);
    var jsyt_d0 = (jsyt_d0_1 + jsyt_d0_2 + jsyt_d0_3) / 3;
    document.getElementById("jsyt_d0_0").textContent = jsyt_d0;
    var jsyt_d1 = (jsyt_d1_1 + jsyt_d1_2 + jsyt_d1_3) / 3;
    document.getElementById("jsyt_d1_0").textContent = jsyt_d1;
    var jsyt_t0 = (jsyt_t0_1 + jsyt_t0_2 + jsyt_t0_3) / 30;
    document.getElementById("jsyt_t0_0").textContent = jsyt_t0;

    var sxq_m = parseFloat(document.getElementById("sxq_m").value);
    var sxq_d0 = (sxq_d0_1 + sxq_d0_2 + sxq_d0_3) / 3;
    document.getElementById("sxq_d0_0").textContent = sxq_d0;
    var sxq_t0 = (sxq_t0_1 + sxq_t0_2 + sxq_t0_3) / 30;
    document.getElementById("sxq_t0_0").textContent = sxq_t0;

    var jsxg_m = parseFloat(document.getElementById("jsxg_m").value);
    var jsxg_d0 = (jsxg_d0_1 + jsxg_d0_2 + jsxg_d0_3) / 3;
    document.getElementById("jsxg_d0_0").textContent = jsxg_d0;
    var jsxg_t0 = (jsxg_t0_1 + jsxg_t0_2 + jsxg_t0_3) / 30;
    document.getElementById("jsxg_t0_0").textContent = jsxg_t0;
    //zwt.rows[4].cells[1].value = zwt_t3;

    var slyz_l = slyz_m * Math.pow(slyz_d0 * 0.01, 2) * 10000 / 8;
    console.log(slyz_l);
    document.getElementById('slyz_l').textContent = slyz_l;

    var jsyt_l = jsyt_m * (Math.pow(jsyt_d0 * 0.01, 2) + Math.pow(jsyt_d1 * 0.01, 2)) * 10000 / 8;
    document.getElementById('jsyt_l').textContent = jsyt_l;

    var m = sxq_m;
    var answer = sxq_d0;
    var sxq_l = m * Math.pow(answer * 0.01, 2) * 10000 / 10;
    document.getElementById('sxq_l').textContent = sxq_l;

    m = jsxg_m;
    answer = jsxg_d0;
    var jsxg_l = m * Math.pow(answer * 0.01, 2) * 10000 / 12;
    document.getElementById('jsxg_l').textContent = jsxg_l;

    var I = slyz_l;
    var t1 = slyz_t0;
    var t0 = zwt_t0;
    var k = 4 * Math.PI * Math.PI * I * Math.pow(10, -4) / (Math.pow(t1, 2) - Math.pow(t0, 2));
    document.getElementById('k').textContent = k;

    var zwt_s = I * Math.pow(t0, 2) / (Math.pow(t1, 2) - Math.pow(t0, 2));
    document.getElementById('zwt_s').textContent = zwt_s;

    var I = zwt_s;
    var t2 = jsyt_t0;
    var jsyt_s = k * Math.pow(t2, 2) / (4 * Math.PI * Math.PI) - I * Math.pow(10, -4);
    jsyt_s = jsyt_s * Math.pow(10, 4);
    document.getElementById('jsyt_s').textContent = jsyt_s;

    var Ii = jsyt_l;
    var I = jsyt_s;
    var jsyt_b = Math.abs(I - Ii) * 100 / Ii;
    document.getElementById('jsyt_b').textContent = jsyt_b;

    var I = sxq_l;
    var t3 = sxq_t0;
    var sxq_s = k * Math.pow(t3, 2) / (4 * Math.PI * Math.PI);
    sxq_s = sxq_s * Math.pow(10, 4);
    document.getElementById('sxq_s').textContent = sxq_s;

    var Ii = sxq_l;
    var I = sxq_s;
    var sxq_b = Math.abs(I - Ii) * 100 / Ii;
    document.getElementById('sxq_b').textContent = sxq_b;

    var I = jsxg_l;
    var t4 = jsxg_t0;
    var jsxg_s = k * Math.pow(t4, 2) / (4 * Math.PI * Math.PI);
    jsxg_s = jsxg_s * Math.pow(10, 4)
    document.getElementById('jsxg_s').textContent = jsxg_s;

    var Ii = jsxg_l;
    var I = jsxg_s;
    var jsxg_b = Math.abs(I - Ii) * 100 / Ii;
    document.getElementById('jsxg_b').textContent = jsxg_b;

    var m = parseFloat(document.getElementById("xhk_m").value) * Math.pow(10, -3);
    var D1 = parseFloat(document.getElementById("xhk_d0").value) * Math.pow(10, -2);
    var D2 = parseFloat(document.getElementById("xhk_d1").value) * Math.pow(10, -2);
    var H = parseFloat(document.getElementById("xhk_h0").value) * Math.pow(10, -2);
    var xhk_l = m * (Math.pow(D1, 2) + Math.pow(D2, 2)) / 16 + m * Math.pow(H, 2) / 12;
    xhk_l = xhk_l * Math.pow(10, 4);
    document.getElementById('xhk_l').textContent = xhk_l;

    var I5 = xhk_l;
    var I4 = jsxg_l;
    var xhk_5_l = I4 * Math.pow(10, -4) + 2 * m * 0.05 * 0.05 + 2 * I5 * Math.pow(10, -4);
    xhk_5_l = xhk_5_l * Math.pow(10, 4);
    document.getElementById('xhk_5_l').textContent = xhk_5_l;

    var T = (xhk_5_t1 + xhk_5_t2 + xhk_5_t3) / 30;
    document.getElementById("xhk_5_t0").textContent = T;
    var I4 = jsxg_s;
    var xhk_5_s = k * Math.pow(T, 2) / (4 * Math.PI * Math.PI);
    xhk_5_s = xhk_5_s * Math.pow(10, 4);
    document.getElementById('xhk_5_s').textContent = xhk_5_s;

    var Ii = xhk_5_l;
    var I = xhk_5_s;
    var xhk_5_b = Math.abs(I - Ii) * 100 / Ii;
    document.getElementById('xhk_5_b').textContent = xhk_5_b;


    var xhk_10_l = I4 * Math.pow(10, -4) + 2 * m * 0.1 * 0.1 + 2 * I5 * Math.pow(10, -4);
    xhk_10_l = xhk_10_l * Math.pow(10, 4);
    document.getElementById('xhk_10_l').textContent = xhk_10_l;

    var T = (xhk_10_t1 + xhk_10_t2 + xhk_10_t3) / 30;
    document.getElementById("xhk_10_t0").textContent = T;
    var xhk_10_s = k * Math.pow(T, 2) / (4 * Math.PI * Math.PI);
    xhk_10_s = xhk_10_s * Math.pow(10, 4);
    document.getElementById('xhk_10_s').textContent = xhk_10_s;

    var Ii = xhk_10_l;
    var I = xhk_10_s;
    var xhk_10_b = Math.abs(I - Ii) * 100 / Ii;
    document.getElementById('xhk_10_b').textContent = xhk_10_b;

    var xhk_15_l = I4 * Math.pow(10, -4) + 2 * m * 0.15 * 0.15 + 2 * I5 * Math.pow(10, -4);
    xhk_15_l = xhk_15_l * Math.pow(10, 4);
    document.getElementById('xhk_15_l').textContent = xhk_15_l;

    var T = (xhk_15_t1 + xhk_15_t2 + xhk_15_t3) / 30;
    document.getElementById("xhk_15_t0").textContent = T;
    var I4 = jsxg_s;
    var xhk_15_s = k * Math.pow(T, 2) / (4 * Math.PI * Math.PI);
    xhk_15_s = xhk_15_s * Math.pow(10, 4);
    document.getElementById('xhk_15_s').textContent = xhk_15_s;

    var Ii = xhk_15_l;
    var I = xhk_15_s;
    var xhk_15_b = Math.abs(I - Ii) * 100 / Ii;
    document.getElementById('xhk_15_b').textContent = xhk_15_b;

    var xhk_20_l = I4 * Math.pow(10, -4) + 2 * m * 0.20 * 0.20 + 2 * I5 * Math.pow(10, -4);
    xhk_20_l = xhk_20_l * Math.pow(10, 4);
    document.getElementById('xhk_20_l').textContent = xhk_20_l;

    var T = (xhk_20_t1 + xhk_20_t2 + xhk_20_t3) / 30;
    document.getElementById("xhk_20_t0").textContent = T;
    var I4 = jsxg_s;
    var xhk_20_s = k * Math.pow(T, 2) / (4 * Math.PI * Math.PI);
    xhk_20_s = xhk_20_s * Math.pow(10, 4);
    document.getElementById('xhk_20_s').textContent = xhk_20_s;

    var Ii = xhk_20_l;
    var I = xhk_20_s;
    var xhk_20_b = Math.abs(I - Ii) * 100 / Ii;
    document.getElementById('xhk_20_b').textContent = xhk_20_b;
}, false);
