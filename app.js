const STORAGE_KEY = "playnite-sorter:v1";
const DATA_FILE_NAME = "playnite-sorter-session.json";
const HLTB_FILE_NAMES = ["hltb.csv", "HLTB.csv"];
const HLTB_FETCH_TIMEOUT = 6000;
const POWERSHELL_COMMAND_FILE_NAME = "powershellcommand.txt";
const EMBEDDED_HLTB_TSV = "게임 이름\t게임 Id\t소스\t\t\t\r\n428 Shibuya Scramble\t648580\tSteam\t데이터 없음\t\t\r\nA Total War Saga: Troy\t11e598b192324994abce05bad4f81b50\tEpic\t35시간 7분\t64시간 11분\t85시간 2분\r\nAlien: Isolation\t8935bb3e1420443a9789fe01758039a5\tEpic\t18시간 16분\t22시간 32분\t34시간 4분\r\nAnalogue: A Hate Story\t209370\tSteam\t3시간 5분\t4시간 49분\t6시간 10분\r\nAnother World: 20th Anniversary Edition\t233550\tSteam\t2시간 20분\t2시간 30분\t2시간 37분\r\nApe Out\tColey\tEpic\t2시간 9분\t3시간 4분\t9시간 30분\r\nAperture Desk Job\t1902490\tSteam\t32 분\t32 분\t32 분\r\nArk: Survival Evolved\taafc587fbf654758802c8e41e4fb3255\tEpic\t68시간 46분\t313시간 44분\t940시간 0분\r\nArmored Core VI: Fires of Rubicon\t1888160\tSteam\t17시간 37분\t28시간 18분\t50시간 48분\r\nAssassin's Creed Odyssey\tf3043c7d-4fb2-4d38-b85c-97530cdcb634\tDRM-free\t데이터 없음\t\t\r\nAssassin's Creed Unity\t289650\tSteam\t17시간 12분\t35시간 20분\t80시간 5분\r\nBalatro\t2379780\tSteam\t7시간 35분\t46시간 40분\t251시간 3분\r\nBaldur's Gate 2 Complete\t1207658893\tGOG\t데이터 없음\t\t\r\nBaldur's Gate II: Enhanced Edition\t257350\tSteam\t46시간 12분\t81시간 5분\t151시간 5분\r\nBaldur's Gate III\t1086940\tSteam\t72시간 51분\t116시간 22분\t181시간 6분\r\nBaldur's Gate: Enhanced Edition\t228280\tSteam\t31시간 15분\t54시간 17분\t95시간 19분\r\nBaldur's Gate: The Original Saga\t1207658886\tGOG\t--\t74시간 30분\t125시간 19분\r\nBatman Arkham Asylum Game of the Year Edition\tGodwit\tEpic\t11시간 5분\t15시간 31분\t25시간 22분\r\nBatman Arkham City - Game of the Year Edition\tEgret\tEpic\t13시간 30분\t22시간 37분\t59시간 11분\r\nBatman: Arkham Knight\tCowbird\tEpic\t17시간 2분\t31시간 28분\t51시간 17분\r\nBatman: The Telltale Series\t498240\tSteam\t8시간 23분\t9시간 9분\t9시간 20분\r\nBattle Brothers\t365360\tSteam\t32시간 20분\t56시간 12분\t99시간 45분\r\nBattleTech\t637090\tSteam\t51시간 5분\t75시간 30분\t148시간 46분\r\nBetrayal at Krondor\t1207660953\tGOG\t50시간 5분\t57시간 27분\t70시간 57분\r\nBetrayal in Antara\t1207660983\tGOG\t59시간 55분\t69시간 46분\t--\r\nBIOHAZARD RE:2\t1a70ca03-cfea-4545-b969-c8b751847aa0\tDRM-free\t데이터 없음\t\t\r\nBioShock 2 Remastered\tb22ce34b4ce0408c97a888554447479b\tEpic\t10시간 34분\t14시간 24분\t23시간 44분\r\nBioShock Infinite\t8870\tSteam\t11시간 32분\t16시간 5분\t28시간 32분\r\nBioShock Infinite: Complete Edition\tf9d6f0530ea140909f8e8a997a7532d7\tEpic\t11시간 32분\t16시간 5분\t28시간 32분\r\nBioShock Remastered\tbc2c95c6ff564a16b26644f1d3ac3c55\tEpic\t10시간 34분\t14시간 24분\t23시간 44분\r\nBlackwell Unbound\t80340\tSteam\t2시간 32분\t2시간 48분\t4시간 32분\r\nBorderlands 2\tDodo\tEpic\t30시간 5분\t54시간 51분\t130시간 2분\r\nBorderlands 3\tCatnip\tEpic\t23시간 24분\t46시간 25분\t84시간 16분\r\nBorderlands: The Pre-Sequel\tTurkey\tEpic\t18시간 6분\t29시간 22분\t60시간 54분\r\nBraid\t26800\tSteam\t5시간 4분\t5시간 57분\t7시간 48분\r\nBrothers: A Tale of Two Sons\tTamarind\tEpic\t3시간 4분\t3시간 30분\t4시간 2분\r\nBrütal Legend\t1207659253\tGOG\t9시간 14분\t13시간 58분\t24시간 50분\r\nBrütal Legend\t225260\tSteam\t9시간 14분\t13시간 58분\t24시간 50분\r\nCapcom Arcade Stadium\t1515950\tSteam\t1시간 23분\t10시간 20분\t29시간 4분\r\nCarcassonne\tThrush\tEpic\t34 분\t3시간 15분\t17시간 6분\r\nCarpe Diem\t423880\tSteam\t9 분\t10 분\t13 분\r\nCDPR Goodie Pack Content\t1185685769\tGOG\t데이터 없음\t\t\r\nCeleste\tSalt\tEpic\t8시간 18분\t14시간 38분\t39시간 11분\r\nChrono Trigger\t41e8eece-d466-46f5-a507-bee1cc4cec16\t에뮬\t데이터 없음\t\t\r\nCities: Skylines\tbcbc03d8812a44c18f41cf7d5f849265\tEpic\t27시간 30분\t68시간 32분\t182시간 9분\r\nClose to the Sun\tSilene\tEpic\t4시간 6분\t5시간 12분\t6시간 8분\r\nCompany of Heroes 2\t231430\tSteam\t15시간 49분\t25시간 55분\t64시간 0분\r\nControl\t870780\tSteam\t12시간 45분\t25시간 17분\t38시간 46분\r\nCounter-Strike 2\t730\tSteam\t145시간 27분\t373시간 3분\t742시간 33분\r\nCrusader Kings II\t203770\tSteam\t67시간 3분\t246시간 12분\t421시간 27분\r\nCrypt of the NecroDancer\t247080\tSteam\t13시간 59분\t26시간 7분\t393시간 21분\r\nCyberpunk 2077\t1091500\tSteam\t26시간 3분\t63시간 8분\t108시간 37분\r\nDaemon X Machina\tf4f0d39fbb4640e0be62aa91d9eca87d\tEpic\t15시간 8분\t22시간 34분\t63시간 7분\r\nDark Devotion\t718590\tSteam\t11시간 14분\t15시간 31분\t28시간 16분\r\nDark Souls: Prepare to Die Edition\t211420\tSteam\t45시간 49분\t62시간 47분\t105시간 54분\r\nDarkest Dungeon\t262060\tSteam\t56시간 45분\t85시간 7분\t128시간 14분\r\nDead Island 2\tCrow\tEpic\t16시간 9분\t26시간 41분\t39시간 16분\r\nDeath Stranding\tBoga\tEpic\t40시간 31분\t60시간 3분\t112시간 59분\r\nDeathloop\t3206dba3f9b14fd3b01c18f9dcbc864a\tEpic\t16시간 23분\t24시간 29분\t35시간 51분\r\nDeiland\t760620\tSteam\t11시간 1분\t13시간 2분\t15시간 28분\r\nDesktop Dungeons\t226620\tSteam\t19시간 17분\t47시간 22분\t129시간 44분\r\nDetroit: Become Human\t1222140\tSteam\t12시간 4분\t15시간 44분\t32시간 10분\r\nDeus Ex: Game of the Year Edition\t1207658995\tGOG\t22시간 56분\t28시간 42분\t39시간 5분\r\nDeus Ex: Human Revolution - Director's Cut\t238010\tSteam\t23시간 1분\t31시간 5분\t46시간 40분\r\nDeus Ex: Invisible War\t1207659068\tGOG\t9시간 4분\t13시간 27분\t18시간 58분\r\nDev Guy\t351800\tSteam\t37 분\t41 분\t53 분\r\nDisco Elysium\t632470\tSteam\t23시간 42분\t33시간 8분\t48시간 12분\r\nDishonored\t205100\tSteam\t12시간 8분\t18시간 29분\t37시간 42분\r\nDivinity: Original Sin 2\t765974c8-60e3-42f2-a51c-a11b6fce5e5b\tDRM-free\t데이터 없음\t\t\r\nDmC: Devil May Cry\t220440\tSteam\t9시간 9분\t12시간 10분\t40시간 38분\r\nDNF Duel\t82cdbdf05c61474d89c4f9e8a8bf0ea4\tEpic\t1시간 37분\t14시간 33분\t113시간 21분\r\nDoom\t379720\tSteam\t11시간 34분\t16시간 26분\t27시간 7분\r\nDoom 64\t5b60142e120c4f2d88027595c21d4a04\tEpic\t7시간 8분\t9시간 13분\t10시간 32분\r\nDoor Kickers\t248610\tSteam\t7시간 37분\t17시간 7분\t37시간 45분\r\nDr. Langeskov, The Tiger, and The Terribly Cursed Emerald: A Whirlwind Heist\t409160\tSteam\t25 분\t1시간 14분\t1시간 45분\r\nDragon Quest XI S: Echoes of an Elusive Age - Definitive Edition\t1295510\tSteam\t57시간 33분\t89시간 55분\t129시간 58분\r\nDragon's Dogma II\ta1c25647-78d4-4e74-8f93-2c8acd1c8407\tDRM-free\t데이터 없음\t\t\r\nDrawful 2\t442070\tSteam\t1시간 54분\t6시간 29분\t6시간 33분\r\nDying Light\t239140\tSteam\t18시간 14분\t36시간 28분\t64시간 20분\r\nElden Ring\td8b1807e-18d0-4db9-8f92-bea269da01e4\tDRM-free\t데이터 없음\t\t\r\nEnter the Gungeon\tGarlic\tEpic\t22시간 27분\t61시간 51분\t160시간 2분\r\nEVE burst error\t147cda49-a8a7-42ce-9a6b-826daaa7dd53\t에뮬\t11시간 45분\t--\t25시간 50분\r\nEvil Maze\t484950\tSteam\t--\t--\t3시간 51분\r\nExpeditions: Conquistador\t237430\tSteam\t24시간 32분\t28시간 10분\t39시간 0분\r\nEye of the Beholder\t1432575012\tGOG\t10시간 53분\t13시간 27분\t19시간 31분\r\nEye of the Beholder II: The Legend of Darkmoon\t1432576039\tGOG\t12시간 18분\t16시간 46분\t20시간 21분\r\nEye of the Beholder III: Assault on Myth Drannor\t1432576327\tGOG\t9시간 45분\t15시간 0분\t20시간 33분\r\nF.E.A.R.\t21090\tSteam\t8시간 10분\t10시간 5분\t12시간 13분\r\nF.E.A.R. 2: Project Origin\t16450\tSteam\t7시간 6분\t8시간 42분\t10시간 52분\r\nF.E.A.R. Extraction Point\t21110\tSteam\t4시간 23분\t5시간 11분\t5시간 57분\r\nF.E.A.R. Perseus Mandate\t21120\tSteam\t5시간 1분\t6시간 8분\t7시간 3분\r\nF1 2015\t286570\tSteam\t14시간 4분\t25시간 35분\t47시간 14분\r\nF1 Manager 2024\t03c9fe3b2869452ba8433ee7708a3e93\tEpic\t21시간 5분\t56시간 27분\t111시간 19분\r\nFallout 3: Game of the Year Edition\t22370\tSteam\t26시간 23분\t58시간 0분\t106시간 20분\r\nFallout 4\t377160\tSteam\t27시간 48분\t83시간 15분\t160시간 30분\r\nFallout Tactics: Brotherhood of Steel\t908f75e7f1624819a70c27f543741dcd\tEpic\t25시간 34분\t45시간 38분\t49시간 13분\r\nFallout: A Post Nuclear Role Playing Game\t38400\tSteam\t16시간 12분\t22시간 53분\t32시간 4분\r\nFallout: New Vegas\t22380\tSteam\t26시간 52분\t60시간 17분\t130시간 47분\r\nfire emblem awakening\tf39b86a2-aadb-4cf4-803b-6f957251425c\t에뮬\t데이터 없음\t\t\r\nFire Emblem: Three Houses\tcfaeab16-fb4c-4d97-951c-4f83fd19c87f\t에뮬\t49시간 14분\t76시간 38분\t210시간 16분\r\nFire Pro Wrestling World\t564230\tSteam\t27시간 47분\t66시간 27분\t139시간 19분\r\nFlashback\t1486529526\tGOG\t6시간 10분\t6시간 31분\t8시간 40분\r\nFootball Manager 2024\tda2038ef19e94554898056d79168b3f8\tEpic\t138시간 31분\t224시간 0분\t415시간 35분\r\nFootball Manager 2024\t7e9ca4940ed0427699f687f538d8f72d\tEpic\t138시간 31분\t224시간 0분\t415시간 35분\r\nFootball Manager 2024\t08c5c041aa2c4fe08fbd87c08fb37c36\tEpic\t138시간 31분\t224시간 0분\t415시간 35분\r\nFor Honor\t304390\tSteam\t7시간 2분\t10시간 59분\t18시간 15분\r\nFor Honor - Public Test\t654310\tSteam\t데이터 없음\t\t\r\nFor the King\tDiscus\tEpic\t11시간 56분\t34시간 26분\t75시간 8분\r\nFTL: Faster Than Light\t212680\tSteam\t12시간 5분\t31시간 44분\t112시간 51분\r\nGalactic Civilizations II: Endless Universe\t202200\tSteam\t20시간 22분\t33시간 12분\t83시간 48분\r\nGemini Rue\t80310\tSteam\t6시간 54분\t7시간 56분\t11시간 1분\r\nGensei Suikoden Plus\t3078590\tSteam\t데이터 없음\t\t\r\nGeometry Dash\t322170\tSteam Family Sharing\t22시간 5분\t209시간 43분\t1301시간 58분\r\nGhost of Tsushima\tac3c23f2-55bf-4557-9b5d-71f5a9346a66\tDRM-free\t데이터 없음\t\t\r\nGhostwire: Tokyo\t007ff8f4e30845a687e66aa77eb3e965\tEpic\t11시간 22분\t22시간 50분\t42시간 2분\r\nGoat of Duty\t555000\tSteam\t1시간 46분\t--\t38시간 21분\r\nGod of War\tf9b3e05b-8b28-4a73-b236-f11fe18788fe\tDRM-free\t데이터 없음\t\t\r\nGod of War Ragnarök\t8bb3d1c5-0dd8-4e5b-9b52-252a9828764a\tDRM-free\t데이터 없음\t\t\r\nGODDESS OF VICTORY: NIKKE\t069d6dfb-8ca8-4ee7-8a2b-2555d51adbb0\t폰겜\t데이터 없음\t\t\r\nGod's Trigger\t9bc4423d873845739cc99ab69b6bfbe9\tEpic\t5시간 10분\t7시간 11분\t9시간 55분\r\nGone Home: Console Edition\tFlier\tEpic\t1시간 59분\t2시간 32분\t3시간 6분\r\nGrand Theft Auto V\t9d2d0eb64d5c44529cece33fe2a46482\tEpic\t32시간 3분\t51시간 27분\t88시간 47분\r\nGrand Theft Auto V Enhanced\t8769e24080ea413b8ebca3f1b8c50951\tEpic\t32시간 3분\t51시간 27분\t88시간 47분\r\nHacknet\t365450\tSteam\t7시간 11분\t8시간 53분\t11시간 19분\r\nHalf Minute Hero: Super Mega Neo Climax Ultimate Boy\t214830\tSteam\t4시간 49분\t13시간 42분\t24시간 55분\r\nHalf-Life\t70\tSteam\t11시간 57분\t14시간 5분\t15시간 22분\r\nHalf-Life 2\t220\tSteam\t12시간 53분\t15시간 37분\t19시간 53분\r\nHalf-Life 2: Deathmatch\t320\tSteam\t2시간 25분\t9시간 45분\t21시간 33분\r\nHalf-Life Deathmatch: Source\t360\tSteam\t2시간 30분\t2시간 40분\t3시간 20분\r\nHalf-Life: Source\t280\tSteam\t11시간 8분\t13시간 7분\t14시간 6분\r\nHand of Fate 2\t808f0dfbf3b84c2680793724d7f207bf\tEpic\t22시간 12분\t43시간 7분\t106시간 45분\r\nHeadsnatchers\t797410\tSteam\t50 분\t3시간 16분\t10시간 40분\r\nHeavy Rain\t960910\tSteam\t9시간 58분\t12시간 2분\t22시간 10분\r\nHellion\t588210\tSteam\t90시간 0분\t150시간 0분\t212시간 0분\r\nHer Story\t368370\tSteam\t2시간 24분\t3시간 20분\t4시간 9분\r\nHitman\tBarbet\tEpic\t10시간 42분\t23시간 46분\t92시간 41분\r\nHitman: Absolution\t203140\tSteam\t12시간 19분\t19시간 46분\t37시간 0분\r\nHitman: Blood Money\t6860\tSteam\t11시간 50분\t16시간 7분\t20시간 26분\r\nHob\tLyrebird\tEpic\t10시간 20분\t11시간 24분\t16시간 56분\r\nHogwarts Legacy\tfa4240e57a3c46b39f169041b7811293\tEpic\t26시간 42분\t45시간 15분\t72시간 2분\r\nHyper Light Drifter\tParakeet\tEpic\t7시간 45분\t11시간 47분\t27시간 17분\r\nIcewind Dale II Complete\t1207658891\tGOG\t데이터 없음\t\t\r\nIcewind Dale: Enhanced Edition\t321800\tSteam\t30시간 32분\t40시간 56분\t61시간 54분\r\nIdle Champions of the Forgotten Realms\t627690\tSteam\t39시간 29분\t87시간 20분\t5811시간 40분\r\nIndiana Jones and the Fate of Atlantis\td1e977d3-b147-42e8-8470-8a682e0d3f31\t두기런처\t8시간 10분\t10시간 0분\t10시간 9분\r\nIndie Game: The Movie\t207080\tSteam\t데이터 없음\t\t\r\nInjustice: Gods Among Us - Ultimate Edition\t242700\tSteam\t5시간 1분\t11시간 33분\t25시간 6분\r\nInsurgency\t222880\tSteam\t12시간 47분\t34시간 4분\t59시간 15분\r\nInto the Breach\t590380\tSteam\t5시간 44분\t20시간 0분\t52시간 53분\r\nInvisible, Inc.\t243970\tSteam\t7시간 14분\t18시간 34분\t86시간 32분\r\nJagged Alliance 2\t1207658696\tGOG\t10시간 0분\t20시간 0분\t57시간 18분\r\nJagged Alliance 2: Gold Pack\t12370\tSteam\t36시간 42분\t52시간 33분\t68시간 4분\r\nJagged Alliance 2: Gold Pack\t12380\tSteam\t36시간 42분\t52시간 33분\t68시간 4분\r\nJagged Alliance: Gold Edition\t283270\tSteam\t10시간 34분\t25시간 54분\t29시간 50분\r\nJudgment\t2058180\tSteam\t27시간 39분\t46시간 12분\t99시간 24분\r\nJurassic World Evolution 2\t70883ed009994efe86d00a5fb8f2b52e\tEpic\t6시간 0분\t36시간 27분\t104시간 33분\r\nJust Cause 4\tKakopo\tEpic\t16시간 7분\t28시간 0분\t54시간 45분\r\nKakyuusei\t170022e6-312d-43fc-85d1-246e03e48cce\t에뮬\t--\t65시간 0분\t--\r\nKards: The WWII Card Game\t544810\tSteam\t데이터 없음\t\t\r\nKathy Rain\t370910\tSteam\t6시간 1분\t6시간 35분\t6시간 58분\r\nKingdom Come: Deliverance\tEel\tEpic\t42시간 39분\t80시간 49분\t136시간 38분\r\nKingdom Come: Deliverance II\t1771300\tSteam\t55시간 5분\t98시간 31분\t143시간 12분\r\nL.A. Noire\t110800\tSteam\t22시간 11분\t28시간 59분\t42시간 14분\r\nLara Croft and the Temple of Osiris\t289690\tSteam\t5시간 14분\t7시간 3분\t13시간 30분\r\nLayers of Fear\t391720\tSteam\t데이터 없음\t\t\r\nLeft 4 Dead 2\t550\tSteam\t10시간 12분\t27시간 51분\t61시간 21분\r\nLEGO Batman 2: DC Super Heroes\tGrackle\tEpic\t8시간 56분\t15시간 26분\t24시간 8분\r\nLEGO Batman 3: Beyond Gotham\tGull\tEpic\t10시간 9분\t19시간 12분\t36시간 0분\r\nLEGO Batman: The Videogame\tGoldeneye\tEpic\t9시간 56분\t16시간 16분\t29시간 18분\r\nLEGO Star Wars: The Skywalker Saga\tc390e58246ea4a778acd26473a489b48\tEpic\t18시간 35분\t34시간 40분\t90시간 2분\r\nLEGO The Hobbit\t285160\tSteam\t8시간 51분\t16시간 27분\t36시간 51분\r\nLEGO The Lord of the Rings\t214510\tSteam\t10시간 3분\t16시간 55분\t33시간 38분\r\nLethal League\t261180\tSteam\t7시간 25분\t10시간 50분\t20시간 14분\r\nLife Is Strange\t319630\tSteam\t14시간 8분\t16시간 26분\t18시간 31분\r\nLimbo\t48000\tSteam\t3시간 34분\t4시간 10분\t6시간 44분\r\nLisa: The Painful\t335670\tSteam\t13시간 2분\t15시간 5분\t19시간 8분\r\nLossless Scaling\t993090\tSteam\t데이터 없음\t\t\r\nMad Games Tycoon\t341000\tSteam\t22시간 58분\t31시간 30분\t41시간 58분\r\nMahjong Soul\t2739990\tSteam\t--\t69시간 0분\t--\r\nMangui\t3220010\tSteam\t--\t--\t--\r\nManual Samuel\t504130\tSteam\t데이터 없음\t\t\r\nMarvel Rivals\t2767030\tSteam\t18시간 14분\t58시간 39분\t130시간 26분\r\nMarvel Snap\t1997040\tSteam\t66시간 3분\t100시간 34분\t--\r\nMarvel's Midnight Suns\t49550aa9fcd74552ae07c4e9f2c262fe\tEpic\t40시간 25분\t65시간 41분\t96시간 43분\r\nMarvel's Spider-Man 2\tc67065a1-ff29-46e7-8cf6-a3a0e65b6273\tDRM-free\t데이터 없음\t\t\r\nMass Effect Legendary Edition\t1328670\tSteam\t데이터 없음\t\t\r\nMax Gentlemen\t257710\tSteam\t15 분\t16 분\t46 분\r\nMecha BREAK Playtest\t3016800\tSteam\t데이터 없음\t\t\r\nMetal Gear Solid V: Ground Zeroes\t311340\tSteam\t1시간 52분\t6시간 40분\t20시간 55분\r\nMetal Gear Solid V: The Phantom Pain\t287700\tSteam\t45시간 41분\t81시간 9분\t163시간 18분\r\nMetro 2033\t43110\tSteam\t9시간 31분\t12시간 3분\t20시간 27분\r\nMetro Redux\t286690\tSteam\t9시간 3분\t11시간 32분\t23시간 41분\r\nMetro: Last Light Redux\t287390\tSteam\t9시간 46분\t13시간 31분\t27시간 42분\r\nMiddle-earth: Shadow of Mordor\t241930\tSteam\t15시간 44분\t23시간 56분\t32시간 53분\r\nMonkey Island 2 Special Edition: LeChuck's Revenge\t32460\tSteam\t7시간 3분\t7시간 55분\t7시간 59분\r\nMonster Hunter: World\t582010\tSteam\t46시간 29분\t115시간 20분\t429시간 31분\r\nMoonring\t2373630\tSteam\t18시간 52분\t26시간 50분\t--\r\nMortal Kombat X\t307780\tSteam\t5시간 41분\t16시간 50분\t69시간 13분\r\nMount & Blade: Warband\t48700\tSteam\t73시간 41분\t111시간 35분\t232시간 33분\r\nMutazione\t1fe19232c0f7476a8e99fd8752e800c2\tEpic\t6시간 9분\t8시간 19분\t10시간 44분\r\nNeverwinter Nights: Diamond\t1207658890\tGOG\t71시간 0분\t99시간 46분\t105시간 0분\r\nNieR:Automata\te79f784f-df20-49ed-b2ae-cf86be5d4439\tDRM-free\t데이터 없음\t\t\r\nNobunaga's Ambition: Tendou with Power Up Kit\t363110\tSteam Japan\t데이터 없음\t\t\r\nOddworld: Abe's Oddysee\t15700\tSteam\t12시간 43분\t14시간 25분\t14시간 26분\r\nOrwell: Keeping an Eye on You\t491950\tSteam\t4시간 33분\t6시간 11분\t9시간 39분\r\nOur Adventurer Guild\t2026000\tSteam\t61시간 11분\t65시간 36분\t66시간 12분\r\nOuter Wilds\t753640\tSteam\t17시간 5분\t22시간 42분\t28시간 59분\r\nOvercooked\tSage\tEpic\t7시간 45분\t10시간 18분\t12시간 4분\r\nPapers, Please\t239030\tSteam\t5시간 1분\t8시간 8분\t16시간 10분\r\nParty Hard\t356570\tSteam\t6시간 13분\t10시간 0분\t14시간 8분\r\nPathfinder: Kingmaker\t640820\tSteam\t76시간 49분\t133시간 0분\t209시간 0분\r\nPathfinder: Wrath of the Righteous - Enhanced Edition\t1184370\tSteam\t데이터 없음\t\t\r\nPathway\t8fceb562623c430db9bb6abf0549c43e\tEpic\t10시간 59분\t16시간 57분\t37시간 16분\r\nPayday 2\t218620\tSteam\t27시간 4분\t154시간 59분\t537시간 57분\r\nPersona 5 Royal\t1687950\tSteam\t101시간 16분\t122시간 44분\t140시간 33분\r\nPhantom Doctrine\t559100\tSteam\t34시간 35분\t54시간 18분\t113시간 22분\r\nPillars of Eternity\t291650\tSteam\t36시간 19분\t64시간 7분\t110시간 44분\r\nPillars of Eternity II: Deadfire\t560130\tSteam\t41시간 52분\t66시간 5분\t98시간 16분\r\nPlanet Zoo\t703080\tSteam\t34시간 46분\t59시간 52분\t98시간 19분\r\nPlants vs. Zombies: GOTY Edition\t3590\tSteam\t8시간 11분\t17시간 58분\t42시간 43분\r\nPlease, Don't Touch Anything\t354240\tSteam\t1시간 14분\t1시간 56분\t2시간 59분\r\nPleasure Puzzle: Portrait\t939620\tSteam\t데이터 없음\t\t\r\nPoint Perfect\t303840\tSteam\t3시간 21분\t--\t--\r\nPortal 2\t620\tSteam\t8시간 32분\t13시간 43분\t22시간 31분\r\nPrey\t52d88e9a6df248da913c8e99f1e4c526\tEpic\t16시간 22분\t27시간 54분\t46시간 18분\r\nPrismata\t490220\tSteam\t--\t--\t--\r\nProject Zomboid\t108600\tSteam\t60시간 20분\t157시간 22분\t433시간 6분\r\nPUBG: Battlegrounds\t578080\tSteam\t104시간 15분\t250시간 44분\t508시간 17분\r\nPUBG: Experimental Server\t813000\tSteam\t데이터 없음\t\t\r\nPUBG: Test Server\t622590\tSteam\t데이터 없음\t\t\r\nRealms of Arkania 2 - Star Trail Classic\t270750\tSteam\t29시간 1분\t47시간 45분\t60시간 0분\r\nRealms of Arkania III: Shadows over Riva\t270760\tSteam\t데이터 없음\t\t\r\nRealms of Arkania: Blade of Destiny\t267670\tSteam\t데이터 없음\t\t\r\nRebel Cops\t970960\tSteam\t14시간 9분\t19시간 32분\t27시간 31분\r\nRed Dead Redemption 2\t1174180\tSteam\t50시간 43분\t84시간 37분\t193시간 52분\r\nResident Evil 2 \"R.P.D. Demo\"\t1168280\tSteam\t32 분\t38 분\t43 분\r\nRESIDENT EVIL 3 RE:3\t22bc3525-97b1-4722-b628-63ad47434741\tDRM-free\t데이터 없음\t\t\r\nRESIDENT EVIL 4 RE:4\tbff1e6e1-adc4-421f-a09f-91fb4d4b479b\tDRM-free\t데이터 없음\t\t\r\nRetsnom\t382920\tSteam\t--\t--\t--\r\nRiichi City\tff5d87c8-cf1b-43e2-a804-1d6f58c48bd1\t폰겜\t데이터 없음\t\t\r\nRise of the Tomb Raider\tf7cc1c999ac146f39b356f53e3489514\tEpic\t14시간 11분\t23시간 42분\t38시간 38분\r\nRoadwarden\t1155970\tSteam\t11시간 37분\t19시간 23분\t31시간 45분\r\nRogue Legacy\t241600\tSteam\t16시간 26분\t26시간 21분\t38시간 57분\r\nRollerCoaster Tycoon 2: Triple Thrill Pack\t285330\tSteam\t19시간 21분\t45시간 0분\t91시간 50분\r\nRollerCoaster Tycoon 3: Complete Edition\t281a47e363284108b82bf05c1a612145\tEpic\t20시간 28분\t57시간 29분\t190시간 1분\r\nS.T.A.L.K.E.R.: Call of Pripyat\t41700\tSteam\t15시간 4분\t23시간 34분\t31시간 40분\r\nS.T.A.L.K.E.R.: Call of Prypiat - Enhanced Edition\t2427430\tSteam\t15시간 4분\t23시간 34분\t31시간 40분\r\nS.T.A.L.K.E.R.: Clear Sky\t20510\tSteam\t12시간 54분\t22시간 28분\t36시간 29분\r\nS.T.A.L.K.E.R.: Clear Sky - Enhanced Edition\t2427420\tSteam\t12시간 54분\t22시간 28분\t36시간 29분\r\nS.T.A.L.K.E.R.: Shadow of Chernobyl\t4500\tSteam\t15시간 2분\t24시간 18분\t41시간 15분\r\nS.T.A.L.K.E.R.: Shadow of Chornobyl - Enhanced Edition\t2427410\tSteam\t15시간 2분\t24시간 18분\t41시간 15분\r\nSaints Row: The Third\t55230\tSteam\t15시간 24분\t27시간 29분\t45시간 44분\r\nSakura Taisen\t3667d1be-5525-4291-98c4-89a49c3eb373\t에뮬\t18시간 23분\t27시간 17분\t49시간 13분\r\nSamurai Shodown NeoGeo Collection: Limited Edition Pack\t75553c71fa1744a4be89f71d5b862eae\tEpic\t3시간 16분\t6시간 7분\t31시간 8분\r\nSatellite Reign\t268870\tSteam\t21시간 4분\t30시간 48분\t40시간 36분\r\nSekiro: Shadows Die Twice\t83ee0d43-19df-443d-9825-f03cbae42c67\tDRM-free\t데이터 없음\t\t\r\nSengoku Rance\t3d88460b-3d4f-4d8f-a5cf-52e6cb10d55c\tDRM-free\t데이터 없음\t\t\r\nSerke Demo\t3116650\tSteam\t데이터 없음\t\t\r\nSevered Steel\t7179f095efcc4f92a950a6d9dbd9c602\tEpic\t3시간 1분\t6시간 14분\t21시간 31분\r\nShadow of the Tomb Raider: Definitive Edition\t890d9cf396d04922a1559333df419fed\tEpic\t12시간 53분\t26시간 2분\t42시간 28분\r\nShadow Warrior\t233130\tSteam\t12시간 16분\t15시간 27분\t35시간 54분\r\nShadowrun Returns\tdc29cb42f32e4a17af1d68c715fa459c\tEpic\t11시간 36분\t14시간 23분\t17시간 46분\r\nShadowrun Returns\t234650\tSteam\t11시간 36분\t14시간 23분\t17시간 46분\r\nShadowrun: Dragonfall - Director's Cut\t5b41454974be4d5883056ba298e53675\tEpic\t20시간 36분\t29시간 28분\t41시간 40분\r\nShadowrun: Dragonfall - Director's Cut\t300550\tSteam\t20시간 36분\t29시간 28분\t41시간 40분\r\nShadowrun: Hong Kong\t41470cb5755440b8b55ec3f94351133a\tEpic\t20시간 19분\t31시간 22분\t45시간 8분\r\nShadowrun: Hong Kong - Extended Edition\t346940\tSteam\t20시간 29분\t41시간 41분\t47시간 39분\r\nSherlock Holmes: Crimes & Punishments\t0afb9d54dd3743a582b48b506466d3f8\tEpic\t12시간 35분\t14시간 47분\t15시간 27분\r\nShin Megami Tensei: Strange Journey\tad5cedd3-f0cc-47ca-a8e3-0f2ce8f40689\t에뮬\t데이터 없음\t\t\r\nSid Meier's Civilization V\t8930\tSteam\t39시간 36분\t123시간 42분\t430시간 50분\r\nSid Meier's Civilization VI\tKinglet\tEpic\t23시간 18분\t99시간 15분\t387시간 36분\r\nSilent Storm\t254960\tSteam\t36시간 58분\t41시간 46분\t47시간 39분\r\nSilent Storm: Sentinels\t254980\tSteam\t23시간 45분\t31시간 28분\t33시간 0분\r\nSins of a Solar Empire: Rebellion\t204880\tSteam\t10시간 10분\t49시간 2분\t174시간 47분\r\nSkyrim Script Extender (SKSE)\t365720\tSteam\t데이터 없음\t\t\r\nSleeping Dogs: Definitive Edition\t307690\tSteam\t14시간 20분\t23시간 32분\t41시간 41분\r\nSnake Pass\t544330\tSteam\t5시간 17분\t8시간 21분\t12시간 18분\r\nSoma\t1439487606\tGOG\t9시간 4분\t10시간 55분\t11시간 4분\r\nSoulCalibur VI\t544750\tSteam\t6시간 56분\t19시간 18분\t38시간 43분\r\nSpace Channel 5: Part 2\t71260\tSteam\t2시간 42분\t5시간 15분\t10시간 27분\r\nSpec Ops: The Line\t50300\tSteam\t6시간 7분\t7시간 32분\t16시간 17분\r\nStar Wars Battlefront II: Celebration Edition\tMtMassive\tEpic\t데이터 없음\t\t\r\nState of Decay\t241540\tSteam\t15시간 30분\t22시간 33분\t36시간 52분\r\nState of Decay: Year-One Survival Edition\t329430\tSteam\t17시간 15분\t23시간 37분\t69시간 9분\r\nSTEINS;GATE\t412830\tSteam\t데이터 없음\t\t\r\nStellar Blade\t3489700\tSteam\t22시간 39분\t37시간 30분\t57시간 21분\r\nStill Life 2\t46490\tSteam\t10시간 24분\t10시간 31분\t13시간 55분\r\nStories: The Path of Destinies\t439190\tSteam\t5시간 12분\t7시간 25분\t20시간 10분\r\nStreet Fighter 6\t1364780\tSteam\t17시간 23분\t34시간 18분\t73시간 14분\r\nStreet Fighter V\t310950\tSteam\t3시간 20분\t24시간 4분\t128시간 19분\r\nStyx: Master of Shadows\t242640\tSteam\t17시간 1분\t22시간 17분\t41시간 22분\r\nSubnautica\tJaguar\tEpic\t29시간 34분\t41시간 52분\t52시간 1분\r\nSuper Star\t503300\tSteam\t3시간 22분\t5시간 0분\t7시간 46분\r\nSuperHot\tDory\tEpic\t2시간 23분\t5시간 8분\t19시간 55분\r\nSystem Shock 2\t238210\tSteam\t데이터 없음\t\t\r\nTabletop Simulator\t286160\tSteam\t9시간 51분\t147시간 56분\t1224시간 36분\r\nTales of Berseria\t429660\tSteam\t44시간 13분\t67시간 26분\t153시간 39분\r\nTales of Maj'Eyal\t259680\tSteam\t57시간 50분\t99시간 25분\t378시간 11분\r\nThe Awesome Adventures of Captain Spirit\t845070\tSteam\t1시간 37분\t1시간 58분\t2시간 9분\r\nThe Banner Saga\t237990\tSteam\t10시간 42분\t13시간 51분\t30시간 16분\r\nThe Bard's Tale: Remastered and Resnarkled\t41900\tSteam\t14시간 14분\t19시간 0분\t28시간 18분\r\nThe Binding of Isaac\t113200\tSteam\t10시간 52분\t50시간 6분\t141시간 1분\r\nThe Blackwell Convergence\t80350\tSteam\t2시간 58분\t3시간 27분\t4시간 13분\r\nThe Blackwell Deception\t80360\tSteam\t4시간 29분\t5시간 4분\t6시간 6분\r\nThe Blackwell Epiphany\t236930\tSteam\t6시간 33분\t7시간 38분\t11시간 13분\r\nThe Blackwell Legacy\t80330\tSteam\t2시간 53분\t3시간 18분\t4시간 32분\r\nThe Darkness II\t67370\tSteam\t6시간 2분\t8시간 14분\t15시간 14분\r\nThe Deed\t420740\tSteam\t31 분\t1시간 17분\t2시간 24분\r\nThe Elder Scrolls V: Skyrim\t72850\tSteam\t34시간 45분\t109시간 42분\t237시간 11분\r\nThe Elder Scrolls V: Skyrim - Special Edition\t489830\tSteam\t26시간 0분\t111시간 6분\t202시간 56분\r\nThe Eternal Castle: Remastered\t963450\tSteam\t2시간 40분\t3시간 28분\t6시간 17분\r\nThe First Descendant\t2074920\tSteam\t35시간 54분\t64시간 13분\t98시간 29분\r\nThe Flame in the Flood\t318600\tSteam\t8시간 39분\t13시간 34분\t49시간 54분\r\nThe Guild 2\t39650\tSteam\t12시간 30분\t29시간 0분\t48시간 48분\r\nThe Guild 2: Pirates of the European Seas\t39660\tSteam\t11시간 0분\t15시간 0분\t--\r\nThe Guild 2: Renaissance\t39680\tSteam\t7시간 56분\t130시간 10분\t--\r\nThe Guild: Gold Edition\t39520\tSteam\t44시간 13분\t65시간 40분\t76시간 14분\r\nThe Outer Worlds\tRosemallow\tEpic\t13시간 20분\t26시간 38분\t40시간 40분\r\nThe Outer Worlds: Spacer's Choice Edition\tcb3bf7ba89574a66ae3b795e039d4dbc\tEpic\t17시간 38분\t37시간 16분\t60시간 47분\r\nThe Red Strings Club\t589780\tSteam\t4시간 0분\t4시간 34분\t6시간 59분\r\nThe Secret of Monkey Island: Special Edition\t32360\tSteam\t6시간 39분\t7시간 18분\t7시간 37분\r\nThe Sims 4\t1222670\tSteam\t22시간 40분\t104시간 22분\t278시간 51분\r\nThe Stanley Parable\t221910\tSteam\t1시간 27분\t2시간 54분\t9시간 5분\r\nThe Stanley Parable\t247750\tSteam\t1시간 27분\t2시간 54분\t9시간 5분\r\nThe Temple of Elemental Evil\t1207658889\tGOG\t34시간 12분\t53시간 21분\t104시간 18분\r\nThe Walking Dead\t207610\tSteam\t9시간 8분\t10시간 6분\t10시간 20분\r\nThe Walking Dead\t1432207977\tGOG\t9시간 8분\t10시간 6분\t10시간 20분\r\nThe Walking Dead: Season Two\t261030\tSteam\t데이터 없음\t\t\r\nThe Witcher 2: Assassins of Kings - Enhanced Edition\t20920\tSteam\t24시간 9분\t34시간 37분\t56시간 24분\r\nThe Witcher 3: Wild Hunt\t292030\tSteam\t51시간 38분\t103시간 44분\t174시간 41분\r\nThe Witcher Goodies Collection\t1980301910\tGOG\t데이터 없음\t\t\r\nThe Witcher: Enhanced Edition Director's Cut\t20900\tSteam\t35시간 14분\t45시간 58분\t63시간 51분\r\nThe Wolf Among Us\tCobbler\tEpic\t8시간 37분\t9시간 18분\t10시간 57분\r\nThis Is the Police\t443810\tSteam\t19시간 54분\t23시간 38분\t32시간 54분\r\nThis Is the Police 2\t785740\tSteam\t21시간 7분\t25시간 52분\t29시간 52분\r\nTicket to Ride: Classic Edition\tTowhee\tEpic\t45 분\t--\t--\r\nTo the Moon\t206440\tSteam\t4시간 7분\t4시간 31분\t4시간 36분\r\nTom Clancy's Ghost Recon Phantoms - NA\t243870\tSteam\t데이터 없음\t\t\r\nTom Clancy's Ghost Recon: Future Soldier\t212630\tSteam\t10시간 30분\t13시간 15분\t17시간 4분\r\nTomb Raider\t203160\tSteam\t11시간 19분\t15시간 27분\t20시간 54분\r\nTomb Raider GAME OF THE YEAR EDITION\td6264d56f5ba434e91d4b0a0b056c83a\tEpic\t12시간 10분\t15시간 12분\t20시간 35분\r\nTormentor X Punisher\tGoby\tEpic\t2시간 55분\t--\t16시간 45분\r\nTotal War: Three Kingdoms\t769f2fee68e9477180da900ccccbbcf0\tEpic\t46시간 1분\t68시간 39분\t672시간 57분\r\nTree of Life - Experimental Server\t696260\tSteam\t데이터 없음\t\t\r\nTropico 5\t245620\tSteam\t22시간 38분\t41시간 8분\t87시간 41분\r\nTurbo Pug DX\t513780\tSteam\t50 분\t3시간 15분\t3시간 26분\r\nTyranny\t36b0e40890f147fbb1e3965f87369156\tEpic\t20시간 27분\t34시간 55분\t56시간 33분\r\nUltima IV: Quest of the Avatar\t1207658962\tGOG\t21시간 12분\t34시간 16분\t52시간 4분\r\nUltima V: Warriors of Destiny\t1207662443\tGOG\t37시간 23분\t49시간 16분\t96시간 8분\r\nUltima VI: The False Prophet\t1207662453\tGOG\t29시간 47분\t31시간 19분\t57시간 2분\r\nUNCHARTED: 레거시 오브 시브즈 컬렉션\t5661dd2d-e26d-4d06-97bf-e01f997843d3\tDRM-free\t데이터 없음\t\t\r\nUndertale\t391540\tSteam\t데이터 없음\t\t\r\nUndying\tc98c934106994f2d8afc36c3f1872549\tEpic\t25시간 33분\t32시간 17분\t--\r\nUni\t1011300\tSteam\t40 분\t50 분\t58 분\r\nUnturned\t304930\tSteam\t21시간 54분\t75시간 53분\t135시간 56분\r\nUplink\t1510\tSteam\t8시간 22분\t15시간 54분\t32시간 7분\r\nVA-11 Hall-A: Cyberpunk Bartender Action\t447530\tSteam\t11시간 3분\t13시간 36분\t18시간 4분\r\nValkyria Chronicles Remastered\t294860\tSteam\t30시간 20분\t38시간 12분\t58시간 29분\r\nVampire Survivors\t1794680\tSteam\t15시간 6분\t28시간 3분\t53시간 3분\r\nViscera Cleanup Detail: Shadow Warrior\t255520\tSteam\t1시간 35분\t2시간 6분\t2시간 12분\r\nWallpaper Engine\t431960\tSteam\t데이터 없음\t\t\r\nWartales\t1527950\tSteam\t43시간 43분\t76시간 5분\t146시간 35분\r\nWasteland 2\t240760\tSteam\t40시간 46분\t64시간 20분\t100시간 5분\r\nWasteland 2: Director's Cut\t404730\tSteam\t40시간 46분\t64시간 20분\t100시간 5분\r\nWasteland 3\t719040\tSteam\t35시간 49분\t49시간 34분\t75시간 17분\r\nWhat Remains of Edith Finch\tBadger\tEpic\t2시간 7분\t2시간 32분\t2시간 52분\r\nWindbound\ta95bf4df6627431ca5baff8173c59635\tEpic\t14시간 8분\t15시간 21분\t19시간 34분\r\nWorld War Z\tWombat\tEpic\t7시간 28분\t13시간 28분\t47시간 11분\r\nXCOM 2\t268500\tSteam\t33시간 12분\t47시간 59분\t89시간 28분\r\nXCOM: Chimera Squad\t882100\tSteam\t21시간 20분\t27시간 14분\t64시간 28분\r\nXCOM: Enemy Unknown\t200510\tSteam\t26시간 41분\t37시간 57분\t70시간 19분\r\nX-COM: UFO Defense\t1445250340\tGOG\t38시간 40분\t49시간 0분\t71시간 43분\r\nXenogears\tcc74fe34-2b1f-4cc5-8a45-5cddd91e1b0b\t에뮬\t56시간 10분\t65시간 36분\t80시간 41분\r\nYet Another Zombie Defense\t270550\tSteam\t1시간 33분\t2시간 10분\t4시간 10분\r\nYooka-Laylee and the Impossible Lair\tDuckbill\tEpic\t12시간 59분\t16시간 2분\t21시간 42분\r\n大海战 Navy Field IV\t481890\tSteam\t데이터 없음\t\t";
const DROPBOX_APP_KEY = "86fbjrljz7vkqqa";
const DROPBOX_TOKEN_KEY = "playnite-sorter:dropbox-token";
const DROPBOX_REMOTE_KEY = "playnite-sorter:dropbox-remote";
const DROPBOX_OAUTH_VERIFIER_KEY = "playnite-sorter:dropbox-oauth-verifier";
const DROPBOX_OAUTH_STATE_KEY = "playnite-sorter:dropbox-oauth-state";
const DROPBOX_DATA_PATH = `/${DATA_FILE_NAME}`;
const DROPBOX_OAUTH_URL = "https://www.dropbox.com/oauth2/authorize";
const DROPBOX_TOKEN_URL = "https://api.dropboxapi.com/oauth2/token";
const DROPBOX_UPLOAD_URL = "https://content.dropboxapi.com/2/files/upload";
const DROPBOX_DOWNLOAD_URL = "https://content.dropboxapi.com/2/files/download";
const DROPBOX_METADATA_URL = "https://api.dropboxapi.com/2/files/get_metadata";
const DROPBOX_SCOPES = "files.content.read files.content.write files.metadata.read";
const DROPBOX_AUTO_SAVE_DELAY = 900;
const STATUS_OPTIONS = [
  { value: "우선할것", icon: "🔥" },
  { value: "할것", icon: "📚" },
  { value: "깸", icon: "🏆" },
  { value: "또할것", icon: "🔄" },
  { value: "하차", icon: "💔" },
  { value: "Unplayed", icon: "📦" },
  { value: "Never", icon: "🚫" }
];
const HLTB_TIME_TYPES = [
  { key: "main", label: "M", title: "Main Story" },
  { key: "mainExtra", label: "ME", title: "Main + Sides" },
  { key: "completionist", label: "C", title: "Completionist" }
];

const COLUMN_ALIASES = {
  title: ["게임 이름", "Name", "Title"],
  gameId: ["게임 Id", "Game Id", "GameId"],
  releaseDate: ["출시일", "Release Date", "ReleaseDate"],
  status: ["완료 상태", "완료상태", "Completion Status", "CompletionStatus", "Status"],
  note: ["메모", "Notes", "Note"],
  source: ["소스", "Source"],
  id: ["Id", "ID"]
};

const HLTB_COLUMN_ALIASES = {
  title: ["게임 이름", "이름", "Name", "Title"],
  gameId: ["게임 Id", "Game Id", "GameId", "Id", "ID"],
  source: ["소스", "Source"],
  main: ["Main Story", "Main story", "Main"],
  mainExtra: ["Main + Sides", "Main + Extra", "Main + extra", "Main Extra"],
  completionist: ["Completionist", "Completion"]
};

const elements = {
  themeToggleButton: document.querySelector("#themeToggleButton"),
  csvFileInput: document.querySelector("#csvFileInput"),
  exportCsvButton: document.querySelector("#exportCsvButton"),
  exportNotice: document.querySelector("#exportNotice"),
  totalMetric: document.querySelector("#totalMetric"),
  reviewedMetric: document.querySelector("#reviewedMetric"),
  fileMetric: document.querySelector("#fileMetric"),
  currentCounter: document.querySelector("#currentCounter"),
  progressPercent: document.querySelector("#progressPercent"),
  progressFill: document.querySelector("#progressFill"),
  jumpIndexInput: document.querySelector("#jumpIndexInput"),
  jumpButton: document.querySelector("#jumpButton"),
  searchInput: document.querySelector("#searchInput"),
  searchResults: document.querySelector("#searchResults"),
  gameCard: document.querySelector("#gameCard"),
  gameCover: document.querySelector("#gameCover"),
  gamePosition: document.querySelector("#gamePosition"),
  gameTitle: document.querySelector("#gameTitle"),
  googleSearchLink: document.querySelector("#googleSearchLink"),
  releaseDateValue: document.querySelector("#releaseDateValue"),
  sourceValue: document.querySelector("#sourceValue"),
  hltbValue: document.querySelector("#hltbValue"),
  noteInput: document.querySelector("#noteInput"),
  memoCount: document.querySelector("#memoCount"),
  statusCurrent: document.querySelector("#statusCurrent"),
  statusButtons: document.querySelector("#statusButtons"),
  metacriticSearchLink: document.querySelector("#metacriticSearchLink"),
  previousButton: document.querySelector("#previousButton"),
  completeButton: document.querySelector("#completeButton"),
  nextButton: document.querySelector("#nextButton"),
  dropboxConnectButton: document.querySelector("#dropboxConnectButton"),
  dropboxReloadButton: document.querySelector("#dropboxReloadButton"),
  dropboxSaveButton: document.querySelector("#dropboxSaveButton"),
  dropboxDisconnectButton: document.querySelector("#dropboxDisconnectButton"),
  dropboxStatus: document.querySelector("#dropboxStatus"),
  connectionDot: document.querySelector(".connection-dot"),
  toast: document.querySelector("#toast")
};

let state = loadState();
let selectedStatus = "Unplayed";
let hltbByGameId = new Map();
let hltbByTitleSource = new Map();
let hltbByTitle = new Map();
let hltbLoadState = "loading";
let dropboxToken = loadDropboxToken();
let dropboxRemote = loadDropboxRemote();
let dropboxSaveTimer = null;
let dropboxSaveInFlight = false;
let dropboxSaveAgain = false;
let dropboxStatusMessage = "";

initialize();

async function initialize() {
  applyTheme();
  bindEvents();
  renderStatusButtons();
  loadHltbData();
  render();
  await completeDropboxOAuth();
  renderDropboxControls();
  if (isDropboxConnected()) {
    await openDropboxStorage({ silent: true });
  }
  render();
}

async function loadHltbData() {
  const failedFiles = [];

  try {
    for (const fileName of HLTB_FILE_NAMES) {
      const response = await fetchHltbFile(fileName);
      if (!response.ok) {
        failedFiles.push(`${fileName}: ${response.status}`);
        continue;
      }

      const hltbLookup = parseHltbText(await response.text(), fileName);
      hltbByGameId = hltbLookup.byGameId;
      hltbByTitleSource = hltbLookup.byTitleSource;
      hltbByTitle = hltbLookup.byTitle;
      hltbLoadState = "ready";
      renderCurrentGame();
      return;
    }

    throw new Error("hltb.csv 파일을 찾지 못했습니다.");
  } catch (error) {
    console.warn(error, failedFiles);
    hltbByGameId = new Map();
    hltbByTitleSource = new Map();
    hltbByTitle = new Map();
    hltbLoadState = "failed";
  }

  renderCurrentGame();
}

async function fetchHltbFile(fileName) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => {
    controller.abort();
  }, HLTB_FETCH_TIMEOUT);

  try {
    return await fetch(fileName, {
      cache: "no-store",
      signal: controller.signal
    });
  } finally {
    window.clearTimeout(timeout);
  }
}

function createDefaultState() {
  return {
    settings: {
      theme: "light"
    },
    fileName: "",
    importedAt: "",
    headers: [],
    rows: [],
    currentIndex: 0,
    reviewedKeys: {}
  };
}

function loadState() {
  const fallback = createDefaultState();
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return fallback;
  }

  try {
    return normalizeState(JSON.parse(raw));
  } catch {
    return fallback;
  }
}

function normalizeState(value) {
  const fallback = createDefaultState();
  const headers = Array.isArray(value && value.headers) ? value.headers.map(String) : [];
  const rows = Array.isArray(value && value.rows)
    ? value.rows
        .filter((row) => Array.isArray(row))
        .map((row) => headers.map((_, index) => String(row[index] ?? "")))
    : [];
  const currentIndex = Number(value && value.currentIndex);

  return {
    settings: {
      theme: value && value.settings && value.settings.theme === "dark" ? "dark" : "light"
    },
    fileName: String((value && value.fileName) || ""),
    importedAt: String((value && value.importedAt) || ""),
    headers,
    rows,
    currentIndex: rows.length ? clampIndex(Number.isFinite(currentIndex) ? currentIndex : 0, rows.length) : 0,
    reviewedKeys: normalizeReviewedKeys(value && value.reviewedKeys)
  };
}

function normalizeReviewedKeys(value) {
  if (!value || typeof value !== "object") {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, isReviewed]) => Boolean(isReviewed))
      .map(([key]) => [key, true])
  );
}

function bindEvents() {
  elements.themeToggleButton.addEventListener("click", () => {
    state.settings.theme = state.settings.theme === "dark" ? "light" : "dark";
    applyTheme();
    saveState("테마 저장");
  });

  elements.csvFileInput.addEventListener("change", importCsvFile);
  elements.exportCsvButton.addEventListener("click", exportCsv);
  elements.noteInput.addEventListener("input", updateMemoCount);
  elements.jumpButton.addEventListener("click", jumpToTypedIndex);
  elements.jumpIndexInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      jumpToTypedIndex();
    }
  });
  elements.searchInput.addEventListener("input", renderSearchResults);
  elements.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      goToFirstSearchResult();
    }
  });
  elements.previousButton.addEventListener("click", () => moveCurrent(-1));
  elements.nextButton.addEventListener("click", () => moveCurrent(1));
  elements.completeButton.addEventListener("click", commitCurrentAndMove);
  elements.dropboxConnectButton.addEventListener("click", connectDropbox);
  elements.dropboxReloadButton.addEventListener("click", reloadFromDropbox);
  elements.dropboxSaveButton.addEventListener("click", saveDropboxNow);
  elements.dropboxDisconnectButton.addEventListener("click", disconnectDropbox);

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-status]");
    if (!button) {
      return;
    }

    selectedStatus = normalizeStatus(button.dataset.status);
    syncCurrentFormToState();
    saveState("상태 저장");
    renderMetrics();
    renderStatusButtons();
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-search-index]");
    if (!button) {
      return;
    }

    goToIndex(Number(button.dataset.searchIndex));
  });
}

function applyTheme() {
  const isDark = state.settings.theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  elements.themeToggleButton.textContent = isDark ? "☀ 라이트모드" : "◐ 다크모드";
  elements.themeToggleButton.setAttribute("aria-pressed", String(isDark));
}

async function importCsvFile(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  try {
    importCsvText(await file.text(), file.name || "allgames.csv");
    showToast("CSV를 불러왔습니다.");
  } catch (error) {
    window.alert(error.message || "CSV 파일을 읽을 수 없습니다.");
  } finally {
    event.target.value = "";
  }
}

function importCsvText(text, fileName) {
  const parsedRows = parseCsvRows(text).filter((row) => row.some((cell) => String(cell).trim()));

  if (parsedRows.length < 2) {
    throw new Error("CSV에 헤더와 게임 행이 필요합니다.");
  }

  const headers = parsedRows[0].map((cell) => stripBom(String(cell).trim()));
  const rows = parsedRows.slice(1).map((row) => normalizeRowLength(row, headers.length));
  const indexes = getColumnIndexes(headers);

  if (indexes.title < 0 || indexes.note < 0 || indexes.status < 0) {
    throw new Error("CSV에서 게임 이름, 메모, 완료 상태 열을 찾지 못했습니다.");
  }

  state = {
    ...createDefaultState(),
    settings: state.settings,
    fileName,
    importedAt: new Date().toISOString(),
    headers,
    rows,
    currentIndex: 0,
    reviewedKeys: {}
  };
  selectedStatus = getCurrentStatus();
  saveState("CSV 불러옴");
  render();
}

function normalizeRowLength(row, length) {
  const next = Array.from({ length }, (_, index) => String(row[index] ?? ""));
  return next;
}

function stripBom(value) {
  return value.replace(/^\uFEFF/, "");
}

function getColumnIndexes(headers = state.headers) {
  return {
    title: findColumnIndex(headers, COLUMN_ALIASES.title),
    gameId: findColumnIndex(headers, COLUMN_ALIASES.gameId),
    releaseDate: findColumnIndex(headers, COLUMN_ALIASES.releaseDate),
    status: findColumnIndex(headers, COLUMN_ALIASES.status),
    note: findColumnIndex(headers, COLUMN_ALIASES.note),
    source: findColumnIndex(headers, COLUMN_ALIASES.source),
    id: findColumnIndex(headers, COLUMN_ALIASES.id)
  };
}

function findColumnIndex(headers, aliases) {
  const normalizedAliases = aliases.map(normalizeHeader);
  return headers.findIndex((header) => normalizedAliases.includes(normalizeHeader(header)));
}

function normalizeHeader(value) {
  return String(value || "").trim().replace(/\s+/g, "").toLowerCase();
}

function hasCsv() {
  return state.headers.length > 0 && state.rows.length > 0;
}

function getCurrentRow() {
  if (!hasCsv()) {
    return null;
  }

  return state.rows[state.currentIndex] || null;
}

function render() {
  applyTheme();
  renderMetrics();
  renderCurrentGame();
  renderSearchResults();
  renderDropboxControls();
}

function renderMetrics() {
  const total = state.rows.length;
  const current = total ? state.currentIndex + 1 : 0;
  const reviewedCount = getReviewedCount();
  const progress = total ? (reviewedCount / total) * 100 : 0;
  const progressText = total ? `${progress >= 99.95 ? 100 : progress.toFixed(1)}%` : "0%";
  elements.totalMetric.textContent = `${total.toLocaleString("ko-KR")}개`;
  elements.reviewedMetric.textContent = `${reviewedCount.toLocaleString("ko-KR")}개`;
  elements.fileMetric.textContent = state.fileName || "없음";
  elements.currentCounter.textContent = total ? `${reviewedCount} / ${total}` : "-";
  elements.progressPercent.textContent = progressText;
  elements.progressFill.style.width = `${progress}%`;
  elements.exportCsvButton.disabled = !hasCsv();
  elements.jumpIndexInput.disabled = !hasCsv();
  elements.jumpButton.disabled = !hasCsv();
  elements.searchInput.disabled = !hasCsv();
}

function renderCurrentGame() {
  const row = getCurrentRow();
  const indexes = getColumnIndexes();

  elements.gameCard.hidden = !row;

  if (!row) {
    return;
  }

  const title = readCell(row, indexes.title) || "(이름 없음)";
  selectedStatus = getCurrentStatus();

  elements.gamePosition.textContent = `${state.currentIndex + 1}번째 게임`;
  elements.gameTitle.textContent = title;
  elements.releaseDateValue.textContent = readCell(row, indexes.releaseDate) || "-";
  elements.sourceValue.textContent = readCell(row, indexes.source) || "-";
  renderHltbInfo(row, indexes);
  renderGameCover(row, indexes, title);
  elements.googleSearchLink.href = `https://www.google.com/search?q=${encodeURIComponent(title)}`;
  elements.googleSearchLink.setAttribute("aria-label", `${title} 구글 검색`);
  elements.metacriticSearchLink.href = `https://www.google.com/search?q=${encodeURIComponent(`${title} Metacritic reviews`)}&udm=50`;
  elements.metacriticSearchLink.setAttribute("aria-label", `${title} Metacritic reviews 구글 AI mode 검색`);
  elements.noteInput.value = readCell(row, indexes.note);
  updateMemoCount();
  renderStatusButtons();
}

function renderHltbInfo(row, indexes) {
  const title = readCell(row, indexes.title);
  const source = readCell(row, indexes.source);
  const gameId = readCell(row, indexes.gameId);
  const hltb = findHltbInfo({ gameId, title, source });

  if (hltb) {
    elements.hltbValue.classList.remove("is-empty");
    elements.hltbValue.title = hltb.title ? `HowLongToBeat: ${hltb.title}` : "HowLongToBeat";
    elements.hltbValue.innerHTML = HLTB_TIME_TYPES
      .map((type) => `
        <span class="htlb-chip">
          <abbr title="${escapeHtml(type.title)}">${escapeHtml(type.label)}</abbr>
          <strong>${escapeHtml(hltb[type.key] || "-")}</strong>
        </span>
      `)
      .join("");
    return;
  }

  renderEmptyHltb(getHltbEmptyMessage());
}

function findHltbInfo({ gameId, title, source }) {
  const gameIdKey = normalizeGameId(gameId);
  if (gameIdKey && hltbByGameId.has(gameIdKey)) {
    return hltbByGameId.get(gameIdKey);
  }

  const titleSourceKey = makeHltbTitleSourceKey(title, source);
  if (titleSourceKey && hltbByTitleSource.has(titleSourceKey)) {
    return hltbByTitleSource.get(titleSourceKey);
  }

  const titleKey = normalizeHltbTitle(title);
  return titleKey ? hltbByTitle.get(titleKey) : null;
}

function renderEmptyHltb(message) {
  elements.hltbValue.classList.add("is-empty");
  elements.hltbValue.removeAttribute("title");
  elements.hltbValue.textContent = message;
}

function getHltbEmptyMessage() {
  if (hltbLoadState === "loading") {
    return "읽는 중";
  }

  if (hltbLoadState === "failed") {
    return "HLTB 파일 없음";
  }

  return "HLTB 없음";
}

function renderStatusButtons() {
  elements.statusCurrent.textContent = selectedStatus;
  elements.statusButtons.innerHTML = STATUS_OPTIONS
    .map((status) => {
      const active = selectedStatus === status.value ? " is-active" : "";
      const pressed = selectedStatus === status.value ? "true" : "false";
      return `
        <button class="status-option${active}" type="button" data-status="${escapeHtml(status.value)}" aria-label="${escapeHtml(status.value)}" aria-pressed="${pressed}" title="${escapeHtml(status.value)}">
          <span class="status-face">
            <span class="status-icon">${status.icon}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderGameCover(row, indexes, title) {
  const source = readCell(row, indexes.source).trim().toLowerCase();
  const gameId = readCell(row, indexes.gameId).trim();
  const steamAppId = source === "steam" && /^\d+$/.test(gameId) ? gameId : "";

  if (steamAppId) {
    elements.gameCover.style.setProperty("--game-image", `url("https://cdn.akamai.steamstatic.com/steam/apps/${steamAppId}/header.jpg")`);
    elements.gameCover.textContent = "";
    elements.gameCover.classList.add("has-image");
    elements.gameCover.classList.remove("source-label");
    return;
  }

  const sourceLabel = readCell(row, indexes.source).trim() || "No Source";
  elements.gameCover.style.removeProperty("--game-image");
  elements.gameCover.textContent = sourceLabel;
  elements.gameCover.classList.remove("has-image");
  elements.gameCover.classList.add("source-label");
}

function updateMemoCount() {
  elements.memoCount.textContent = `${elements.noteInput.value.length.toLocaleString("ko-KR")}자`;
}

function readCell(row, index) {
  return index >= 0 ? String(row[index] ?? "") : "";
}

function setCell(row, index, value) {
  if (index >= 0) {
    row[index] = String(value ?? "");
  }
}

function getCurrentStatus() {
  const row = getCurrentRow();
  const indexes = getColumnIndexes();
  return normalizeStatus(row ? readCell(row, indexes.status) : "Unplayed");
}

function normalizeStatus(value) {
  const text = String(value || "").trim();
  const compact = text.replace(/^[^\p{L}\p{N}]+/u, "").trim();
  const found = STATUS_OPTIONS.find((status) => {
    const target = status.value.toLowerCase();
    return target === text.toLowerCase() || target === compact.toLowerCase();
  });
  return found ? found.value : "Unplayed";
}

function commitCurrentAndMove() {
  if (!syncCurrentFormToState({ markReviewed: true })) {
    return;
  }

  const wasLast = state.currentIndex === state.rows.length - 1;
  state.currentIndex = nextIndex(state.currentIndex, 1);
  selectedStatus = getCurrentStatus();
  saveState("입력 완료");
  render();
  showToast(wasLast ? "마지막 게임을 저장하고 처음으로 돌아왔습니다." : "저장하고 다음 게임으로 넘어갔습니다.");
}

function syncCurrentFormToState(options = {}) {
  const row = getCurrentRow();
  if (!row) {
    return false;
  }

  const indexes = getColumnIndexes();
  setCell(row, indexes.note, elements.noteInput.value);
  setCell(row, indexes.status, normalizeStatus(selectedStatus));

  if (options.markReviewed) {
    state.reviewedKeys[getRowKey(state.currentIndex)] = true;
  }

  return true;
}

function moveCurrent(direction) {
  if (!hasCsv()) {
    return;
  }

  goToIndex(nextIndex(state.currentIndex, direction));
}

function jumpToTypedIndex() {
  if (!hasCsv()) {
    return;
  }

  const value = Number(elements.jumpIndexInput.value);
  if (!Number.isFinite(value) || value < 1 || value > state.rows.length) {
    window.alert(`1부터 ${state.rows.length} 사이의 번호를 입력해 주세요.`);
    return;
  }

  goToIndex(Math.floor(value) - 1);
}

function goToFirstSearchResult() {
  const results = findSearchResults(elements.searchInput.value);
  if (results.length) {
    goToIndex(results[0].index);
  }
}

function goToIndex(index) {
  if (!hasCsv()) {
    return;
  }

  const next = clampIndex(index, state.rows.length);
  state.currentIndex = next;
  selectedStatus = getCurrentStatus();
  saveState("위치 저장");
  render();
}

function renderSearchResults() {
  if (!hasCsv()) {
    elements.searchResults.textContent = "CSV 임포트 후 사용할 수 있습니다.";
    return;
  }

  const query = elements.searchInput.value.trim();
  if (!query) {
    elements.searchResults.textContent = "제목 일부를 입력하면 결과가 표시됩니다.";
    return;
  }

  const results = findSearchResults(query);
  if (!results.length) {
    elements.searchResults.textContent = "검색 결과가 없습니다.";
    return;
  }

  elements.searchResults.innerHTML = results
    .map((result) => `
      <button class="search-result" type="button" data-search-index="${result.index}">
        <span class="search-result-index">${result.index + 1}</span>
        <span class="search-result-title">${escapeHtml(result.title)}</span>
      </button>
    `)
    .join("");
}

function findSearchResults(query) {
  const text = normalizeSearchText(query);
  if (!text) {
    return [];
  }

  const indexes = getColumnIndexes();
  if (indexes.title < 0) {
    return [];
  }

  return state.rows
    .map((row, index) => ({
      index,
      title: readCell(row, indexes.title)
    }))
    .filter((item) => normalizeSearchText(item.title).includes(text))
    .slice(0, 8);
}

function normalizeSearchText(value) {
  return String(value || "").trim().toLowerCase();
}

function nextIndex(index, direction) {
  if (!state.rows.length) {
    return 0;
  }

  return (index + direction + state.rows.length) % state.rows.length;
}

function clampIndex(index, length) {
  return Math.min(Math.max(index, 0), Math.max(length - 1, 0));
}

function getRowKey(index) {
  const indexes = getColumnIndexes();
  const row = state.rows[index];
  const stableId = row ? readCell(row, indexes.id) || readCell(row, indexes.gameId) : "";
  return stableId || String(index);
}

function getReviewedCount() {
  const indexes = getColumnIndexes();
  if (indexes.status < 0) {
    return 0;
  }

  return state.rows.reduce((count, row) => {
    return normalizeStatus(readCell(row, indexes.status)) === "Unplayed" ? count : count + 1;
  }, 0);
}

function saveState(message = "저장됨") {
  persistLocalState();
  queueDropboxSave();
  document.title = message === "저장됨" ? "헤어질 결심" : `헤어질 결심 - ${message}`;
  window.clearTimeout(saveState.timer);
  saveState.timer = window.setTimeout(() => {
    document.title = "헤어질 결심";
  }, 1600);
}

function persistLocalState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

async function exportCsv() {
  if (!hasCsv()) {
    return;
  }

  try {
    const powerShellCommand = await loadPowerShellCommandText();

    syncCurrentFormToState();
    persistLocalState();

    const content = [state.headers, ...state.rows]
      .map((row) => row.map(csvEscape).join(","))
      .join("\r\n");

    downloadFile("allgames-reviewed.csv", content, "text/csv;charset=utf-8");
    downloadFile(POWERSHELL_COMMAND_FILE_NAME, powerShellCommand, "text/plain;charset=utf-8");
    showExportNotice("익스포트 완료. allgames-reviewed.csv 와 powershellcommand.txt 가 다운로드 되었습니다. playnite에서 파워셀 명령어를 입력하세요.");
    showToast("CSV와 PowerShell 명령어 파일을 내보냈습니다.");
  } catch (error) {
    window.alert(error.message || "powershellcommand.txt를 불러오지 못했습니다.");
  }
}

async function loadPowerShellCommandText() {
  const response = await fetch(POWERSHELL_COMMAND_FILE_NAME, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("powershellcommand.txt를 불러오지 못했습니다.");
  }

  return response.text();
}

function showExportNotice(message) {
  elements.exportNotice.textContent = message;
  elements.exportNotice.hidden = false;
}

function parseHltbText(text, fileName = "") {
  const rows = parseDelimitedRows(text, detectHltbDelimiter(text, fileName))
    .map(expandQuotedHltbRow)
    .filter((row) => row.some((cell) => String(cell).trim()));
  const lookup = {
    byGameId: new Map(),
    byTitleSource: new Map(),
    byTitle: new Map()
  };

  if (!rows.length) {
    return lookup;
  }

  const headers = rows[0].map((cell) => stripBom(String(cell).trim()));
  const indexes = getHltbColumnIndexes(headers);

  rows.slice(1).forEach((row) => {
    const normalized = normalizeRowLength(row, Math.max(headers.length, row.length, 6))
      .map((cell) => stripBom(String(cell).trim()));
    const title = readHltbCell(normalized, indexes.title, 0);
    const gameId = readHltbCell(normalized, indexes.gameId, -1);
    const source = readHltbCell(normalized, indexes.source, indexes.gameId >= 0 ? 2 : 1);
    const main = readHltbCell(normalized, indexes.main, indexes.gameId >= 0 ? 3 : 2);
    const mainExtra = readHltbCell(normalized, indexes.mainExtra, indexes.gameId >= 0 ? 4 : 3);
    const completionist = readHltbCell(normalized, indexes.completionist, indexes.gameId >= 0 ? 5 : 4);
    const hltb = {
      title,
      source,
      main: normalizeHltbTime(main),
      mainExtra: normalizeHltbTime(mainExtra),
      completionist: normalizeHltbTime(completionist)
    };

    if (!hasHltbTime(hltb)) {
      return;
    }

    const gameIdKey = normalizeGameId(gameId);
    const titleSourceKey = makeHltbTitleSourceKey(title, source);
    const titleKey = normalizeHltbTitle(title);

    if (gameIdKey) {
      lookup.byGameId.set(gameIdKey, hltb);
    }

    if (titleSourceKey) {
      lookup.byTitleSource.set(titleSourceKey, hltb);
    }

    if (titleKey && !lookup.byTitle.has(titleKey)) {
      lookup.byTitle.set(titleKey, hltb);
    }
  });

  return lookup;
}

function expandQuotedHltbRow(row) {
  if (row.length === 1 && String(row[0]).includes("\t")) {
    return parseDelimitedRows(row[0], "\t")[0] || row;
  }

  return row;
}

function getHltbColumnIndexes(headers) {
  return {
    title: findColumnIndex(headers, HLTB_COLUMN_ALIASES.title),
    gameId: findColumnIndex(headers, HLTB_COLUMN_ALIASES.gameId),
    source: findColumnIndex(headers, HLTB_COLUMN_ALIASES.source),
    main: findColumnIndex(headers, HLTB_COLUMN_ALIASES.main),
    mainExtra: findColumnIndex(headers, HLTB_COLUMN_ALIASES.mainExtra),
    completionist: findColumnIndex(headers, HLTB_COLUMN_ALIASES.completionist)
  };
}

function readHltbCell(row, index, fallbackIndex) {
  const value = readCell(row, index);
  return value || readCell(row, fallbackIndex);
}

function detectHltbDelimiter(text, fileName) {
  const firstLine = String(text || "").split(/\r?\n/, 1)[0] || "";
  const tabCount = (firstLine.match(/\t/g) || []).length;
  const commaCount = (firstLine.match(/,/g) || []).length;

  if (/\.csv$/i.test(fileName) && commaCount > tabCount) {
    return ",";
  }

  return tabCount >= commaCount ? "\t" : ",";
}

function normalizeGameId(value) {
  return String(value || "").trim().toLowerCase();
}

function makeHltbTitleSourceKey(title, source) {
  const titleKey = normalizeHltbTitle(title);
  const sourceKey = normalizeHltbSource(source);
  return titleKey && sourceKey ? `${titleKey}::${sourceKey}` : "";
}

function normalizeHltbTitle(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function normalizeHltbSource(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeHltbTime(value) {
  const text = String(value || "").trim();
  if (!text || /^데이터\s*없음$/i.test(text) || /^n\/?a$/i.test(text)) {
    return "";
  }

  return text
    .replace(/\s+시간/g, "시간")
    .replace(/\s+분/g, "분")
    .replace(/\s+/g, " ");
}

function hasHltbTime(value) {
  return Boolean(value.main || value.mainExtra || value.completionist);
}

function parseCsvRows(text) {
  return parseDelimitedRows(text, ",");
}

function parseDelimitedRows(text, delimiter) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === delimiter && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  rows.push(row);
  return rows;
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function connectDropbox() {
  if (window.location.protocol === "file:") {
    window.alert("Dropbox 연결은 GitHub Pages나 로컬 서버 주소에서 사용할 수 있습니다.");
    return;
  }

  const verifier = createCodeVerifier();
  const challenge = await createCodeChallenge(verifier);
  const csrfState = createId();
  saveDropboxOAuthDraft(verifier, csrfState);

  const params = new URLSearchParams({
    client_id: DROPBOX_APP_KEY,
    response_type: "code",
    code_challenge: challenge,
    code_challenge_method: "S256",
    token_access_type: "offline",
    redirect_uri: getRedirectUri(),
    scope: DROPBOX_SCOPES,
    state: csrfState
  });

  window.location.href = `${DROPBOX_OAUTH_URL}?${params.toString()}`;
}

async function completeDropboxOAuth() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  const returnedState = url.searchParams.get("state");
  const oauthError = url.searchParams.get("error_description") || url.searchParams.get("error");

  if (!code && !oauthError) {
    return;
  }

  cleanDropboxOAuthUrl(url);

  if (oauthError) {
    setDropboxStatus(`Dropbox 연결 취소: ${oauthError}`);
    return;
  }

  const expectedState = readDropboxOAuthValue(DROPBOX_OAUTH_STATE_KEY, "dropbox_oauth_state");
  const verifier = readDropboxOAuthValue(DROPBOX_OAUTH_VERIFIER_KEY, "dropbox_code_verifier");

  if (!verifier || returnedState !== expectedState) {
    setDropboxStatus("Dropbox 연결 확인 실패. 다시 연결해 주세요.");
    clearDropboxOAuthDraft();
    return;
  }

  try {
    const body = new URLSearchParams({
      code,
      grant_type: "authorization_code",
      client_id: DROPBOX_APP_KEY,
      code_verifier: verifier,
      redirect_uri: getRedirectUri()
    });
    const response = await fetch(DROPBOX_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    });
    const token = await readDropboxJsonResponse(response, "Dropbox 연결에 실패했습니다.");
    if (!token.access_token) {
      throw new Error("Dropbox 연결에 실패했습니다.\n응답에 접근 토큰이 없습니다.");
    }

    dropboxToken = {
      accessToken: token.access_token,
      refreshToken: token.refresh_token || "",
      expiresAt: token.expires_in ? Date.now() + token.expires_in * 1000 : 0
    };
    localStorage.setItem(DROPBOX_TOKEN_KEY, JSON.stringify(dropboxToken));
    setDropboxStatus("Dropbox 연결됨");
  } catch (error) {
    setDropboxStatus("Dropbox 연결 실패");
    window.alert(error.message);
  } finally {
    clearDropboxOAuthDraft();
  }
}

function saveDropboxOAuthDraft(verifier, stateValue) {
  sessionStorage.setItem("dropbox_code_verifier", verifier);
  sessionStorage.setItem("dropbox_oauth_state", stateValue);
  localStorage.setItem(DROPBOX_OAUTH_VERIFIER_KEY, verifier);
  localStorage.setItem(DROPBOX_OAUTH_STATE_KEY, stateValue);
}

function readDropboxOAuthValue(localKey, legacySessionKey) {
  return sessionStorage.getItem(legacySessionKey) || localStorage.getItem(localKey) || "";
}

function clearDropboxOAuthDraft() {
  sessionStorage.removeItem("dropbox_code_verifier");
  sessionStorage.removeItem("dropbox_oauth_state");
  localStorage.removeItem(DROPBOX_OAUTH_VERIFIER_KEY);
  localStorage.removeItem(DROPBOX_OAUTH_STATE_KEY);
}

function cleanDropboxOAuthUrl(url) {
  url.searchParams.delete("code");
  url.searchParams.delete("state");
  url.searchParams.delete("uid");
  url.searchParams.delete("error");
  url.searchParams.delete("error_description");
  window.history.replaceState({}, document.title, url.toString());
}

async function openDropboxStorage(options = {}) {
  const token = await getDropboxAccessToken({ silent: true });
  if (!token) {
    return;
  }

  try {
    setDropboxStatus("Dropbox에서 불러오는 중...");
    const remote = await downloadDropboxState(token);
    state = normalizeState(remote.value);
    selectedStatus = getCurrentStatus();
    saveDropboxRemote(remote.metadata);
    persistLocalState();
    setDropboxStatus(`Dropbox 사용 중: ${DATA_FILE_NAME}`);
    if (!options.silent) {
      showToast("Dropbox에서 불러왔습니다.");
    }
  } catch (error) {
    if (isDropboxNotFound(error)) {
      await createDropboxStorageFile(token);
      return;
    }

    setDropboxStatus("Dropbox 불러오기 실패");
    if (!options.silent) {
      window.alert(error.message);
    }
  }
}

async function createDropboxStorageFile(token) {
  try {
    const metadata = await uploadDropboxState(token, state, "add");
    saveDropboxRemote(metadata);
    setDropboxStatus(`Dropbox에 새 작업 파일 생성: ${DATA_FILE_NAME}`);
  } catch (error) {
    setDropboxStatus("Dropbox 파일 생성 실패");
    window.alert(error.message);
  }
}

async function reloadFromDropbox() {
  if (!isDropboxConnected()) {
    window.alert("Dropbox를 먼저 연결해 주세요.");
    return;
  }

  if (!window.confirm("Dropbox의 작업 저장본으로 현재 화면을 다시 불러올까요?")) {
    return;
  }

  await openDropboxStorage();
  render();
}

function disconnectDropbox() {
  dropboxToken = null;
  dropboxRemote = null;
  window.clearTimeout(dropboxSaveTimer);
  localStorage.removeItem(DROPBOX_TOKEN_KEY);
  localStorage.removeItem(DROPBOX_REMOTE_KEY);
  setDropboxStatus("Dropbox 연결 해제됨");
  renderDropboxControls();
}

function queueDropboxSave() {
  if (!isDropboxReady()) {
    return;
  }

  window.clearTimeout(dropboxSaveTimer);
  setDropboxStatus("Dropbox 저장 대기 중...");
  dropboxSaveTimer = window.setTimeout(() => {
    saveDropboxNow();
  }, DROPBOX_AUTO_SAVE_DELAY);
}

async function saveDropboxNow() {
  if (!isDropboxConnected()) {
    window.alert("Dropbox를 먼저 연결해 주세요.");
    return;
  }

  if (hasCsv()) {
    syncCurrentFormToState();
    persistLocalState();
  }

  if (!isDropboxReady()) {
    await openDropboxStorage({ silent: true });
    if (!isDropboxReady()) {
      return;
    }
  }

  if (dropboxSaveInFlight) {
    dropboxSaveAgain = true;
    return;
  }

  const token = await getDropboxAccessToken();
  if (!token) {
    return;
  }

  window.clearTimeout(dropboxSaveTimer);
  dropboxSaveInFlight = true;
  dropboxSaveAgain = false;

  try {
    setDropboxStatus("Dropbox에 저장 중...");
    const mode = dropboxRemote && dropboxRemote.rev
      ? { ".tag": "update", update: dropboxRemote.rev }
      : "add";
    const metadata = await uploadDropboxState(token, state, mode);
    saveDropboxRemote(metadata);
    setDropboxStatus(`Dropbox 저장됨: ${DATA_FILE_NAME}`);
    showToast("Dropbox에 저장했습니다.");
  } catch (error) {
    if (isDropboxConflict(error)) {
      setDropboxStatus("Dropbox 파일이 다른 곳에서 바뀜");
      window.alert("Dropbox 작업 파일이 다른 곳에서 먼저 바뀌었습니다.\nDropbox에서 다시 불러온 뒤 수정해 주세요.");
    } else {
      setDropboxStatus("Dropbox 저장 실패");
      window.alert(error.message);
    }
  } finally {
    dropboxSaveInFlight = false;
    if (dropboxSaveAgain) {
      saveDropboxNow();
    }
  }
}

async function downloadDropboxState(token) {
  const response = await fetch(DROPBOX_DOWNLOAD_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Dropbox-API-Arg": JSON.stringify({ path: DROPBOX_DATA_PATH })
    }
  });

  if (!response.ok) {
    throw await createDropboxError(response, "Dropbox에서 불러오지 못했습니다.");
  }

  const text = await response.text();
  const metadata = readDropboxMetadataHeader(response) || await getDropboxMetadata(token);
  return {
    value: JSON.parse(text),
    metadata
  };
}

async function uploadDropboxState(token, value, mode) {
  const response = await fetch(DROPBOX_UPLOAD_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/octet-stream",
      "Dropbox-API-Arg": JSON.stringify({
        path: DROPBOX_DATA_PATH,
        mode,
        autorename: false,
        mute: true,
        strict_conflict: true
      })
    },
    body: JSON.stringify(value, null, 2)
  });

  return readDropboxJsonResponse(response, "Dropbox에 저장하지 못했습니다.");
}

async function getDropboxMetadata(token) {
  const response = await fetch(DROPBOX_METADATA_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      path: DROPBOX_DATA_PATH,
      include_deleted: false,
      include_has_explicit_shared_members: false
    })
  });

  if (!response.ok) {
    throw await createDropboxError(response, "Dropbox 파일 정보를 읽지 못했습니다.");
  }

  return response.json();
}

async function getDropboxAccessToken(options = {}) {
  if (!dropboxToken || (!dropboxToken.accessToken && !dropboxToken.refreshToken)) {
    if (!options.silent) {
      window.alert("Dropbox를 먼저 연결해 주세요.");
    }
    renderDropboxControls();
    return "";
  }

  if (dropboxToken.accessToken && (!dropboxToken.expiresAt || Date.now() < dropboxToken.expiresAt - 60000)) {
    return dropboxToken.accessToken;
  }

  if (!dropboxToken.refreshToken) {
    disconnectDropbox();
    if (!options.silent) {
      window.alert("Dropbox 연결이 만료되었습니다. 다시 연결해 주세요.");
    }
    return "";
  }

  try {
    const body = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: dropboxToken.refreshToken,
      client_id: DROPBOX_APP_KEY
    });
    const response = await fetch(DROPBOX_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    });
    const token = await readDropboxJsonResponse(response, "Dropbox 연결 갱신에 실패했습니다.");
    if (!token.access_token) {
      throw new Error("Dropbox 연결 갱신에 실패했습니다.\n응답에 접근 토큰이 없습니다.");
    }
    dropboxToken = {
      ...dropboxToken,
      accessToken: token.access_token,
      expiresAt: token.expires_in ? Date.now() + token.expires_in * 1000 : 0
    };
    localStorage.setItem(DROPBOX_TOKEN_KEY, JSON.stringify(dropboxToken));
    return dropboxToken.accessToken;
  } catch (error) {
    disconnectDropbox();
    if (!options.silent) {
      window.alert(error.message);
    }
    return "";
  }
}

function loadDropboxToken() {
  try {
    const saved = JSON.parse(localStorage.getItem(DROPBOX_TOKEN_KEY) || "{}");
    return saved.accessToken || saved.refreshToken ? saved : null;
  } catch {
    return null;
  }
}

function loadDropboxRemote() {
  try {
    const saved = JSON.parse(localStorage.getItem(DROPBOX_REMOTE_KEY) || "{}");
    return saved.rev ? { path: DROPBOX_DATA_PATH, rev: saved.rev, contentHash: saved.contentHash || "" } : null;
  } catch {
    return null;
  }
}

function saveDropboxRemote(metadata) {
  dropboxRemote = metadata && metadata.rev
    ? {
        path: DROPBOX_DATA_PATH,
        rev: metadata.rev,
        contentHash: metadata.content_hash || ""
      }
    : null;

  if (dropboxRemote) {
    localStorage.setItem(DROPBOX_REMOTE_KEY, JSON.stringify(dropboxRemote));
  } else {
    localStorage.removeItem(DROPBOX_REMOTE_KEY);
  }
}

function isDropboxConnected() {
  return Boolean(dropboxToken && (dropboxToken.accessToken || dropboxToken.refreshToken));
}

function isDropboxReady() {
  return Boolean(isDropboxConnected() && dropboxRemote && dropboxRemote.rev);
}

function renderDropboxControls() {
  const connected = isDropboxConnected();
  const ready = isDropboxReady();

  elements.dropboxConnectButton.textContent = connected ? "Dropbox 다시 연결" : "Dropbox 연결";
  elements.dropboxReloadButton.disabled = !connected;
  elements.dropboxSaveButton.disabled = !connected;
  elements.dropboxDisconnectButton.hidden = !connected;
  elements.connectionDot.classList.toggle("is-connected", connected);

  if (!dropboxStatusMessage) {
    setDropboxStatus(connected
      ? ready ? `Dropbox 연결됨: ${DATA_FILE_NAME}` : "Dropbox 연결됨"
      : "Dropbox 미연결");
  } else {
    elements.dropboxStatus.textContent = dropboxStatusMessage;
  }
}

function setDropboxStatus(message) {
  dropboxStatusMessage = message;
  elements.dropboxStatus.textContent = message;
}

async function readDropboxJsonResponse(response, message) {
  if (response.ok) {
    return response.json();
  }

  throw await createDropboxError(response, message);
}

async function createDropboxError(response, message) {
  let detail = "";
  let summary = "";

  try {
    detail = await response.text();
    const parsed = JSON.parse(detail);
    summary = parsed.error_summary || parsed.error_description || parsed.error || "";
  } catch {
    summary = detail || response.statusText;
  }

  const error = new Error(`${message}\n${summary || response.statusText}`);
  error.status = response.status;
  error.dropboxSummary = summary;
  return error;
}

function readDropboxMetadataHeader(response) {
  const raw = response.headers.get("Dropbox-API-Result");
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function isDropboxNotFound(error) {
  return error.status === 409 && /not_found/.test(error.dropboxSummary || "");
}

function isDropboxConflict(error) {
  return error.status === 409 && /conflict|malformed_path|path/.test(error.dropboxSummary || "");
}

function getRedirectUri() {
  return window.location.origin + window.location.pathname;
}

function createCodeVerifier() {
  const bytes = new Uint8Array(64);
  window.crypto.getRandomValues(bytes);
  return base64UrlEncode(bytes);
}

async function createCodeChallenge(verifier) {
  const data = new TextEncoder().encode(verifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return base64UrlEncode(new Uint8Array(digest));
}

function base64UrlEncode(bytes) {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function createId() {
  if (window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.hidden = true;
  }, 2200);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
