import { motion } from 'framer-motion';

/**
 * The Eligoo mark as animatable strokes. Geometry is traced from the supplied
 * favicon artwork (stroke centerlines via skeletonization), so it matches the
 * real mark — it is not a redraw. viewBox matches the source pixels.
 */
const W = 1191, H = 641;
const CLOUD = 'M 313.0 236.0 C 317.2 234.3 331.3 227.8 338.0 226.0 C 344.7 224.2 346.8 226.0 353.0 225.0 C 359.2 224.0 370.3 222.0 375.0 220.0 C 379.7 218.0 378.3 218.8 381.0 213.0 C 383.7 207.2 386.8 194.2 391.0 185.0 C 395.2 175.8 398.0 169.8 406.0 158.0 C 414.0 146.2 426.7 127.3 439.0 114.0 C 451.3 100.7 469.2 86.5 480.0 78.0 C 490.8 69.5 494.3 68.2 504.0 63.0 C 513.7 57.8 528.2 51.0 538.0 47.0 C 547.8 43.0 553.0 41.5 563.0 39.0 C 573.0 36.5 585.0 33.5 598.0 32.0 C 611.0 30.5 628.7 30.0 641.0 30.0 C 653.3 30.0 661.3 30.5 672.0 32.0 C 682.7 33.5 695.3 36.5 705.0 39.0 C 714.7 41.5 722.5 44.2 730.0 47.0 C 737.5 49.8 740.0 50.5 750.0 56.0 C 760.0 61.5 779.2 72.5 790.0 80.0 C 800.8 87.5 807.8 94.3 815.0 101.0 C 822.2 107.7 826.0 111.3 833.0 120.0 C 840.0 128.7 851.0 143.8 857.0 153.0 C 863.0 162.2 865.7 167.8 869.0 175.0 C 872.3 182.2 874.5 191.2 877.0 196.0 C 879.5 200.8 881.2 202.2 884.0 204.0 C 886.8 205.8 884.3 206.2 894.0 207.0 C 903.7 207.8 929.7 207.8 942.0 209.0 C 954.3 210.2 959.3 211.8 968.0 214.0 C 976.7 216.2 985.0 218.7 994.0 222.0 C 1003.0 225.3 1012.8 229.3 1022.0 234.0 C 1031.2 238.7 1038.5 242.5 1049.0 250.0 C 1059.5 257.5 1076.2 271.2 1085.0 279.0 C 1093.8 286.8 1095.7 289.3 1102.0 297.0 C 1108.3 304.7 1115.8 313.0 1123.0 325.0 C 1130.2 337.0 1139.8 356.5 1145.0 369.0 C 1150.2 381.5 1151.7 390.2 1154.0 400.0 C 1156.3 409.8 1158.2 413.5 1159.0 428.0 C 1159.8 442.5 1159.8 472.3 1159.0 487.0 C 1158.2 501.7 1156.3 506.2 1154.0 516.0 C 1151.7 525.8 1148.2 537.3 1145.0 546.0 C 1141.8 554.7 1140.8 558.2 1135.0 568.0 C 1129.2 577.8 1114.2 598.8 1110.0 605.0';
const PLATE = 'M 902.0 610.0 C 956.7 609.5 922.5 608.2 930.0 607.0 C 937.5 605.8 943.0 604.3 947.0 603.0 C 951.0 601.7 951.8 599.8 954.0 599.0 C 956.2 598.2 956.2 599.8 960.0 598.0 C 963.8 596.2 972.3 591.2 977.0 588.0 C 981.7 584.8 983.0 584.0 988.0 579.0 C 993.0 574.0 1001.5 566.0 1007.0 558.0 C 1012.5 550.0 1017.8 538.7 1021.0 531.0 C 1024.2 523.3 1024.7 519.8 1026.0 512.0 C 1027.3 504.2 1028.7 492.7 1029.0 484.0 C 1029.3 475.3 1028.8 467.8 1028.0 460.0 C 1027.2 452.2 1026.0 444.3 1024.0 437.0 C 1022.0 429.7 1019.7 423.0 1016.0 416.0 C 1012.3 409.0 1007.0 401.3 1002.0 395.0 C 997.0 388.7 991.0 382.7 986.0 378.0 C 981.0 373.3 977.7 370.5 972.0 367.0 C 966.3 363.5 961.5 359.8 952.0 357.0 C 942.5 354.2 927.5 351.5 915.0 350.0 C 902.5 348.5 922.5 348.3 877.0 348.0 C 831.5 347.7 687.8 347.8 642.0 348.0 C 596.2 348.2 613.5 348.3 602.0 349.0 C 590.5 349.7 581.3 350.7 573.0 352.0 C 564.7 353.3 558.5 354.7 552.0 357.0 C 545.5 359.3 539.2 363.0 534.0 366.0 C 528.8 369.0 527.0 369.5 521.0 375.0 C 515.0 380.5 503.8 391.7 498.0 399.0 C 492.2 406.3 489.5 411.2 486.0 419.0 C 482.5 426.8 479.0 437.3 477.0 446.0 C 475.0 454.7 474.5 463.8 474.0 471.0 C 473.5 478.2 473.2 480.3 474.0 489.0 C 474.8 497.7 476.8 513.8 479.0 523.0 C 481.2 532.2 482.7 536.2 487.0 544.0 C 491.3 551.8 499.0 563.0 505.0 570.0 C 511.0 577.0 516.7 581.3 523.0 586.0 C 529.3 590.7 536.0 594.7 543.0 598.0 C 550.0 601.3 555.2 604.0 565.0 606.0 C 574.8 608.0 545.8 609.3 602.0 610.0 C 658.2 610.7 847.3 610.5 902.0 610.0 Z';
const CLOUD_SW = 48.4, PLATE_SW = 49.4;
const LINES = [{"x1": 115.0, "y1": 379.0, "x2": 267.0, "y2": 379.0, "sw": 44.0, "coral": false}, {"x1": 195.0, "y1": 488.0, "x2": 27.0, "y2": 488.0, "sw": 38.0, "coral": true}, {"x1": 124.0, "y1": 602.0, "x2": 269.0, "y2": 603.0, "sw": 41.0, "coral": false}];
const EYES = [{"cx": 644.0, "cy": 479.2, "r": 47.2}, {"cx": 856.7, "cy": 478.8, "r": 47.5}];

export default function MarkDraw({ size = 200, color = '#ffffff', accent = '#FF5A36', draw = true, delay = 0 }: { size?: number; color?: string; accent?: string; draw?: boolean; delay?: number }) {
  const d = draw;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden style={{ width: '100%', maxWidth: size, height: 'auto', display: 'block' }}>
      <motion.path
        d={CLOUD} stroke={color} strokeWidth={CLOUD_SW} strokeLinecap="round" strokeLinejoin="round"
        initial={d ? { pathLength: 0, opacity: 0 } : false} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ pathLength: { duration: 1.3, delay, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.2, delay } }}
      />
      <motion.path
        d={PLATE} stroke={color} strokeWidth={PLATE_SW} strokeLinecap="round" strokeLinejoin="round"
        initial={d ? { pathLength: 0, opacity: 0 } : false} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ pathLength: { duration: 1.0, delay: delay + 0.7, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.2, delay: delay + 0.7 } }}
      />
      {EYES.map((e, i) => (
        <motion.circle
          key={i} cx={e.cx} cy={e.cy} r={e.r} fill={accent}
          style={{ transformOrigin: `${e.cx}px ${e.cy}px` }}
          initial={d ? { scale: 0, opacity: 0 } : false} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 1.55 + i * 0.12, type: 'spring', stiffness: 380, damping: 14 }}
        />
      ))}
      {LINES.map((l, i) => (
        <motion.line
          key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={l.coral ? accent : color} strokeWidth={l.sw} strokeLinecap="round"
          initial={d ? { pathLength: 0, opacity: 0, x: -60 } : false} animate={{ pathLength: 1, opacity: 1, x: 0 }}
          transition={{ delay: delay + 1.75 + i * 0.1, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        />
      ))}
    </svg>
  );
}
