/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "144ee13eab30f98f6cb3bb5a4a37ff6d"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.7f59161b.js",
    "revision": "e031f0e272235fb02f189ce371803fda"
  },
  {
    "url": "assets/js/13.8a5c49b9.js",
    "revision": "0f4a0c610fa679e0d4e095788198e5ea"
  },
  {
    "url": "assets/js/14.ff09e74e.js",
    "revision": "1158a03217f155355fb2e49698a4c4fb"
  },
  {
    "url": "assets/js/15.fecfbe04.js",
    "revision": "d2f758171856101e082ef7ffdb680425"
  },
  {
    "url": "assets/js/16.551625ee.js",
    "revision": "1ec04db975e81e77265b45457810eb4e"
  },
  {
    "url": "assets/js/17.5e677016.js",
    "revision": "ff260d94db767add2be38e746fbebc97"
  },
  {
    "url": "assets/js/18.15bfe958.js",
    "revision": "22096bcb99de541dd24897bdde26fa52"
  },
  {
    "url": "assets/js/19.e792885f.js",
    "revision": "4973cd631651cd1ba10412b406e7b52f"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.8634aa44.js",
    "revision": "a5746913d741aa688c9b0bef3b49a202"
  },
  {
    "url": "assets/js/21.16ee2aaf.js",
    "revision": "9baaa7801229a4f42161e154f1dcd18d"
  },
  {
    "url": "assets/js/22.3bc3e10b.js",
    "revision": "e56354d0da87cfac7bd552997ecfbd8d"
  },
  {
    "url": "assets/js/23.7a2ca6d4.js",
    "revision": "c6fe347412202e4d06bfa0f0cf653053"
  },
  {
    "url": "assets/js/24.9f114fb4.js",
    "revision": "4d2e191793d2f11e163aa0c2c759f901"
  },
  {
    "url": "assets/js/25.773e0d7d.js",
    "revision": "c01847143d84161effc66498d84bf623"
  },
  {
    "url": "assets/js/26.274a0bb6.js",
    "revision": "723292e840a5b19fd99284c61e8dd7a0"
  },
  {
    "url": "assets/js/27.32aeb1e4.js",
    "revision": "f337f4c80bca9563c438d00423ec88e7"
  },
  {
    "url": "assets/js/28.872f546b.js",
    "revision": "55306953c7b38a5ed3614f98acfc7117"
  },
  {
    "url": "assets/js/29.a433a7ea.js",
    "revision": "c427d4c7d70d3dccb3a3c89d767e69a5"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.ea7c03cd.js",
    "revision": "f0261ab92124132da7dc1135e995588d"
  },
  {
    "url": "assets/js/31.2e240b97.js",
    "revision": "c3fd5bafde5fdaebeae475cb87b4d641"
  },
  {
    "url": "assets/js/32.effc0d29.js",
    "revision": "90e017ee05bfdd289daf67507d29658e"
  },
  {
    "url": "assets/js/33.70b37c1e.js",
    "revision": "aa9d2287f0ab27ca501aaa1265964780"
  },
  {
    "url": "assets/js/34.5685a219.js",
    "revision": "0707c9f6bdd8935ef161aa41eb4c92cb"
  },
  {
    "url": "assets/js/35.da265bd7.js",
    "revision": "bdf7d27848a498e08b6251baeafc24db"
  },
  {
    "url": "assets/js/36.ddc6792a.js",
    "revision": "a8c8221b0c4b5d3fdc0ecf1555358da4"
  },
  {
    "url": "assets/js/37.9a1b9c17.js",
    "revision": "9eb5bd2df356d36fd37d1723b251d4ad"
  },
  {
    "url": "assets/js/38.efc8dc29.js",
    "revision": "385fea7117f605ddcf442776ce4951a6"
  },
  {
    "url": "assets/js/39.92498efe.js",
    "revision": "2944efe25d7c09d3f6b41edf4ec10607"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.08fe56d7.js",
    "revision": "9e749394e0f0e2123e95ab84e6697bf9"
  },
  {
    "url": "assets/js/41.8ac4503e.js",
    "revision": "97fc408dc7a3e66e604c493131d6daa1"
  },
  {
    "url": "assets/js/42.d4650052.js",
    "revision": "da2ff0fdf0b3e532890cd1fdb56f1b62"
  },
  {
    "url": "assets/js/43.fb4273bb.js",
    "revision": "02e0aa492c5a51049c8b84f4c2d0d037"
  },
  {
    "url": "assets/js/44.f11c8659.js",
    "revision": "7eac8b651bc6cafe458b6ba5e6650648"
  },
  {
    "url": "assets/js/45.8b2b4953.js",
    "revision": "f645e97c4ed2f2442c035c4b30c3bd60"
  },
  {
    "url": "assets/js/46.6ccfdccf.js",
    "revision": "4911ecb952361a1e73863e1b291002f0"
  },
  {
    "url": "assets/js/47.385f9faa.js",
    "revision": "c498866788cb09ed0e352ee912c81b4e"
  },
  {
    "url": "assets/js/48.830cebc7.js",
    "revision": "256dcc724ed4cc75a38138223f5dc424"
  },
  {
    "url": "assets/js/49.eef7b561.js",
    "revision": "8f32a5bf2de0300a45fa9edfd08cc239"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.373f0706.js",
    "revision": "9a1ad7b7c73feed2c9f13d645a3f1782"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.04904288.js",
    "revision": "02ae4dd016b2c620adf66be475564e20"
  },
  {
    "url": "assets/js/53.e76a4334.js",
    "revision": "7e007a784d4528f947280794ece03022"
  },
  {
    "url": "assets/js/54.039460a5.js",
    "revision": "c15d95cca2d39d887c0734c5ed693615"
  },
  {
    "url": "assets/js/55.3bcc9eda.js",
    "revision": "21e6c0148950755660326797a9c33879"
  },
  {
    "url": "assets/js/56.b17ed475.js",
    "revision": "d23d113a058e065fe78bf8eb1c663107"
  },
  {
    "url": "assets/js/57.3403c17b.js",
    "revision": "03091c942bfea3859d1e2b31a73658ea"
  },
  {
    "url": "assets/js/58.53c02d96.js",
    "revision": "e91cf4ebbc174cba86a108d6563406c9"
  },
  {
    "url": "assets/js/59.54abefbe.js",
    "revision": "876eacc909c7a34d5b6c6bf6bfc9b38f"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.3ecc7cd1.js",
    "revision": "70fe4c17173093046999358e07b300e9"
  },
  {
    "url": "assets/js/61.76fe1713.js",
    "revision": "420517b3f586bab2e29f2a7516584d3f"
  },
  {
    "url": "assets/js/62.8e6a0caf.js",
    "revision": "66fec7ef0691ef92f57fd1cc4584081a"
  },
  {
    "url": "assets/js/63.01d99200.js",
    "revision": "0c466faf654d7bc4f6606398181705ff"
  },
  {
    "url": "assets/js/64.0405925e.js",
    "revision": "48548f968f3ac8788c0b0c8ba4b014fb"
  },
  {
    "url": "assets/js/65.fe23f54f.js",
    "revision": "5d65920875e8b0ee56de79be929b05c3"
  },
  {
    "url": "assets/js/66.cbe5ce47.js",
    "revision": "a41bac5c6215060cc51cec900411107f"
  },
  {
    "url": "assets/js/67.dbe66622.js",
    "revision": "a2f27eebcd2cb3501e2ed80188ee4ae1"
  },
  {
    "url": "assets/js/68.6515afe3.js",
    "revision": "7528ad6a0ba6faf7c6dc459fefdf9ed3"
  },
  {
    "url": "assets/js/69.c7757315.js",
    "revision": "18ef172a5ba3d2b003a546b001129e5a"
  },
  {
    "url": "assets/js/7.3b40b39b.js",
    "revision": "cf9306e8b6853a2d0c307e2381ab5628"
  },
  {
    "url": "assets/js/70.6bc552c7.js",
    "revision": "48cc2dfeef9fa755fb925ff037069cfc"
  },
  {
    "url": "assets/js/71.b48ad246.js",
    "revision": "1d5ee42148292f6cdcec47d865ef153e"
  },
  {
    "url": "assets/js/72.c466a61f.js",
    "revision": "fac1d5c8028525dc3abe6efa98f04c03"
  },
  {
    "url": "assets/js/73.f3d5cf5d.js",
    "revision": "e6653462aff7f2698857e74b59ae327c"
  },
  {
    "url": "assets/js/74.6f23c6a4.js",
    "revision": "a4eabefe2679610696fa2bd3b17a0657"
  },
  {
    "url": "assets/js/75.b23255bc.js",
    "revision": "71ca71c93edf951c6b1747e4ddcb705c"
  },
  {
    "url": "assets/js/76.e86a0924.js",
    "revision": "47ffcb141dbc5753cec1f60b9c63e483"
  },
  {
    "url": "assets/js/77.57cbe0a6.js",
    "revision": "7bd512bb16ffac2d7c4e614eefd48742"
  },
  {
    "url": "assets/js/78.ef6e24db.js",
    "revision": "c85e40e020bb3e9b1b36861e5322777a"
  },
  {
    "url": "assets/js/79.8127e7f7.js",
    "revision": "81c208c735aa60a528e0e2c4e78ac9d7"
  },
  {
    "url": "assets/js/8.b1a194c7.js",
    "revision": "c4b4d4b05598f9acf02b5abde2d8e33f"
  },
  {
    "url": "assets/js/80.dbba0d11.js",
    "revision": "60e6e3f6d47d5cb02d81179ae6fb45b2"
  },
  {
    "url": "assets/js/81.cf40d4b2.js",
    "revision": "09f11e6976572cb05e1c820bfc1c9fa7"
  },
  {
    "url": "assets/js/82.6ad48b50.js",
    "revision": "dbae83c50db7de06ef19e1200ae90138"
  },
  {
    "url": "assets/js/83.5204e9f5.js",
    "revision": "6e87fb0018527340f3fc520984d82808"
  },
  {
    "url": "assets/js/84.5586a522.js",
    "revision": "aa9f76cfddb6a0715ca70438a686cc56"
  },
  {
    "url": "assets/js/85.39d842d7.js",
    "revision": "d71486446c522efc5321c81eb6216808"
  },
  {
    "url": "assets/js/86.b9742a32.js",
    "revision": "338c219f3bfc2998992994c8128538cf"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.590b664f.js",
    "revision": "2063ba5369e8f9967db63f91b0798d47"
  },
  {
    "url": "compiler/ast.html",
    "revision": "eb949c49fd9171b65ee3beb51ae9629e"
  },
  {
    "url": "compiler/binder.html",
    "revision": "7d4ec58bcde07e9ba638eb33403b8560"
  },
  {
    "url": "compiler/checker.html",
    "revision": "e583cd38f731dd3a95e792d13c0e03a8"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "82292e1e5a9102319bc8fdace7a897be"
  },
  {
    "url": "compiler/overview.html",
    "revision": "fa9906393a85a9da5d5462779bfeb0f7"
  },
  {
    "url": "compiler/parser.html",
    "revision": "5519a887ec74636e962051cf7a31aefd"
  },
  {
    "url": "compiler/program.html",
    "revision": "2eddf4c5b7b9f600523167f0f0ff8748"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "820df231a37c6a748a16c614ac969c75"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "315789155a932a39b442c8431562f04f"
  },
  {
    "url": "error/interpreting.html",
    "revision": "3aa665a4294c4f73a08a581171cd6c48"
  },
  {
    "url": "faqs/class.html",
    "revision": "48482286b7da17c28f29021bb89bbb4a"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "18b3e409a921cff5f7dfd07e1571c488"
  },
  {
    "url": "faqs/comments.html",
    "revision": "696ea8f83c4dccc7409f787d2dbe0012"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "0b01aa1d683be38c896f4aff5fc18aad"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "e433c190b6722938f1950544c945d76d"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "743f9057345246c2245f91b8b5de31d5"
  },
  {
    "url": "faqs/enums.html",
    "revision": "cd66b6db171866751c5207b915f7e0b9"
  },
  {
    "url": "faqs/function.html",
    "revision": "fa7eb7ea788814db31d6f043bfe9097c"
  },
  {
    "url": "faqs/generics.html",
    "revision": "13424d4b7ec12dd14a9064840f22de6b"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "1e117a099ed30b9e14e892ee9c7e0e59"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "ff2db8c113cef39dc45a9564732212d5"
  },
  {
    "url": "faqs/modules.html",
    "revision": "3571b191e7c02765eeeeda1e9c152b44"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "4f0b4d5c6c235581d67cb846e0ae1770"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "a14af2196eedd34bd00e08477380b462"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "65cab1e968831fbb9ee896f04cfc74be"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "7e7116cff879e63154eda890345ff43f"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "d47c48de3f89648284a6c934f3b33f8a"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "ff39008370f1841377aba8f4ebe81d83"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "811c3662dedcc59f03cbc44864886319"
  },
  {
    "url": "jsx/support.html",
    "revision": "22b3e11b1fb80f588f535e9a7cc5d844"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "23c0ce512b19999f9fd288b8d062a68c"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "c9c08ed0cd9b86efe3516bb426f1fe79"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "8e816c4456102b5a71aa219787a7eb09"
  },
  {
    "url": "project/modules.html",
    "revision": "d1c117d459e0555dfd081097a730e511"
  },
  {
    "url": "project/namespaces.html",
    "revision": "56e20ce3999eecf248f0937b2212e8ff"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "edcac8197f0c9adf5296ccfc848fb0ad"
  },
  {
    "url": "tips/barrel.html",
    "revision": "e7ba68d3bda23f916e892240464a1cc8"
  },
  {
    "url": "tips/bind.html",
    "revision": "5fb534ff47874deb6538474899f06015"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "b698173b472b3898ce4140fc444b97a9"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "7a8b61849aa9b6f9b532a4d4836becea"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "a0dba1ec1fae38bc8e8b147245b3640e"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "ea76f42f66fd61112b03b7df16c1a23f"
  },
  {
    "url": "tips/curry.html",
    "revision": "119068d2a24a0cc061279736326c665f"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "eef79fac2fa02a64585440a3493d3ee8"
  },
  {
    "url": "tips/infer.html",
    "revision": "37e60d05c9474bb799342e17d16a6f02"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "a9f83d22ed7a05755bf9b3260e3ba5b9"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "0ae6ee72476e01f1355af028a8b56361"
  },
  {
    "url": "tips/metadata.html",
    "revision": "31eeb60ec906e709de1c6edbe7fad30b"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "e7814cd4c7aa59f839f1d3105e1aebbf"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "99e3b23e1374c4fe7f423f5c701b5ea8"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "72ce88423e069f5009ffae3a5c165750"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "ab45fcff5b2803f45ed7c09573f5bf67"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "316c4eefb09062c70b1dcea36b60924c"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "642d8f1dd25e84b6468097066e8f0840"
  },
  {
    "url": "tips/truthy.html",
    "revision": "5e9c47a354df76a878371f36d8abb5ff"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "6a0d9339c1e664e9031f76a16fd17bc4"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "c6f9999298789afdd63dd2617b22e736"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "c337b4537bcf1fb95c1f9c5095fb99c9"
  },
  {
    "url": "typings/callable.html",
    "revision": "a58ef63d078747c295b6ca540ba27b63"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "d594bdf24788d3096d93fab21a84204f"
  },
  {
    "url": "typings/enums.html",
    "revision": "34fdb3fc720b216d5c3e78d3825e0816"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "d4b846244c5cd6f7d73f44f1e72a15dc"
  },
  {
    "url": "typings/freshness.html",
    "revision": "4c89ae24acdbc8620b33e96e557e41bb"
  },
  {
    "url": "typings/functions.html",
    "revision": "34a154b26e3767deda84f3fab220dbd7"
  },
  {
    "url": "typings/generices.html",
    "revision": "73e7294f7b8179677c2f0b2e50601ea7"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "54ec517c935d2b6e764686084e65846c"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "2abddd300a0ab19af71ef5658bc2b998"
  },
  {
    "url": "typings/lib.html",
    "revision": "f0ecd4135099076989dad82221ccaea6"
  },
  {
    "url": "typings/literals.html",
    "revision": "c9823c74c9242c18282a3dae29e5c478"
  },
  {
    "url": "typings/migrating.html",
    "revision": "41fc9657c6627552df0cc61decd50a5e"
  },
  {
    "url": "typings/mixins.html",
    "revision": "d7dd1ecf932f3799fd1b78f5944bad7a"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "794bf8bb76418af703b94054e8db1ddf"
  },
  {
    "url": "typings/neverType.html",
    "revision": "7337aeec31b464516259a6e6a68440af"
  },
  {
    "url": "typings/overview.html",
    "revision": "602c7de8975d793c239099c3b1fb58f7"
  },
  {
    "url": "typings/readonly.html",
    "revision": "b4cf2c67a0b1bbf482ecc08b577f5f0a"
  },
  {
    "url": "typings/thisType.html",
    "revision": "945ee3141b6435035922e463be30f486"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "e0ac45c29f8c98d7fe39edf4ab394d8c"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "8b3a5744167314f987ac1d3bf5dfe864"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "a3eb727b01dbde8ee4e2182f364be2fe"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "cb338f813c1b29afb8228aa0e2fc5964"
  },
  {
    "url": "typings/types.html",
    "revision": "051fa28a161f1aa9398f43764f1f9393"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
