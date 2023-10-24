 

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    // {
                    //     label: 'Airflow ()',
                    //     data: [0.027818960491, 0.021603424535, 0.031530985325, 0.020613265225, 0.029186780336, 0.015816355464, 0.032714547474, 0.017918270615, 0.033796835632, 0.020872490513, 0.0302692943, 0.020243959512, 0.033175530423, 0.031138986109, 0.017700593631, 0.033796835632, 0.033007756565, 0.029637827821, 0.02951058614, 0.031844629859, 0.019634170409, 0.018479285622, 0.022119729954, 0.030418552066, 0.014414213107, 0.015756291068, 0.014783857529, 0.016162177353, 0.033091191882, 0.033414658977, 0.014783857529, 0.014400213135, 0.022877760696, 0.02712607478, 0.027244848736, 0.032395483596, 0.032505676924, 0.029363586434, 0.032105661595, 0.013863698079, 0.01515948581, 0.029211731899, 0.023009179788, 0.013482085939, 0.015371404741, 0.018840688125, 0.032825531123, 0.017934980259, 0.032478015689, 0.031112566807, 0.019192042261, 0.019903895676, 0.030777244897, 0.021563682679, 0.030470374543, 0.016799176079, 0.013638569497, 0.02901494197, 0.030707922455, 0.023113050548, 0.014009342949, 0.015831484466, 0.027555219083, 0.021810488637, 0.014009342949, 0.016460805788, 0.029913762753, 0.014826873572, 0.019174090684, 0.024709611871, 0.029637827821, 0.014183326472, 0.026796285117, 0.0198483474, 0.027987185961, 0.025271981714, 0.022561632296, 0.029485408771, 0.028570668665, 0.025796641955, 0.02961219884, 0.020356072191, 0.027221026203, 0.030418552066, 0.031033421804, 0.029965472327, 0.022039004309, 0.014358664831, 0.022189052396, 0.02901494197, 0.018564414484, 0.015217743758, 0.022460245402, 0.033091191882, 0.033035530703, 0.022039004309, 0.031033421804, 0.014563245067, 0.015232534051, 0.02497865972, 0.014210761901, 0.015400872424, 0.025796641955, 0.01950738034, 0.015203066368, 0.015130695545, 0.021094909423, 0.032769869944, 0.025796641955, 0.025819561264, 0.032714547474, 0.029338070356, 0.019866750589, 0.032422919025, 0.028890071252, 0.019652460695, 0.03236816107, 0.013625359846, 0.02639785043, 0.031763339699, 0.024599983058, 0.013455553734, 0.023392146764, 0.021075377204, 0.028769377945, 0.018137641144, 0.013274118613, 0.024069338958, 0.028769377945, 0.016508225048, 0.013678762965, 0.015555662437, 0.022713261025, 0.015262114637, 0.022350164977, 0.013482085939, 0.02000866966, 0.021603424535, 0.027411267758, 0.017567255188, 0.013638569497, 0.032714547474, 0.030882696299, 0.030243213707, 0.013665327508, 0.022350164977, 0.031790323516, 0.029338070356, 0.028914909912, 0.020480942909, 0.01331352176, 0.02497865972, 0.025294562314, 0.028626442747, 0.030882696299, 0.024846224501, 0.023287034071, 0.013416376393, 0.023913645721, 0.025001014514, 0.014741406001, 0.032105661595, 0.015913452044, 0.015445469109, 0.022733583565, 0.015958387438, 0.02712607478, 0.028939748572, 0.031477017691, 0.013287215361, 0.026678301482, 0.029836762907, 0.021810488637, 0.02651526955, 0.031790323516, 0.019990379374, 0.022582180642, 0.019403283774, 0.012751829335, 0.023113050548, 0.01494948623, 0.013968810772, 0.013287215361, 0.01331352176, 0.016080661387, 0.020960103241, 0.030243213707, 0.022208923324, 0.020719619851, 0.031138986109, 0.013300312109, 0.021094909423, 0.014064100904, 0.02639785043, 0.015861968276, 0.023892194151, 0.02864462013, 0.024578305682, 0.029485408771, 0.020814684177, 0.022836212392, 0.023370921, 0.018341769768, 0.025837174132, 0.026773140002, 0.022440148668, 0.014727406029, 0.020170459659, 0.024442483373, 0.02365204947, 0.01875431733, 0.014210761901, 0.030341439317, 0.02961219884, 0.014210761901, 0.031033421804, 0.013429360238, 0.028694184547, 0.020663394157, 0.016910724243, 0.02651526955, 0.013612037292, 0.024420580191, 0.032395483596, 0.013809730445, 0.029312667181, 0.024709611871, 0.015021518344, 0.031165631217, 0.021338328291, 0.030829857695, 0.015102018183, 0.031790323516, 0.014372438997, 0.017335578232, 0.031138986109, 0.014372438997, 0.021407876539, 0.014196987735, 0.020101137217, 0.014344890665, 0.032024258532, 0.016653079597, 0.032340951447, 0.014591245011, 0.027794686346, 0.029586682762, 0.014783857529, 0.014210761901, 0.031790323516, 0.024731853762, 0.026374479509, 0.015116356864, 0.025544868265, 0.014935260452, 0.024177161323, 0.017868480392, 0.028865345495, 0.014428213079, 0.013612037292, 0.032714547474, 0.027244848736, 0.025571964985, 0.023113050548, 0.021900472328, 0.016460805788, 0.025544868265, 0.027818960491, 0.014344890665, 0.013625359846, 0.014372438997, 0.021830472468, 0.032132984121, 0.029586682762, 0.032395483596, 0.023462485333, 0.015313146793, 0.022672841751, 0.018547253228, 0.013823165902, 0.014156003946, 0.014009342949, 0.032078451972, 0.02365204947, 0.025544868265, 0.020101137217, 0.025819561264, 0.014521470957, 0.032714547474, 0.032422919025, 0.032051355252, 0.017885077133, 0.023071276438, 0.02478107947, 0.025249514017, 0.014727406029, 0.020318475492, 0.031970516704, 0.014963824911, 0.022582180642, 0.026190560522, 0.018771478586, 0.019156139107, 0.03168283986, 0.01532771128, 0.015130695545, 0.015526307657, 0.03145025968, 0.017319207297, 0.0237435009, 0.017550545544, 0.027530944938, 0.030724970808, 0.015943371339, 0.032686999142, 0.030856164094, 0.024956417829, 0.019156139107, 0.028694184547, 0.019403283774, 0.013995794589, 0.028865345495, 0.018668059438, 0.016869063036, 0.030522535729, 0.025115949768, 0.023436066031, 0.021974649599, 0.064536258024, 0.008313612405, 0.06177036033, 0.048983756871, 0.067785606364, 0.061247167828, 0.04918280486, 0.014720067334, 0.066276996478, 0.065778868442, 0.001147884801, 0.002173269847, 0.060995394138, 0.032004048895, 0.010245269832, 0.032640483106, 0.035135752309, 0.064952305579, 0.057110514811, 0.06839212128, 0.034930381752, 0.037496441136, 0.034470753639, 0.001030691487, 0.029783924303, 0.001825415704, 0.062381617172, 0.010776478447, 0.006974357019, 0.00709934064, 0.001527125978, 0.001876334957, 0.049278659507, 0.001614964512, 0.060485185481, 0.00330241275, 0.005065280192, 0.001489867988, 0.011712331414, 0.055520840571, 0.002533656223, 0.059921234996, 0.037876021022, 0.02121898982, 0.061200877598, 0.06047875001, 0.066584657153, 0.00591273011, 0.037668053696, 0.02092205493, 0.053227893544, 0.001396158498, 0.056375629184, 0.054103343406, 0.054189262589, 0.002742188064, 0.001308207061, 0.001534916285, 0.000995127042, 0.043647057867, 0.003732121568, 0.001574432335, 0.023278679249, 0.00489321602, 0.036177395387, 0.004993925496, 0.0594547198, 0.065475046469, 0.055925259117, 0.064980531329, 0.052751555787, 0.036519152768, 0.003224961292, 0.02451237033, 0.004148846541, 0.016271241651, 0.066020480862, 0.057740400648, 0.002637865692, 0.006867437878, 0.064046146101, 0.010300366496, 0.001206820167, 0.022474922792, 0.037876021022, 0.001204110495, 0.063167534955, 0.013576472847, 0.050014222552, 0.060911733015, 0.068902668646, 0.001030691487, 0.002196527865, 0.053507892984, 0.05852665714, 0.054587584373, 0.041890625896, 0.00186967368, 0.069415586975, 0.002897768398, 0.051316558657, 0.013672892009, 0.066471076735, 0.066990317632, 0.003866363235, 0.026055867243, 0.003377154536, 0.001490545406, 0.008421096061, 0.001480835748, 0.039840759028, 0.011521525344, 0.042091141624, 0.064046146101, 0.010454253285, 0.06814599274, 0.001829818921, 0.070397955978, 0.042642108264, 0.015925645568, 0.064680435155, 0.063833211043, 0.065523368953, 0.00128822323, 0.002214479442, 0.01806222194, 0.064632225574, 0.001417045553, 0.002091753881, 0.001498900228, 0.004204056108, 0.038405648995],
                    //     borderColor: 'rgba(255, 0, 0, 1)'
                    // }
                    // {
                    //     label: 'Temperature (C)',
                    //     data: [21.9329, 21.907, 21.8507, 21.8393, 21.7864, 21.8156, 21.7115, 21.6611, 21.6613, 21.6621, 21.622, 21.5803, 21.4889, 21.5183, 21.5293, 21.5946, 21.5808, 21.4912, 21.5068, 21.499, 21.4197, 21.3546, 21.404, 21.4328, 21.409, 21.3859, 21.3941, 21.4496, 21.4599, 21.4033, 21.3827, 21.3779, 21.3186, 21.3647, 21.3094, 21.3071, 21.2442, 21.2194, 21.2276, 21.2482, 21.2345, 21.2469, 21.2268, 21.1788, 21.183, 21.2066, 21.2219, 21.1748, 21.165, 21.1847, 21.1963, 21.2022, 21.1807, 21.2263, 21.1849, 21.2566, 21.3144, 21.3064, 21.2318, 21.2305, 21.2957, 21.2703, 21.2612, 21.2423, 21.26, 21.2913, 21.276, 21.2612, 21.26, 21.2875, 21.2333, 21.2291, 21.1921, 21.2287, 21.2333, 21.1793, 21.1683, 21.1894, 21.1561, 21.2095, 21.2076, 21.2102, 21.2144, 21.2436, 21.2287, 21.2583, 21.2697, 21.278, 21.3016, 21.3478, 21.3712, 21.4063, 21.4447, 21.4685, 21.5585, 21.5785, 21.6276, 21.6503, 21.6991, 21.7147, 21.763, 21.7557, 21.8069, 21.8248, 21.85, 21.8732, 21.8782, 21.8742, 21.9053, 21.927, 21.9253, 21.9999, 22.0157, 22.0081, 22.0254, 22.0582, 22.0806, 22.0916, 22.1359, 22.1693, 22.2139, 22.2227, 22.2574, 22.2866, 22.2944, 22.3075, 22.3199, 22.3514, 22.368, 22.4046, 22.406, 22.4046, 22.4279, 22.4218, 22.4533, 22.4607, 22.4437, 22.4374, 22.4287, 22.4292, 22.4243, 22.4054, 22.4218, 22.4031, 22.369, 22.3329, 22.3009, 22.3192, 22.3484, 22.3484, 22.3651, 22.3524, 22.3615, 22.331, 22.3155, 22.2839, 22.2953, 22.3396, 22.3098, 22.2917, 22.3274, 22.2829, 22.3199, 22.2761, 22.3245, 22.3196, 22.2808, 22.2452, 22.1975, 22.1975, 22.1906, 22.1994, 22.1712, 22.1405, 22.1794, 22.1572, 22.1401, 22.1513, 22.1258, 22.1225, 22.0779, 22.0554, 22.0029, 21.9884, 21.9491, 21.9427, 21.8576, 21.8893, 21.8681, 21.8681, 21.8833, 21.8692, 21.865, 21.8627, 21.8559, 21.8376, 21.8399, 21.8765, 21.8408, 21.8545, 21.8153, 21.8393, 21.8276, 21.8051, 21.7763, 21.7678, 21.78, 21.7088, 21.7033, 21.7111, 21.6987, 21.6516, 21.6663, 21.6768, 21.6667, 21.6211, 21.6257, 21.6196, 21.6526, 21.6503, 21.6407, 21.5953, 21.5896, 21.578, 21.552, 21.5383, 21.5972, 21.5917, 21.5772, 21.5841, 21.6175, 21.5999, 21.5803, 21.5602, 21.5782, 21.5757, 21.6018, 21.6093, 21.5963, 21.627, 21.6146, 21.6041, 21.5913, 21.5539, 21.5686, 21.5744, 21.5316, 21.5328, 21.516, 21.552, 21.5467, 21.537, 21.5374, 21.5282, 21.5141, 21.4544, 21.4553, 21.4282, 21.4704, 21.4593, 21.4548, 21.4845, 21.4639, 21.4647, 21.4469, 21.4424, 21.4565, 21.4008, 21.4357, 21.4023, 21.4164, 21.4433, 21.4534, 21.4761, 21.4996, 21.4859, 21.4576, 21.4633, 21.462, 21.4475, 21.4662, 21.4849, 21.4698, 21.4731, 21.5118, 21.5393, 21.5553, 21.5576, 21.5913, 21.6001, 21.6566, 21.696, 21.7165, 21.7887, 21.7851, 21.8244, 21.8545, 21.8664, 21.8696, 21.9385, 21.9623, 21.9905, 22.0081, 22.0436, 22.088, 22.104, 22.1496, 22.1536, 22.1899, 22.22, 22.2629, 22.2806, 22.3058, 22.3232, 22.3602, 22.3861, 22.4023, 22.4187, 22.426, 22.4575, 22.4662, 22.5023, 22.5006, 22.5225, 22.5585, 22.6013, 22.6484, 22.6211, 22.6343, 22.6631, 22.6428, 22.668, 22.689, 22.6705, 22.6507, 22.6411, 22.6015, 22.5868, 22.5543, 22.5503, 22.5383, 22.4899, 22.4729, 22.4325, 22.4105, 22.3711, 22.3596, 22.3566, 22.3442, 22.3556, 22.3213, 22.3144, 22.351, 22.3451, 22.3478, 22.3192, 22.3232, 22.3281, 22.3169, 22.2927, 22.2698, 22.261, 22.2564, 22.2139, 22.2452, 22.2185, 22.1975, 22.1496, 22.1382, 22.0939, 22.1157, 22.1076, 22.0605, 22.0335, 22.0254, 21.9993, 21.9905, 21.9221, 21.9139, 21.9236, 21.8847, 21.8435, 21.8683, 21.8179, 21.7941, 21.8078, 21.7859, 21.7737, 21.7809, 21.7636, 21.7494, 21.7052, 21.7229, 21.6854, 21.7237, 21.7088, 21.6955, 21.6781, 21.665, 21.6346, 21.623, 21.6276, 21.6346, 21.5976, 21.5909, 21.5917, 21.5524, 21.5782, 21.5677, 21.553, 21.5641, 21.5721, 21.5694, 21.5213, 21.504, 21.4626, 21.4607, 21.3949, 21.3583, 21.3607, 21.3867, 21.3785, 21.3712, 21.3397, 21.3304, 21.3415, 21.305, 21.3317, 21.2678, 21.2739, 21.2665, 21.2671, 21.2039, 21.2383, 21.2114, 21.1837, 21.2337, 21.2009, 21.1898, 21.1849, 21.1479, 21.1168, 21.1038, 21.1296, 21.0947, 21.0487, 21.0226, 21.0281, 21.0458, 21.046, 21.0638, 21.033, 21.0664, 21.0527, 20.9861, 20.9732, 20.9501, 20.965, 20.9581, 20.964],
                    //     borderColor: 'rgba(0, 0, 255, 1)'
                    // }
                    {
                        label: 'Gas (PPM)',
                        data: [5380, 5240, 5400, 5280, 5360, 5320, 5400, 5280, 5360, 5300, 5340, 5340, 5420, 5380, 5280, 5380, 5420, 5360, 5360, 5420, 5240, 5260, 5320, 5380, 5220, 5280, 5240, 5280, 5380, 5380, 5260, 5260, 5300, 5400, 5360, 5400, 5380, 5360, 5400, 5260, 5360, 5380, 5300, 5300, 5280, 5320, 5460, 5360, 5420, 5380, 5340, 5320, 5420, 5280, 5380, 5340, 5260, 5360, 5360, 5320, 5220, 5180, 5360, 5260, 5260, 5220, 5320, 5260, 5260, 5340, 5320, 5280, 5380, 5300, 5380, 5320, 5320, 5640, 5360, 5300, 5340, 5220, 5360, 5400, 5360, 5400, 5260, 5260, 5320, 5300, 5280, 5180, 5280, 5340, 5420, 5260, 5380, 5200, 5220, 5340, 5180, 5220, 5280, 5240, 5240, 5200, 5280, 5380, 5400, 5300, 5380, 5340, 5220, 5320, 5300, 5280, 5340, 5220, 5360, 5420, 5260, 5200, 5260, 5320, 5320, 5260, 5220, 5340, 5340, 5220, 5180, 5280, 5300, 5240, 5280, 5160, 5260, 5340, 5400, 5220, 5220, 5300, 5340, 5400, 5220, 5300, 5380, 5360, 5320, 5280, 5180, 5300, 5360, 5340, 5340, 5320, 5320, 5220, 5300, 5320, 5300, 5380, 5360, 5200, 5300, 5280, 5340, 5380, 5380, 5220, 5400, 5380, 5280, 5420, 5360, 5300, 5240, 5260, 5300, 5320, 5280, 5240, 5220, 5220, 5220, 5340, 5400, 5400, 5420, 5420, 5280, 5280, 5220, 5400, 5240, 5340, 5380, 5400, 5400, 5300, 5380, 5280, 5300, 5440, 5360, 5320, 5280, 5320, 5300, 5280, 5360, 5240, 5380, 5380, 5280, 5420, 5260, 5340, 5300, 5280, 5400, 5340, 5560, 5360, 5300, 5380, 5240, 5300, 5360, 5280, 5400, 5320, 5400, 5240, 5220, 5360, 5300, 5340, 5260, 5280, 5320, 5400, 5280, 5380, 5240, 5340, 5300, 5320, 5260, 5400, 5260, 5320, 5300, 5320, 5340, 5340, 5440, 5480, 5300, 5260, 5360, 5260, 5420, 5220, 5340, 5280, 5360, 5300, 5280, 5240, 5260, 5260, 5420, 5300, 5380, 5320, 5320, 5360, 5280, 5240, 5280, 5320, 5440, 5280, 5300, 5300, 5260, 5300, 5400, 5380, 5340, 5260, 5320, 5300, 5260, 5260, 5260, 5380, 5240, 5240, 5340, 5320, 5260, 5340, 5260, 5280, 5240, 5360, 5220, 5320, 5200, 5280, 5380, 5240, 5380, 5340, 5280, 5200, 5320, 5280, 5220, 5380, 5240, 5240, 5320, 5320, 5180, 6760, 6860, 6540, 6920, 6840, 6960, 6820, 6880, 6680, 6940, 7000, 6780, 6780, 6940, 6640, 6640, 6700, 6880, 6940, 6980, 7060, 6720, 6880, 6900, 6800, 6680, 6840, 7000, 6940, 6720, 6920, 6780, 6820, 6800, 6880, 6860, 6700, 6700, 6820, 6640, 6880, 6880, 7080, 7140, 6900, 6920, 7020, 7040, 6660, 6780, 6880, 6880, 6900, 6820, 6880, 6900, 6720, 6820, 6940, 6920, 6780, 6960, 6880, 6960, 6900, 7020, 6980, 6940, 7060, 6920, 7060, 6840, 7040, 6880, 6760, 6900, 6720, 7020, 6980, 6900, 6980, 7020, 7000, 6860, 6960, 6980, 6940, 6960, 6960, 7040, 6920, 7040, 6900, 6960, 7000, 7000, 6880, 7020, 6920, 7080, 6960, 7000, 6660, 7140, 7040, 6740, 6960, 6920, 6940, 6780, 6900, 6760, 6660, 6820, 6980, 6940, 7020, 6880, 7040, 6960, 6960, 6920, 7020, 7120, 6840, 6840, 6960, 6960, 6900, 6840, 6860, 6820, 6700],
                        borderColor: 'rgba(0, 255, 0, 1)'
                    }
                ]
            }
        });