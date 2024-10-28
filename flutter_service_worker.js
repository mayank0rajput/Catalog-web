'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "66f2675a653e602714fbf0df1f971362",
".git/config": "cc9fcdcb9e1dc4615738273823da88ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6c786caba9643785c72e4f0a099824e0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5e1aa68b8fc75664827b405f6f03a9e7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e0aba7600e46dbc69d70546a2f970b82",
".git/logs/refs/heads/main": "e0aba7600e46dbc69d70546a2f970b82",
".git/logs/refs/remotes/origin/main": "4362c6ae361f776bc1410f18dfbdf992",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/02/568f81f64c8584d1a025df0e40e44e7690e258": "45928caf059c037c5306bcaf2d6f61e1",
".git/objects/02/85a6188cd91649bd24fd2fc6d0f5f06e05626c": "c470f5607bd43db6e9fe62de7185925d",
".git/objects/03/1dca9a6c64da4204efe598232de827f1365f50": "8af9562a213c49729926b7d8123fc3e4",
".git/objects/03/b5e27ee626ca21ae843ccdc9487535fb998836": "eee37b9d52fc21c60b6e7959f94f7f6c",
".git/objects/04/961ba8d044f952668cf83063edb36310469871": "013f77210c1ce66c71d805adf70d505f",
".git/objects/04/ee729c65c43afb677101238b72e3600791b155": "3ca830b6e293b4f0a56c5707f0d65b45",
".git/objects/06/dba4cf6a4797a2dbf4c36053a2c27055fac43d": "1a4e33c9eb7aa25677591a87ed938b92",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/91bcf97b72f5dbe2c252180612020df2b9ede7": "44e5a3081106c8e45e61787d8ca0290e",
".git/objects/0e/3fc94633c98058341d32082813eafd6bfe2545": "f4d4b9296c5966b01acef0f29d7a0735",
".git/objects/0e/a420c2a65e96bb955f88870aaf9ea3b481ff96": "9551311f129926687fd32ab37115ebf7",
".git/objects/11/ec94dcab9d27d18ff157ff4779f021290638e8": "5a9177ef5ca9c0df9bb6e4b4bb815fbe",
".git/objects/13/387057e6a03c2827ffa15e3940e0c50a512a43": "6578f07eacb9732947e08126ff044bce",
".git/objects/14/6fef841f84ca03d00a0cc89b7280b3601a00e1": "5b288eee921c125a9408055e515208b9",
".git/objects/14/e1caffa4897d7b771b720002469d82afea087e": "3f1f092ee04bab2356107195a5a66bd7",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/4452457792aa5188f18f4d7eb71b200ec7318d": "cfa1a70c44acf2d2f7725c9e7129ceea",
".git/objects/17/82d83dfc4971b799cc05f5f6e417e1c6000f83": "86f7fcfdad7fdc654825f07466ee826d",
".git/objects/17/a27d749293fa3d2dcbc2cee9274c6170041974": "7897aec5ad571870bcf137a0ec411fa7",
".git/objects/1a/c305c30bda3a46d162b98057b0c86635e25eaa": "3a0be820703054cae42a55ab92416d5d",
".git/objects/1b/1b39d75745b3ee2a25ad8238de74e8d9ebfccd": "dd2f698d92a40edb27ec22903495e5cd",
".git/objects/1d/9c5b91a720fb8cbef9b1bad175c770fe46f5f8": "a1bd1ae0047cee80fe41fb6696ceaa4b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/a241002aad9218431bbd494544abc3e8b884e1": "ea5e49ec08e837469ab2dcf6cb01f420",
".git/objects/21/db01b0c3f9b17c61ad052a0377cde5fa48a261": "212b8c3fc2484308018080934dcd51bb",
".git/objects/26/b9ecf81e3c3220896c8ff455cd022ba64e7cc8": "c2e3cff9218c34888cee7ca17695a4bd",
".git/objects/29/62647faa8b4bf073987e182ea09f5813d6e2a5": "7343493c27e944243cf29fcabdec51d4",
".git/objects/2b/d83f9d79e178cd7c312e9c6442612ab4ac098a": "9a604d70ca9756afbaa80627bf669b64",
".git/objects/2d/015cca28ae3f9830b4a7e285c8deec97900deb": "0a949fd3ef7043b67d11dea878d8a2c0",
".git/objects/2f/9634de416c56391d06533a93446d1e02f26a79": "2eea62fe4e1090db1d21382d9db5928d",
".git/objects/2f/be4ce871691204d833adeb5780cca67e387143": "917e253eabb8135ef791acc553d185b6",
".git/objects/35/46e51f68b4291b067a5164fe1a5ebfcb9ff395": "e97733dd0ed90adef4855356cc61be49",
".git/objects/36/1627bcccca6db4adcd7dfe0fcca5c3cae9e5f9": "975f86b237af61b65cbf12cb596e92db",
".git/objects/37/e45ab1b4239168cdf80f097b9cc5fb30066606": "00ac17366598313e97db70c17fc0fb8a",
".git/objects/38/6d92e43526df7727ba9b3a45b9b4417baf96b1": "c3c5d8c7b87362a12a9a543ccc664af8",
".git/objects/39/3b7104da583a159e247fa1f35ffaf756aed283": "047c5eaab6ab7128114c4c8477f9b500",
".git/objects/39/9f91c81037da9f800e76f47c39394c2e72205c": "19fc018e7d0d1373038028987f607a07",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/b21e8cf1d8250b5fab41ac624a27cb11337fb5": "e2403c59aab841af75b11f1024568b70",
".git/objects/3c/7a38ef2e5128fde637baa3b7531e8bd03774e6": "94452a1bbdf7575b1178ecc897055abf",
".git/objects/3c/f81659237e0e5f477c8fa2a4b347fae0a12d84": "95b2403b1f99de02e0acfcdb4155f73c",
".git/objects/3d/56f7409ffd4568abe80011b20131d64dbbf43b": "99ac9ca604b76c79fd4559ebd6e93b93",
".git/objects/3e/e924b0cecac35fa6889cb89d6afc9d48bea015": "8f816cccdb53a40022061eff33a41109",
".git/objects/41/30e84679ef7b5bd678fa263f0ea153ebf6c5dd": "4ae5c3796c17b840e7d801c9c5dd5f06",
".git/objects/46/95680469bf537fe1797bb1a76b5734a714354c": "f4b8b81c38f53d831595a877584b0dc7",
".git/objects/47/bcfa44c77b5e43184f863df73fd1f3f1e0c679": "63d75abab6738d5e7eb81c5b89d4646b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/a7df9e4e31d73cc2aa389508b232a04f4dc657": "3025490229a6f5781cd9bb4cf43009ef",
".git/objects/4b/5878a8be107cca2f3362aa6994168a2e8d57da": "382cdfe46e93b5adbe381946822cf318",
".git/objects/4c/bdab3fc79ad99c1a8d1d847978780c7dc84bed": "b7bbf677828a24c3a0fde479c3b31913",
".git/objects/4d/3b686c92a570bea22e0fe8098f29d80947f874": "30edd19366a350fff87b13aa5dd2dd13",
".git/objects/4f/ceacdd1d33f031e6e71d15fbf9ca420ba7a7ed": "081ab5e3f795754198175495637a21f4",
".git/objects/50/65c0681bc69e42ce4ee1e04561837cfbb7a045": "528223fce84aeb584c55771b19eb2117",
".git/objects/51/caaeed682418a6278f6309d4024397e417c789": "bb75af868049f1d6275c04a69e78e77d",
".git/objects/52/6514703d820407bcc1a4fec2357f12b550f7f1": "2428b23688101cd59d46118ef05ec648",
".git/objects/58/94da563149df743980151e6dcbcb4a0ad93729": "83c688c0736a3a966ced57f3b1b19f13",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/08908035e3880aaa5b267b757c7a3f86a554ad": "d9690661ae92fde7507c6e15d11497e1",
".git/objects/5c/fe910722217cffd046dd1b81b89b5cbd5880b9": "2abb104573c1bd7cb9f33594076116c1",
".git/objects/63/84c5d9c8cb67c337a5456d0e5f80f7efbfa364": "cab7b12e55df70e27eb21c8ee9ba24d2",
".git/objects/64/fac3a1171c28617faae448a9c1ebd53d9e4f7c": "3ba3f1f0c6c3a2f973fa666d4f8a9a37",
".git/objects/68/81ad95ae8d6edc689483e3ef51e9f3d15f3daf": "dcbd9dc6d32a990bcf2a68a75fdf4e9e",
".git/objects/6a/0e9327106b4cacbce62e9ba0e7085daafc2a47": "4d8d72b23e1c16c23b5eb305247b266b",
".git/objects/6a/8e0807bceee3d889fec494a75c16e62e2dddd2": "9b119e0c4fa2239704e3958a6fde0fb4",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/daf01bd0f5ae61e9f6515baf82a95436eaf3e6": "306fb37faf9090712fca648a1c9d7fe7",
".git/objects/74/e0de45d41ee88580a1a3323104a5ff4aeea0e4": "8c3bc903627ba69cda56dcbd8c54abac",
".git/objects/7a/09c5e2ddfb3639bc7a31293d62b4ad5259e758": "0c7b0bc174f550a9552f6e90a0133a1d",
".git/objects/7a/8ef4c76d69d03733a27a1866a7f5bbc37033cd": "532d77ebef3dd273ab35102af0e9e928",
".git/objects/7a/e89a69dcd680ea13c958c4b5b8b0e32f62efd2": "44b147af926cb85caff3e7d39f8e3232",
".git/objects/7a/f1c1e6a8175aea3a8e654a91305f934135ab2b": "5be0067e75597f3f9fc1f4c13cdd5570",
".git/objects/7b/96113179990c863683f3e08db9c568fa31f8d9": "aa1bd9c6880037c0075c336d29e07d16",
".git/objects/7c/23367dd6cd5793b71cbf9ea123bed8a86d8611": "910fc99039bbffb0e310253cb0fa912e",
".git/objects/7d/d8c925c362f5bbae0b83a27f7d76fc45d877a2": "92d8ccd6e2acb7a1ecfb35d40554cf3e",
".git/objects/84/44fb12937b16d32259a24a6e7d91083f07a27a": "efd7c499f773b0f7d8f396aa2613858e",
".git/objects/84/ac16e04d87a3e7948664418ef41358f4e02de7": "0ed75ede026d4eaa4a6e527f2aaee74a",
".git/objects/85/8365e3302444071afa860063d4efd850f7ec80": "574c6a7d3449fc74461dab70c65beecd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/a8484d3fcd628e910c4191430a5dd791ca5cb4": "0045f7846278a2f8d217acecfd1415b7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/0351359a6c999756022c766f54e4f5fd105201": "23458f03a763900a238edb8afa33ef67",
".git/objects/95/61f723536e6809f5540c96135073eb0e6beb0c": "16c04486311344045dc1e302c679d813",
".git/objects/96/9207acdc4a78ca1c6b9393ab2e67548babbaed": "fede5c896ecfe7cf9a1c625a032e74d9",
".git/objects/97/b0cdde8ee087a72f4a9983b687813add23922d": "1327ba5fdc1b02330300e9fbb1bc3ed2",
".git/objects/97/d4cb188884b7ea4ae24c31c8dd9702c33c5387": "1c1dc10b87f94b12bb40d674916046f7",
".git/objects/99/34a833453ffe6ef1eaccdf3862bfbce8117fb8": "9be4afaa5009803d18bf0e7590c2cf72",
".git/objects/99/e8d2ccfc1cfb1fb9c5506332974d694a4adbbd": "4cfdceb6fa518a97f01627751e123a11",
".git/objects/9b/4ce010641893745ae31d57ca2439c46e81fa03": "a4eb09dc87d7d2fdbdbcf149ddb42e24",
".git/objects/a0/3b578ad0f8361f70738cc7debf7f9bfda1eecc": "0e42e29b6c1bcef38f845ea33d8e807a",
".git/objects/a0/6d5ee5fd3a1965d4092c4a1d3238885f36b415": "274b699393af4f490db99a5e6c90e353",
".git/objects/a2/87cb75064785ac17bb4aa883d2f65112b369ea": "cb4d8ae863c4bbda89c77dc7b1f3d155",
".git/objects/a3/d640248fb13d0c7c55cf12fc832624c29adcb9": "a0996682611c08578bd0b1da91d7ee24",
".git/objects/a3/f11c81407715b240cc308394e5ab9b2b29a7cd": "b4395009b4d70190eaab6352d91af9a4",
".git/objects/a8/6aa8a94369547f72439acf04f75367b79e7b3a": "74a84c53be123e4c3e786cc05b6fb67a",
".git/objects/aa/29a3ebbb759444f376f4bc7e904aeb2bf3262b": "5b5ae94ef15615972545b61761e34dd1",
".git/objects/ac/d263e33faaec5a29a56cbbc96751aec8997c29": "1a8280c66d8b905917e9a33111704c73",
".git/objects/ad/dc605b2922bee7d708963ad1f3bb2cf935ee5c": "67a4df27420e87097a2e01300ec6a1ed",
".git/objects/ae/ff201c1d54db9b49303e41ae3a3bac2bc7f9ae": "367d8498d43bca9be4cdfbd8abd83c8b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/91fd7716b4292118a0ba66fdf54bf10253746d": "f69215d63b11846fcd069145d3a24352",
".git/objects/b0/a873226b9ddf682ac5167e6e02b2f747f1ab11": "a8315222ff77d6bed9342a312a6d6f5f",
".git/objects/b0/ff2eaef9d6a81d38ecaaef974614acb6f2a00e": "5476205335ce70c398b5cf1c07c922a8",
".git/objects/b2/28df9f60186210a000b1600e5022e17a4d1ede": "74b8a9bc18b0062af9991579094ca3cf",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/960f655ce30bb52a75f81f4a6da290a7e7f8dc": "a69925db2943b07fe3fa95251a085f61",
".git/objects/b8/558da223bd3a3648a2d4ad8791737f7b296e59": "006e55222adcf750d7776607f854a822",
".git/objects/b8/aecd2c28a560e8acffac16a9aaa847c4e617c2": "021c3f97ed1ccafbd3df828572bcb299",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/43d4e5fe17916e4bb4c7c409a2008c308e4d6f": "7d41fd8b094101a768ec4c9b29d9ae51",
".git/objects/ba/fcbb4a9ff17419dd2545f2278edf3631892d00": "7e259f1f5c87854a1344b1db9f11f8c2",
".git/objects/be/914e56c6802634007d063672da707199beb5c8": "28f68eb3a929895fb717c58712534bd9",
".git/objects/be/ef628e2b8ca581d241d3ccb6c8be65342a6639": "77d6c39cf714e433777acd3310f65c6c",
".git/objects/c1/38b71542468b54751d6bb85a56f1509dce4ec6": "b8475ab603da5be5f39a7b293ab25b72",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/367afcc058efefb798d74347c8b3ccbe14a8b8": "eca9d46abf08561c7cdb55a8c4418495",
".git/objects/c7/ec623fbd3eb6cc4a8aed0bfcd777640dae57d0": "bbd69b3d94a26d4e7c46a9674b116d0b",
".git/objects/c8/2e7744fb44d5c6d3a72b13491874b50ecbe095": "b92a8f18c59009b91a8b23a71c77e3a7",
".git/objects/c8/57663e8e2611612bbab03671fc4b22e7e48432": "960b18a34b623f85dc284f2faa3bdcfb",
".git/objects/c8/9ca579b5cd68806261299fd082238aaad35cba": "e28b22404f04881d1d62440c67c1bfcd",
".git/objects/c9/f7fd9ba7fccede8f35cdc4d1c3998bf34ab6a8": "ad1ef4605e0d9f11d44465c3359eb796",
".git/objects/ca/eca234ec31e9b3457e1a33b133c391358fc6dd": "68fd57d684e19f48416fbc371ed499f8",
".git/objects/cc/9c3db5d38aed225bcb14adc866a524de611bcc": "8dfc002196191efdc14237681f02db7c",
".git/objects/d0/69e1887dd0321b0fd36a98999255efe6d23324": "c471bed4d835a7919795d7efeac79799",
".git/objects/d1/0e508b3f5dfe3eadb5ae9609ddd78e2fc576f9": "61222222c2512e1cfeede07ed2ca4168",
".git/objects/d1/f2da399893d70f778c3b3dae6b20f8e8310157": "cf07584d9b67fd0d071bfe376bff7cd1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/5a9a87c9d4ef6b80d12a5b24a9e6c27d2ca567": "f0adfcafee9aa76190dbefe847ce9e77",
".git/objects/d5/872216cf8d4749af92023b1aaff90da008816f": "d4061b36e5af92d6bf760e8d6e4d8565",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/11c644f856050038514a285ad311dec6b0e446": "0bd044bc97e64d0734aba84477d6c32e",
".git/objects/d7/129892a01d2cbce1f0ccf7b8cf9d9e5b4453d3": "e4bf6e30f8deac2c6d53f0013579ff48",
".git/objects/d8/51f572b2eb79d7fb57961e6807c690359670ae": "6ebd3ae658da557e6606e0cce27878db",
".git/objects/d9/2c9a219e222f80a1075c01c34e8d41234d590c": "8b51d067a9a70db4ef0de86ef5399010",
".git/objects/d9/abe1794169dda935ad0a0186159db00032004a": "287779ef069ffeb7641f3157c57b56c9",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e1/09ca858a46e427c8bb852e127b9a28dcceda40": "4f1aed0519fbd02c7eb2818bba42c19b",
".git/objects/e3/cf22de839ab10904a6096cc4bbedcc2c65da9c": "2980f58bc3bb33393cfb56ba624cada4",
".git/objects/e5/69ec0821460dd6f9b1c7a4ebfb1ba1bd9cdb99": "7a0ed61a71fb6d8d59d24df45e739158",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3185ad3ee1977c3e4343897008334f3819580b": "c2a7d36539cfa6b4fb4fe6158c3312c9",
".git/objects/ec/7fc58ec2e17c15cc647171495df01c4b78d166": "77d0cf88340cbb0e6200f91cf9c0171c",
".git/objects/f0/1cf17480b2251fbe60d49188cf35144d3a3703": "418ee1f29914907b13075b43f79b6e9c",
".git/objects/f0/2a176ae1ded6eeb5d8d5ef788d76ea95c498c7": "d5280c9d61752bee30c82dbe32c11fe8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/bccd62d80d10e1a6879693f3cf36a6bcdf4503": "b9634a4f0cc1755759472db757d95b4a",
".git/objects/ff/47202fb40ef8c6bb36b9135949943816c12772": "ca80530af8d94a2de1a5d1acc77a133f",
".git/ORIG_HEAD": "c4837bd1396e5b7eef8d5d1dbce8e1bd",
".git/refs/heads/main": "41508e890064b8066ee8d8b49c614e87",
".git/refs/remotes/origin/main": "41508e890064b8066ee8d8b49c614e87",
"assets/AssetManifest.bin": "1473d6e48d131f830fd99f7fe6941fe9",
"assets/AssetManifest.bin.json": "9d43fd1976cdc02bb891800e0af166f3",
"assets/AssetManifest.json": "b3fc9ec303eac2acdd1c3b9ada670357",
"assets/assets/files/catalog.json": "910bd322713335fc93d9b3a0d60410d3",
"assets/assets/images/anjeer.png": "929ec1e64b70ac540955563531e495b7",
"assets/assets/images/blackraisin.png": "e73d5a1de5a17e1f5f7f583ef8070995",
"assets/assets/images/dalchini.png": "03bbb42985e399bf6cf5c3c49326b7c4",
"assets/assets/images/khumani.png": "bb4e4971aa96c556ba8bf2444d8d9503",
"assets/assets/images/kishmish.png": "707dc3dd0cc78014972361dd8f3f5b5a",
"assets/assets/images/login_image.png": "cc0af86108c15a6effbfaafa83d6f86e",
"assets/assets/images/munakka.png": "48b384940eeba928495cb72d611147d0",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "277767f7d197c9a1c4c0f916efdcb8a6",
"assets/NOTICES": "a2214c98880c2a52115dc06c3c457488",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "21ed84dc9425d98e2c9f9c83b9748ff4",
"/": "21ed84dc9425d98e2c9f9c83b9748ff4",
"main.dart.js": "8023af225eafe33418ebe37b760153b7",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "230dcb07859034002dcbb061daaba3b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
