/* VERDIKT Check – website: language switch, menu, scroll effects, the app showcase, Verdi, FAQ and tester sign-up. */
(function () {
  'use strict';
  var T = {
    hu: {
      title: 'VERDIKT Check – Eredeti vagy replika? Derítsük ki.',
      desc: 'Fotózd le a márkás cipőt, ruhát vagy táskát, és a VERDIKT Check kb. egy perc alatt megmondja, eredeti-e, megéri-e az árát, és mennyit ér.',
      nav_how: 'Így működik', nav_app: 'Az app', nav_features: 'Funkciók', nav_faq: 'GYIK', nav_beta: 'Tesztelés',
      cta_tester: 'Legyél tesztelő', soon: 'Hamarosan',
      l_privacy: 'Adatvédelem', l_terms: 'Felhasználási feltételek', l_verify: 'Tanúsítvány ellenőrzése', l_delete: 'Fiók törlése', l_child: 'Gyermekvédelem',
      chip1: 'EREDETI · 88%', chip2: 'MINŐSÉGI REPLIKA?', chip3: 'MEGÉRI AZ ÁRÁT',
      kicker: 'AI-alapú eredetiség-ellenőrzés', h1a: 'Eredeti vagy replika?', h1b: 'Derítsük ki.',
      lead: 'Fotózd le a márkás cipőt, ruhát vagy táskát, és a VERDIKT Check kb. egy perc alatt megmondja, eredeti-e, megéri-e az árát, és mennyit ér.',
      free: '✦ Az első ellenőrzés ingyenes',
      bubbles: ['Eredeti? Majd én megmondom.', 'Mutasd a címkét!', 'Hmm… ez a varrás gyanús.', 'Psszt, egy perc az egész.', 'Előbb fotó, aztán fizetés!'],
      t1: ['Cipő', 'Pulóver', 'Póló', 'Kabát', 'Táska', 'Sapka', 'Öv', '100 márka'],
      t2: ['Sneaker', 'Streetwear', 'Prémium', 'Luxus', 'Sport', 'Eredeti?', 'Replika?'],
      how_k: 'A folyamat', how_t: 'Négy lépés. <span class="grad">Egy perc.</span>',
      p1t: 'Fotó', p1: '2–6 fotó a fontos részletekről – a fotózási segéd megmutatja, mit és hogyan.',
      p2t: 'AI-elemzés', p2: 'Az AI átnézi a címkéket, varrásokat, logókat és kellékeket.',
      p3t: 'Verdikt', p3: 'Eredeti vagy replika – megbízhatósági százalékkal és indoklással.',
      p4t: 'Döntés', p4: 'Megéri? Mennyit ér? Hol kapod meg eredetiben olcsóbban?',
      app_k: 'Az app belülről', app_t: 'Pár koppintás, és <span class="grad">tudod, mit veszel.</span>',
      scan: 'AI-ELEMZÉS…', stamp: 'EREDETI ✓',
      s1t: 'Indíts egy ellenőrzést', s1: 'Válaszd ki, mit nézünk meg: cipő, pulóver, póló, kabát, táska, sapka vagy öv.',
      s2t: 'Fotózd le a részleteket', s2: 'A fotózási segéd megmutatja, mit és hogyan fotózz: oldalnézet, talp, belső címke, logó.',
      s3t: 'Megkapod a verdiktet', s3: 'Eredeti, minőségi vagy rossz minőségű replika – megbízhatósági százalékkal. Ha nem lehet biztosan dönteni, azt is megmondja.',
      s4t: 'Látod, mit talált', s4: 'Pontról pontra: címkék, varrások, kellékek – mi stimmel, és mi kérdéses.',
      s5t: 'Megtudod, mennyit ér', s5: 'Javasolt hirdetési ár, új és használt piaci ár, és hogy megéri-e a kért összeget.',
      s6t: 'Tanúsítvány a hirdetésedbe', s6: 'Egyedi kód és ellenőrző link: a vevő egy kattintással megnézheti az ítéletet.',
      v_k: 'Nincs mellébeszélés', v_t: 'Négyféle ítélet. <span class="grad">Mindig egyenesen.</span>',
      va: 'EREDETI', va_s: 'A látható részletek az eredetinek felelnek meg.',
      vh: 'MINŐSÉGI REPLIKA', vh_s: 'Jó minőségű másolat – nem eredeti termék.',
      vl: 'ROSSZ MINŐSÉGŰ REPLIKA', vl_s: 'Könnyen felismerhető másolat.',
      vi: 'NEM ELDÖNTHETŐ', vi_s: 'A fotók alapján nem lehet felelősen dönteni – ezt is megmondjuk.',
      note: 'Az eredmény a fotóid alapján készült AI-becslés – nem hivatalos hitelesítés és nem garancia. Minél élesebbek és teljesebbek a fotók, annál pontosabb.',
      f_k: 'És még', f_t: 'Nem csak ellenőriz. <span class="grad">Segít jól dönteni.</span>',
      f8t: 'márka, a kedvenceidre szabva', f8: 'Sneaker, streetwear, prémium, luxus és sport – válaszd ki a kedvenceidet, és az app rájuk hangolódik.',
      f1t: 'Olcsóbban eredetit', f1: 'Megmutatja, hol kapod meg eredetiben a legjobb áron, biztonságos helyekről.',
      f2t: 'Hirdetés-ellenőrzés', f2: 'Vásárlás előtt átnézi a hirdetést, és megmondja, mi gyanús benne és mit kérdezz az eladótól.',
      f3t: 'Eladási ár + hirdetésíró', f3: 'Megmondja, mennyiért add el, és megírja helyetted a hirdetés szövegét.',
      f4t: 'Digitális tanúsítvány', f4: 'Kód és QR-kód a hirdetésedbe – a vevő egy kattintással ellenőrizheti az ítéletet.',
      f5t: 'Gardrób-portfólió', f5: 'A darabjaid összértéke és a nyereséged a vételárhoz képest, értékgörbével.',
      f6t: 'Kívánságlista + árfigyelés', f6: 'Add meg a célárat, és szólunk, ha elérhető a legolcsóbb ajánlat.',
      f7t: 'Barátok és ranglista', f7: 'Ossz meg ellenőrzéseket, chatelj, és nézd meg, kinek van a legtöbb eredeti darabja.',
      pro_note: 'Egyes funkciók PRO-előfizetéssel érhetők el. A PRO 3 napig ingyen kipróbálható, kártya nélkül.',
      st1: 'ellenőrzés eddig', st2: 'replikát buktatott le', st3: 'eredetit erősített meg',
      faq_k: 'Gyakori kérdések', faq_t: 'Kérdésed van? <span class="grad">Itt a válasz.</span>',
      faq: [
        ['Hogyan működik a VERDIKT Check?', 'Lefotózod a terméket a fontos részletekről – címke, varrás, talp, logó –, az AI pedig összeveti ezeket azzal, ahogyan az eredeti kinéz. Kb. egy perc alatt kapsz ítéletet indoklással, és azt is megtudod, megéri-e az árát.'],
        ['Mennyire megbízható az ítélet?', 'Az ítélet a fotóidon látható részleteken alapul, ezért minél élesebbek és teljesebbek a fotók, annál pontosabb. Mindig látod a megbízhatósági százalékot, és ha a fotókból nem lehet felelősen dönteni, az app ezt meg is mondja. Az eredmény AI-becslés, nem hivatalos hitelesítés – drága vásárlás előtt érdemes szakértőt is megkérdezni.'],
        ['Mennyibe kerül?', 'Az első ellenőrzésed ingyenes. Utána kreditekkel (1, 3, 5 vagy 10 ellenőrzés, előfizetés nélkül) vagy PRO-előfizetéssel folytathatod. A PRO 3 napig ingyen kipróbálható, kártya nélkül.'],
        ['Milyen termékeket ellenőrizhetek?', 'Cipőt, pulóvert, pólót, kabátot, táskát, sapkát és övet, 100 népszerű márkától – a sneakerektől a luxusmárkákig.'],
        ['Mi történik a fotóimmal?', 'A fotókat titkosított kapcsolaton küldjük elemzésre, és csak a saját ellenőrzéseidhez tároljuk őket. Bármikor törölheted őket, vagy akár az egész fiókodat. Részletek az <a href="privacy.html">adatvédelmi tájékoztatóban</a>.'],
        ['Kapcsolatban álltok a márkákkal?', 'Nem. A VERDIKT Check független szolgáltatás, egyik márkával sem áll kapcsolatban.'],
        ['Mikor és hol lesz elérhető?', 'Hamarosan a Google Play-en, Androidra. Most zárt tesztben van – <a href="#beta">jelentkezz tesztelőnek</a>, és az elsők között próbálhatod ki.']
      ],
      b_k: 'Zárt teszt · Android', b_t: 'Próbáld ki <span class="grad">elsőként.</span>',
      b_lead: 'A VERDIKT Check most zárt tesztben van a Google Play-en. Add meg a Google-fiókod e-mail-címét (amivel a Play Áruházat használod), és küldjük a meghívót.',
      b_label: 'E-mail-cím', b_ph: 'pelda@gmail.com', b_btn: 'Jelentkezem',
      b_ok: 'Elmúltam 16 éves, és elfogadom az <a href="privacy.html" target="_blank" rel="noopener">adatkezelési tájékoztatót</a>.',
      b_fine: 'Androidos telefon kell hozzá. Spamet nem küldünk – a címedet csak a meghívóhoz használjuk.',
      b_done: 'Megvagy!', b_done_s: 'Hamarosan küldjük a meghívót a megadott címre.',
      b_r1: 'Androidos telefon', b_r2: 'Google-fiók (Gmail)', b_r3: '14 nap tesztelés', b_r4: '1 hónap PRO ajándék', b_go: 'Jelentkezem tesztelőnek', b_go_s: 'Rövid jelentkezési lap – kb. egy perc.',
      e_email: 'Ez nem tűnik érvényes e-mail-címnek.', e_ok: 'Pipáld be, hogy elmúltál 16 éves, és elfogadod a tájékoztatót.',
      e_rate: 'Túl sok jelentkezés érkezett innen. Próbáld újra holnap.', e_net: 'Most nem sikerült elküldeni. Próbáld újra kicsit később.', sending: 'Küldés…',
      fin_t: 'Mielőtt fizetsz, <span class="grad">VERDIKT.</span>', fin_s: 'Pár fotó, és tudod, mit veszel.', fin_btn: 'Legyél tesztelő – próbáld ki elsőként',
      foot_tag: 'Eredeti vagy replika? Derítsük ki.', indep: 'Független szolgáltatás, egyik márkával sem áll kapcsolatban.',
      nav_wr: 'Gardrób', nav_rt: 'Pontozás', nav_rk: 'Ranglista', nav_ws: 'Kívánságlista',
      bw_wr: 'GARDRÓB', bw_rk: 'RANGLISTA', bw_ws: 'KÍVÁNSÁG', bw_pf: 'PROFIL',
      wr_k: 'Gardrób · portfólió', wr_t: 'Tudd, mennyit ér <span class="grad">a gardróbod.</span>',
      wr_p: 'Az eredetinek ítélt darabjaid egy helyen: becsült piaci érték, nyereség a vételárhoz képest és a legértékesebb darabod – értékgörbével, ami megmutatja, hogyan változik a gyűjteményed értéke.',
      wr_1: 'Becsült összérték egy pillantással', wr_2: 'Nyereség a vételárhoz képest', wr_3: 'A legértékesebb darabod kiemelve', wr_4: 'Értékgörbe és havi jelentés',
      wr_w1: 'Gardróbod értéke', wr_w2: 'Legértékesebb darab', wr_w3: 'Fekete pehelykabát',
      rt_k: 'Nyilvános gardrób · pontozás', rt_t: 'Mutasd meg. <span class="grad">Pontozzanak <span class="nw">1–10-ig.</span></span>',
      rt_p: 'Tedd nyilvánossá a gardróbodat, böngészd mások gyűjteményét, és pontozd őket 1-től 10-ig. Mások alapból csak a generált beceneved látják – a neved, a fotód és az e-mail-címed nem.',
      rt_1: 'Legjobbra értékelt és legújabb gardróbok', rt_2: 'Pontozás 1-től 10-ig', rt_3: 'Egy ember egy értékelést adhat, és bármikor módosíthatja', rt_4: 'Bármikor visszaállíthatod privátra',
      rt_w1: 'Értékelés · /10', rt_w2: '41 értékelés', rt_w3: 'Mennyire tetszik?',
      rk_k: 'Eredeti-ranglista', rk_t: 'Ki gyűjti a <span class="grad">legtöbb eredetit?</span>',
      rk_p: 'Rangsor az eredetinek ítélt darabok száma és becsült értéke szerint. Csak egy automatikusan kapott becenév látszik (pl. Lime Falcon 42) – és aki az élre kerül, ajándékba 3 nap PRO-t kap.',
      rk_1: 'Lista érték és darabszám szerint', rk_2: 'Automatikus becenév, a profilod rejtve marad', rk_3: 'Az elsőnek 3 nap PRO jár (legalább 3 eredeti darabbal)', rk_4: 'Kilépsz, és a sorod azonnal törlődik',
      rk_w1: 'A dobogó', rk_you: 'Te leszel?', rk_w2: '1. HELY = 3 NAP PRO',
      ws_k: 'Kívánságlista · árfigyelés', ws_t: 'Mentsd el. <span class="grad">Szólunk, ha olcsóbb.</span>',
      ws_p: 'Tedd fel a kiszemelt darabot, add meg a célárat, és megmutatjuk, hol kapod meg eredetiben a legolcsóbban. PRO-val kétnaponta figyeljük az árakat, és értesítünk, ha egy ár a célárad alá megy.',
      ws_1: 'Saját kirakat a kívánságaidnak', ws_2: 'Célár és ármérő minden tételnél', ws_3: 'A legolcsóbb eredeti ajánlat, biztonságos helyről', ws_4: 'Árfigyelés és értesítés (max. 5 tétel)',
      ws_now: 'most', ws_w1: 'Célár alatt!', ws_w2: 'A kiszemelt darabod most olcsóbb, mint a célárad.', ws_w3: 'Ármérő', ws_tgt: 'CÉLÁR', ws_lo: 'olcsó', ws_hi: 'drága',
      pf_k: 'Profil', pf_t: 'A te profilod, <span class="grad">a te szabályaid.</span>',
      pf_p: 'Felhasználónév, avatar és a saját statisztikáid: ellenőrzések, eredetik, gardrób. Te döntöd el, mi látszik – a fotód, a neved és a státuszod alapból rejtve marad. A meghívókódoddal pedig minden barát után mindketten 3 nap PRO-t kaptok.',
      pf_1: 'Felhasználónév és avatar', pf_2: 'Ellenőrzések, eredetik, gardrób egy helyen', pf_3: 'Láthatóság egyetlen kapcsolóval', pf_4: 'Meghívókód: +3 nap PRO mindkettőtöknek',
      pf_w1: 'Mutasd a profilom másoknak', pf_w2: 'Te döntöd el, bármikor', pf_w3: 'Meghívókódod', pf_w4: '+3 nap PRO neked és a barátodnak is.',
      pr_t: 'Minden funkció. <span class="grad">Korlátlanul.</span>', pr_p: 'Korlátlan ellenőrzés és minden extra. Próbáld ki 3 napig ingyen – kártya nélkül, magától lejár.',
      pr_1: 'Korlátlan ellenőrzés', pr_2: 'Ár-érték ítélet', pr_3: 'Élő piaci ár', pr_4: 'Árfigyelés', pr_5: 'Értékgörbe', pr_6: 'Hirdetés-ellenőrzés', pr_7: 'Eladási ár + hirdetésíró', pr_8: 'Tanúsítvány és megosztás', pr_9: 'Napi márkatippek', pr_10: 'Olcsóbban eredetit',
      pr_cr: 'Nem kérsz előfizetést? Kreditekkel is mehet: 1, 3, 5 vagy 10 ellenőrzés.', pr_c1: 'PRO TAGSÁG', pr_c2: 'Minden funkció, korlátlanul', pr_tr: 'nap ingyen',
      f5t: 'Barátok és chat', f5: 'Üzenj a barátaidnak, küldj fotót vagy egy ellenőrzést, és oszd meg velük a gardróbodat.',
      f6t: 'Napi márkatippek', f6: 'Friss tippek a kedvenc márkáidhoz: mire figyelj, mikor érdemes venni és eladni.',
      f_k2: ''
    },
    en: {
      title: 'VERDIKT Check – Authentic or replica? Let’s find out.',
      desc: 'Snap your branded sneakers, clothes or bag, and in about a minute VERDIKT Check tells you whether it’s authentic, worth the price, and what it’s worth.',
      nav_how: 'How it works', nav_app: 'The app', nav_features: 'Features', nav_faq: 'FAQ', nav_beta: 'Testing',
      cta_tester: 'Become a tester', soon: 'Coming soon',
      l_privacy: 'Privacy', l_terms: 'Terms of use', l_verify: 'Verify a certificate', l_delete: 'Delete account', l_child: 'Child safety',
      chip1: 'AUTHENTIC · 88%', chip2: 'HIGH-QUALITY REPLICA?', chip3: 'WORTH THE PRICE',
      kicker: 'AI-powered authenticity check', h1a: 'Authentic or replica?', h1b: 'Let’s find out.',
      lead: 'Snap your branded sneakers, clothes or bag, and in about a minute VERDIKT Check tells you whether it’s authentic, worth the price, and what it’s worth.',
      free: '✦ Your first check is free',
      bubbles: ['Authentic? I’ll tell you.', 'Show me the label!', 'Hmm… that stitching looks off.', 'Psst, it takes a minute.', 'Photo first, then pay!'],
      t1: ['Shoes', 'Hoodies', 'T-shirts', 'Jackets', 'Bags', 'Caps', 'Belts', '100 brands'],
      t2: ['Sneakers', 'Streetwear', 'Premium', 'Luxury', 'Sport', 'Authentic?', 'Replica?'],
      how_k: 'The process', how_t: 'Four steps. <span class="grad">One minute.</span>',
      p1t: 'Photos', p1: '2–6 photos of the key details – the photo assistant shows what to shoot and how.',
      p2t: 'AI check', p2: 'The AI examines the labels, stitching, logos and hardware.',
      p3t: 'Verdict', p3: 'Authentic or replica – with a confidence score and the reasons.',
      p4t: 'Decision', p4: 'Worth it? What’s it worth? Where to get it genuine for less?',
      app_k: 'Inside the app', app_t: 'A few taps and <span class="grad">you know what you’re buying.</span>',
      scan: 'AI CHECKING…', stamp: 'AUTHENTIC ✓',
      s1t: 'Start a check', s1: 'Pick what we’re looking at: shoes, hoodie, T-shirt, jacket, bag, cap or belt.',
      s2t: 'Photograph the details', s2: 'The photo assistant shows what to shoot and how: side view, sole, inside label, logo.',
      s3t: 'Get the verdict', s3: 'Authentic, high-quality or low-quality replica – with a confidence score. If a reliable call isn’t possible, it tells you.',
      s4t: 'See what it found', s4: 'Point by point: labels, stitching, hardware – what matches and what’s questionable.',
      s5t: 'Find out what it’s worth', s5: 'A suggested listing price, new and used market prices, and whether the asking price is fair.',
      s6t: 'A certificate for your listing', s6: 'A unique code and verify link: buyers can see the verdict in one click.',
      v_k: 'No guesswork', v_t: 'Four verdicts. <span class="grad">Always straight.</span>',
      va: 'AUTHENTIC', va_s: 'The visible details match the genuine product.',
      vh: 'HIGH-QUALITY REPLICA', vh_s: 'A well-made copy – not the genuine product.',
      vl: 'LOW-QUALITY REPLICA', vl_s: 'An easy-to-spot copy.',
      vi: 'INCONCLUSIVE', vi_s: 'The photos aren’t enough for a reliable call – and we say so.',
      note: 'The result is an AI estimate based on your photos – not an official authentication and not a guarantee. The sharper and more complete the photos, the more accurate it is.',
      f_k: 'And more', f_t: 'It doesn’t just check. <span class="grad">It helps you decide.</span>',
      f8t: 'brands, tuned to your favourites', f8: 'Sneakers, streetwear, premium, luxury and sport – pick your favourites and the app tunes itself to them.',
      f1t: 'Genuine for less', f1: 'Shows where to get it genuine at the best price, from safe places.',
      f2t: 'Listing check', f2: 'Before you buy, it reviews the listing and tells you what’s suspicious and what to ask the seller.',
      f3t: 'Resale price + listing writer', f3: 'Tells you what to sell it for and writes the listing text for you.',
      f4t: 'Digital certificate', f4: 'A code and QR code for your listing – buyers can verify the verdict in one click.',
      f5t: 'Wardrobe portfolio', f5: 'The total value of your pieces and your gain vs. what you paid, with a value chart.',
      f6t: 'Wishlist + price alerts', f6: 'Set a target price and we’ll tell you when the cheapest offer reaches it.',
      f7t: 'Friends & leaderboard', f7: 'Share checks, chat, and see who owns the most authentic pieces.',
      pro_note: 'Some features need PRO. You can try PRO free for 3 days, no card needed.',
      st1: 'checks so far', st2: 'replicas caught', st3: 'authentic items confirmed',
      faq_k: 'FAQ', faq_t: 'Got a question? <span class="grad">Here’s the answer.</span>',
      faq: [
        ['How does VERDIKT Check work?', 'You photograph the key details of the item – label, stitching, sole, logo – and the AI compares them with how the genuine product looks. In about a minute you get a verdict with the reasons, plus whether it’s worth the price.'],
        ['How reliable is the verdict?', 'The verdict is based on the details visible in your photos, so the sharper and more complete they are, the more accurate it is. You always see the confidence score, and if a reliable call isn’t possible from the photos, the app says so. The result is an AI estimate, not an official authentication – for an expensive purchase, ask an expert too.'],
        ['How much does it cost?', 'Your first check is free. After that you can use credits (1, 3, 5 or 10 checks, no subscription) or a PRO subscription. You can try PRO free for 3 days, no card needed.'],
        ['What can I check?', 'Shoes, hoodies, T-shirts, jackets, bags, caps and belts from 100 popular brands – from sneakers to luxury labels.'],
        ['What happens to my photos?', 'Your photos are sent for analysis over an encrypted connection and stored only with your own checks. You can delete them at any time, or your whole account. Details in the <a href="privacy.html">privacy policy</a>.'],
        ['Are you affiliated with the brands?', 'No. VERDIKT Check is an independent service and is not affiliated with any brand.'],
        ['When and where will it be available?', 'Soon on Google Play, for Android. It’s in a closed test right now – <a href="#beta">sign up as a tester</a> and be among the first to try it.']
      ],
      b_k: 'Closed test · Android', b_t: 'Be the <span class="grad">first to try it.</span>',
      b_lead: 'VERDIKT Check is in a closed test on Google Play. Enter your Google account email (the one you use for the Play Store) and we’ll send you an invite.',
      b_label: 'Email address', b_ph: 'you@gmail.com', b_btn: 'Sign me up',
      b_ok: 'I’m 16 or older and I accept the <a href="privacy.html#en" target="_blank" rel="noopener">privacy policy</a>.',
      b_fine: 'You’ll need an Android phone. No spam – we only use your address for the invite.',
      b_done: 'You’re in!', b_done_s: 'We’ll send the invite to your address soon.',
      b_r1: 'Android phone', b_r2: 'Google account (Gmail)', b_r3: '14 days of testing', b_r4: '1 month of PRO, free', b_go: 'Sign me up as a tester', b_go_s: 'A short application form – about a minute.',
      e_email: 'That doesn’t look like a valid email address.', e_ok: 'Please confirm you’re 16+ and accept the privacy policy.',
      e_rate: 'Too many sign-ups from here. Please try again tomorrow.', e_net: 'Couldn’t send it right now. Please try again a bit later.', sending: 'Sending…',
      fin_t: 'Before you pay, <span class="grad">VERDIKT.</span>', fin_s: 'A few photos and you know what you’re buying.', fin_btn: 'Become a tester – try it first',
      foot_tag: 'Authentic or replica? Let’s find out.', indep: 'Independent service, not affiliated with any brand.',
      nav_wr: 'Wardrobe', nav_rt: 'Ratings', nav_rk: 'Leaderboard', nav_ws: 'Wishlist',
      bw_wr: 'WARDROBE', bw_rk: 'RANKING', bw_ws: 'WISHLIST', bw_pf: 'PROFILE',
      wr_k: 'Wardrobe · portfolio', wr_t: 'Know what your <span class="grad">wardrobe is worth.</span>',
      wr_p: 'Your items rated authentic in one place: estimated market value, your gain vs. what you paid and your most valuable piece – with a value chart that shows how your collection’s value changes.',
      wr_1: 'Total estimated value at a glance', wr_2: 'Your gain vs. what you paid', wr_3: 'Your most valuable piece, highlighted', wr_4: 'Value chart and monthly report',
      wr_w1: 'Your wardrobe’s value', wr_w2: 'Most valuable piece', wr_w3: 'Black puffer jacket',
      rt_k: 'Public wardrobe · ratings', rt_t: 'Show it off. <span class="grad">Get rated <span class="nw">1–10.</span></span>',
      rt_p: 'Make your wardrobe public, browse other people’s collections and rate them from 1 to 10. By default others only see your generated nickname – not your name, photo or email.',
      rt_1: 'Top-rated and newest wardrobes', rt_2: 'Ratings from 1 to 10', rt_3: 'One rating per person, and you can change it any time', rt_4: 'Switch back to private any time',
      rt_w1: 'Rating · /10', rt_w2: '41 ratings', rt_w3: 'How much do you like it?',
      rk_k: 'Authentic leaderboard', rk_t: 'Who collects the <span class="grad">most authentic pieces?</span>',
      rk_p: 'Ranked by the number and estimated value of items rated authentic. Only an automatic nickname is shown (e.g. Lime Falcon 42) – and whoever reaches #1 gets 3 days of PRO free.',
      rk_1: 'Lists by value and by count', rk_2: 'Automatic nickname, your profile stays hidden', rk_3: '#1 gets 3 days of PRO (with at least 3 authentic pieces)', rk_4: 'Leave and your row is deleted right away',
      rk_w1: 'The podium', rk_you: 'You next?', rk_w2: '#1 = 3 DAYS OF PRO',
      ws_k: 'Wishlist · price alerts', ws_t: 'Save it. <span class="grad">We’ll tell you when it drops.</span>',
      ws_p: 'Add the piece you want, set a target price, and we show you where to get it genuine for the least. With PRO we check prices every 2 days and notify you when one drops below your target.',
      ws_1: 'Your own wishlist window', ws_2: 'Target price and price meter for every item', ws_3: 'The cheapest genuine offer, from a safe place', ws_4: 'Price alerts and notifications (up to 5 items)',
      ws_now: 'now', ws_w1: 'Below your target!', ws_w2: 'The piece you want is now cheaper than your target price.', ws_w3: 'Price meter', ws_tgt: 'TARGET', ws_lo: 'cheap', ws_hi: 'pricey',
      pf_k: 'Profile', pf_t: 'Your profile, <span class="grad">your rules.</span>',
      pf_p: 'Username, avatar and your own stats: checks, authentic items, wardrobe. You decide what’s visible – your photo, name and status stay hidden by default. And with your invite code, you and every friend who joins both get 3 days of PRO.',
      pf_1: 'Username and avatar', pf_2: 'Checks, authentic items and wardrobe in one place', pf_3: 'Visibility with a single switch', pf_4: 'Invite code: +3 days of PRO for both of you',
      pf_w1: 'Show my profile to others', pf_w2: 'Your call, any time', pf_w3: 'Your invite code', pf_w4: '+3 days of PRO for you and your friend.',
      pr_t: 'Every feature. <span class="grad">Unlimited.</span>', pr_p: 'Unlimited checks and every extra. Try it free for 3 days – no card needed, it ends on its own.',
      pr_1: 'Unlimited checks', pr_2: 'Price verdict', pr_3: 'Live market price', pr_4: 'Price alerts', pr_5: 'Value chart', pr_6: 'Listing check', pr_7: 'Resale price + listing writer', pr_8: 'Certificate & sharing', pr_9: 'Daily brand tips', pr_10: 'Genuine for less',
      pr_cr: 'Not into subscriptions? Use credits instead: 1, 3, 5 or 10 checks.', pr_c1: 'PRO MEMBERSHIP', pr_c2: 'Every feature, unlimited', pr_tr: 'days free',
      f5t: 'Friends & chat', f5: 'Message your friends, send a photo or a check, and share your wardrobe with them.',
      f6t: 'Daily brand tips', f6: 'Fresh tips for your favourite brands: what to look for, when to buy and when to sell.',
      f_k2: ''
    }
  };

  // Sign-up mode (config.js): signup: 'notify' = "tell me when it's out" (+ optional tester), 'tester' = tester sign-up,
  // 'closed' = no sign-up, "coming soon". The older testerSignup: false still means closed.
  var MODE = (window.SITE && window.SITE.signup) || (window.SITE && window.SITE.testerSignup === false ? 'closed' : 'tester');
  var CLOSED = MODE === 'closed', NOTIFY = MODE === 'notify';
  // With notify mode the tester box can still be closed (config.js testers: false) until the closed test is ready.
  var TCLOSED = CLOSED || (NOTIFY && window.SITE.testers === false);
  if (NOTIFY) {
    // Top of the page: "tell me when it's out". The box further down stays a tester sign-up.
    Object.assign(T.hu, { cta_tester: 'Értesíts az indulásról',
      b_k: 'Zárt teszt · Android', b_t: 'Legyél <span class="grad">tesztelő.</span>',
      b_lead: 'Próbáld ki a VERDIKT Checket elsőként, még a megjelenés előtt. Töltsd ki a rövid jelentkezési lapot, és amint indul a zárt teszt, küldjük a meghívót.',
      b_btn: 'Jelentkezem tesztelőnek',
      b_fine: 'Androidos telefon kell hozzá. Spamet nem küldünk: csak a tesztelői meghívót küldjük, és szólunk az induláskor. A címedet bármikor töröltetheted.',
      b_done: 'Megvagy!', b_done_s: 'Amint indul a zárt teszt, küldjük a meghívót a megadott címre.',
      h_t: 'Kérj értesítést – szólunk, amint letölthető.', h_ph: 'E-mail-címed', h_btn: 'Értesíts', h_done: 'Feliratkoztál! Szólunk, amint letölthető.',
      h_alt: 'Vagy legyél tesztelő, és próbáld ki elsőként' });
    Object.assign(T.en, { cta_tester: 'Notify me at launch',
      b_k: 'Closed test · Android', b_t: 'Become a <span class="grad">tester.</span>',
      b_lead: 'Try VERDIKT Check first, before it launches. Fill in the short application form and we’ll send you an invite as soon as the closed test starts.',
      b_btn: 'Sign me up as a tester',
      b_fine: 'You’ll need an Android phone. No spam: we only send the tester invite and tell you at launch. You can have your address deleted any time.',
      b_done: 'You’re in!', b_done_s: 'We’ll send the invite to your address as soon as the closed test starts.',
      h_t: 'Get notified – we’ll tell you when it’s out.', h_ph: 'Your email', h_btn: 'Notify me', h_done: 'You’re on the list! We’ll tell you when it’s out.',
      h_alt: 'Or become a tester and try it first' });
    T.hu.faq[6][1] = 'Hamarosan a Google Play-en, Androidra. <a href="#hsu">Kérj értesítést</a>, és szólunk, amint letölthető – vagy <a href="tesztelo.html">jelentkezz tesztelőnek</a>, és már előtte kipróbálhatod.';
    T.en.faq[6][1] = 'Soon on Google Play, for Android. <a href="#hsu">Get notified</a> and we’ll tell you when it’s out – or <a href="tesztelo.html">sign up as a tester</a> and try it even earlier.';
    var hc = document.querySelector('.hdr-cta'); if (hc) hc.setAttribute('href', '#hsu');
    document.documentElement.classList.add('notify-mode');
    if (TCLOSED) {
      Object.assign(T.hu, { b_k: 'Zárt teszt · hamarosan', b_t: 'Tesztelés <span class="grad">hamarosan.</span>',
        b_lead: 'A VERDIKT Check zárt tesztje nemsokára indul a Google Play-en, Androidra. A tesztelő-jelentkezés most még zárva van.',
        soon_follow: 'Add meg az e-mail-címedet, és szólunk, amint tesztelőnek jelentkezhetsz – vagy kövess minket, ott is jelezzük elsőként.', bsu_done: 'Feliratkoztál! Szólunk, amint jelentkezhetsz tesztelőnek.',
        soon_cta: 'Kérek értesítést', fin_btn: 'Értesíts, amikor letölthető' });
      Object.assign(T.en, { b_k: 'Closed test · coming soon', b_t: 'Testing <span class="grad">soon.</span>',
        b_lead: 'The closed test of VERDIKT Check starts soon on Google Play, for Android. Tester sign-ups aren’t open yet.',
        soon_follow: 'Enter your email and we’ll tell you as soon as you can sign up as a tester – or follow us, we’ll announce it there first too.', bsu_done: 'You’re on the list! We’ll tell you as soon as you can sign up as a tester.',
        soon_cta: 'Notify me', fin_btn: 'Notify me when it’s out' });
      T.hu.faq[6][1] = 'Hamarosan a Google Play-en, Androidra. <a href="#hsu">Kérj értesítést</a>, és szólunk, amint letölthető. A zárt teszt is nemsokára indul – a tesztelő-jelentkezést itt és a közösségi oldalainkon jelezzük.';
      T.en.faq[6][1] = 'Soon on Google Play, for Android. <a href="#hsu">Get notified</a> and we’ll tell you when it’s out. The closed test starts soon too – we’ll announce tester sign-ups here and on our socials.';
      var mg = document.querySelector('.mega'); if (mg) mg.setAttribute('href', '#hsu');
      document.documentElement.classList.add('beta-closed');
    }
  }
  if (CLOSED) {
    Object.assign(T.hu, { cta_tester: 'Tesztelés hamarosan', b_k: 'Zárt teszt · hamarosan', b_t: 'Hamarosan <span class="grad">indulunk.</span>',
      b_lead: 'A VERDIKT Check zárt tesztje nemsokára indul a Google Play-en, Androidra. A jelentkezés most még zárva van.',
      soon_follow: 'Kövess minket TikTokon és Instagramon – ott szólunk elsőként, amikor jelentkezni lehet.', fin_btn: 'A zárt teszt hamarosan indul' });
    Object.assign(T.en, { cta_tester: 'Testing soon', b_k: 'Closed test · coming soon', b_t: 'Coming <span class="grad">soon.</span>',
      b_lead: 'The closed test of VERDIKT Check starts soon on Google Play, for Android. Sign-ups aren’t open yet.',
      soon_follow: 'Follow us on TikTok and Instagram – that’s where we’ll announce it first when sign-ups open.', fin_btn: 'The closed test starts soon' });
    T.hu.faq[6][1] = 'Hamarosan a Google Play-en, Androidra. A zárt teszt nemsokára indul – kövess minket <a href="https://www.tiktok.com/@verdiktcheck" target="_blank" rel="noopener">TikTokon</a> vagy <a href="https://www.instagram.com/verdikt_check" target="_blank" rel="noopener">Instagramon</a>, és ott szólunk, amikor jelentkezni lehet.';
    T.en.faq[6][1] = 'Soon on Google Play, for Android. The closed test starts soon – follow us on <a href="https://www.tiktok.com/@verdiktcheck" target="_blank" rel="noopener">TikTok</a> or <a href="https://www.instagram.com/verdikt_check" target="_blank" rel="noopener">Instagram</a> and we’ll tell you when sign-ups open.';
    document.documentElement.classList.add('beta-closed');
  } else if (!TCLOSED) { T.hu.soon_follow = ''; T.en.soon_follow = ''; }
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } } };

  var q = (location.search.match(/[?&]lang=(hu|en)/) || [])[1];
  var lang = q || store.get('vk-lang') || ((navigator.language || 'hu').toLowerCase().indexOf('hu') === 0 ? 'hu' : 'en');
  if (lang !== 'hu' && lang !== 'en') lang = 'hu';

  /* ---------- tickers ---------- */
  function ticker(el, words) { var row = words.map(function (w) { return '<span>' + w + '</span>'; }).join(''); el.innerHTML = row + row + row + row; }

  /* ---------- FAQ ---------- */
  function faq(L) {
    var box = $('#faqlist'); if (!box) return;
    box.innerHTML = L.faq.map(function (f, i) { return '<details' + (i === 0 ? ' open' : '') + '><summary>' + f[0] + '<i aria-hidden="true"></i></summary><div class="ans">' + f[1] + '</div></details>'; }).join('');
    $$('details', box).forEach(function (d) { d.addEventListener('toggle', function () { if (d.open) $$('details', box).forEach(function (o) { if (o !== d) o.open = false; }); }); });
  }

  /* ---------- language ---------- */
  function applyLang(l) {
    lang = l; var L = T[l];
    document.documentElement.lang = l;
    document.title = L.title;
    var md = $('meta[name="description"]'); if (md) md.setAttribute('content', L.desc);
    $$('[data-i18n]').forEach(function (el) { var v = L[el.getAttribute('data-i18n')]; if (typeof v === 'string') el.textContent = v; });
    $$('[data-i18n-html]').forEach(function (el) { var v = L[el.getAttribute('data-i18n-html')]; if (typeof v === 'string') el.innerHTML = v; });
    $$('[data-i18n-ph]').forEach(function (el) { var v = L[el.getAttribute('data-i18n-ph')]; if (v) el.setAttribute('placeholder', v); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === l)); });
    $$('[data-shot]').forEach(function (img, i) { var src = 'img/' + img.getAttribute('data-shot') + '-' + l + '.webp'; if (img.getAttribute('src') !== src) img.setAttribute('src', src); });
    $$('[data-img]').forEach(function (img) { var src = 'img/' + img.getAttribute('data-img') + '-' + l + '.webp'; if (img.getAttribute('src') !== src) img.setAttribute('src', src); });
    $$('[data-i18n-attr]').forEach(function (el) { var v = L[el.getAttribute('data-i18n-attr')]; if (v) el.setAttribute('data-l', v); });
    $$('[data-count]').forEach(function (el) { el.textContent = fmtCount(el, el.__done ? 1 : 0); });
    ticker($('[data-ticker="t1"]'), L.t1); ticker($('[data-ticker="t2"]'), L.t2);
    faq(L);
    bubbleI = 0; setBubble();
    var msg = $('#su-msg'); if (msg) { msg.textContent = ''; msg.className = 'msg'; }
  }
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { var l = b.getAttribute('data-lang'); store.set('vk-lang', l); applyLang(l); }); });

  /* ---------- header + menu ---------- */
  var hdr = $('#hdr'), burger = $('#burger'), menu = $('#menu');
  function onScrollHdr() { hdr.classList.toggle('solid', window.scrollY > 8 || document.body.classList.contains('menu-open')); }
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
    onScrollHdr();
  }
  burger.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- reveal on scroll ---------- */
  if ('IntersectionObserver' in window && !reduce) {
    // Clipped headings report no intersection, so they are revealed through their parent.
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { (e.target.__rv || [e.target]).forEach(function (el) { el.classList.add('in'); }); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    $$('.rv, .rv-pop').forEach(function (el) { var t = el.classList.contains('h2') ? el.parentElement : el; if (t !== el) { t.__rv = t.__rv || [t.classList.contains('rv') ? t : null].filter(Boolean); t.__rv.push(el); } io.observe(t); });
  } else $$('.rv, .rv-pop').forEach(function (el) { el.classList.add('in'); });

  /* ---------- app showcase: the phone follows the scroll ---------- */
  var track = $('#track'), phone = $('#phone'), shots = $$('[data-shot]'), steps = $$('#steps .step'), bars = $$('#bars i'), cur = -1;
  function setStep(i) {
    if (i === cur) return; cur = i;
    shots.forEach(function (s, k) { s.classList.toggle('on', k === i); if (Math.abs(k - i) <= 1) s.loading = 'eager'; });
    steps.forEach(function (s, k) { s.classList.toggle('on', k === i); });
    bars.forEach(function (b, k) { b.classList.toggle('on', k <= i); });
    phone.classList.toggle('scanning', i === 1);
    phone.classList.toggle('stamped', i === 2);
  }
  function onScrollShow() {
    if (!track) return;
    var r = track.getBoundingClientRect(), vh = window.innerHeight, span = r.height - vh;
    var p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
    setStep(Math.min(steps.length - 1, Math.floor(p * steps.length * 0.999)));
  }
  steps.forEach(function (s, k) { s.addEventListener('click', function () { if (!track) return; var r = track.getBoundingClientRect(), span = r.height - window.innerHeight; window.scrollTo({ top: window.scrollY + r.top + span * (k + .5) / steps.length, behavior: reduce ? 'auto' : 'smooth' }); }); });

  var ticking = false;
  window.addEventListener('scroll', function () { if (ticking) return; ticking = true; requestAnimationFrame(function () { ticking = false; onScrollHdr(); onScrollShow(); }); }, { passive: true });
  window.addEventListener('resize', onScrollShow);

  /* ---------- Verdi, the mascot ---------- */
  var bubble = $('#bubble'), bubbleI = 0, box = $('#verdi'), svg = null;
  function setBubble() {
    if (!bubble) return; var list = T[lang].bubbles;
    bubble.classList.add('swap');
    setTimeout(function () { bubble.textContent = list[bubbleI % list.length]; bubble.classList.remove('swap'); }, reduce ? 0 : 220);
  }
  if (box && typeof VERDI_SVG === 'string' && typeof verdiPose === 'function') {
    box.innerHTML = VERDI_SVG; svg = box.firstElementChild;
    svg.removeAttribute('width'); svg.removeAttribute('height');
    var st = { x: 380, y: 548, s: 1, look: [0, 0], blink: 0, wink: 0, mouth: 'smile', brow: 'up', arm: -20, arm2: 20, talk: 0 };
    verdiPose(svg, st);
    var t0 = performance.now(), target = [0.6, -0.2], look = [0, 0], nextLook = 0, nextBlink = 1500, blinkT = -1, wink = 0, visible = true;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(box);
    var mouse = null;
    window.addEventListener('pointermove', function (e) { var r = box.getBoundingClientRect(); mouse = [Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width * .6)) / (window.innerWidth * .4))), Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height * .45)) / (window.innerHeight * .4)))]; }, { passive: true });
    box.parentNode.addEventListener('click', function () { wink = 1; bubbleI++; setBubble(); });
    var loop = function (now) {
      requestAnimationFrame(loop);
      if (!visible || reduce) return;
      var t = now - t0;
      if (t > nextLook) { target = mouse || [Math.random() * 1.6 - .6, Math.random() * .9 - .5]; nextLook = t + 1800 + Math.random() * 2200; }
      look[0] += (target[0] - look[0]) * .08; look[1] += (target[1] - look[1]) * .08;
      if (t > nextBlink) { blinkT = t; nextBlink = t + 2600 + Math.random() * 2600; }
      var b = blinkT >= 0 ? Math.max(0, 1 - Math.abs((t - blinkT) - 90) / 90) : 0;
      wink = Math.max(0, wink - .012);
      st.look = look; st.blink = b; st.wink = wink > .2 ? 1 : 0;
      st.mouth = wink > .2 ? 'smirk' : 'smile';
      st.arm = -20 + Math.sin(t / 900) * 16; st.arm2 = 20 + Math.sin(t / 1300 + 1) * 8;
      verdiPose(svg, st);
    };
    requestAnimationFrame(loop);
    if (!reduce) setInterval(function () { bubbleI++; setBubble(); }, 4200);
  }

  /* ---------- live numbers (only shown once there are enough checks) ---------- */
  var S = window.SITE || {};
  var api = ((S.supabaseUrl && !/IDE_IRD/.test(S.supabaseUrl)) ? S.supabaseUrl : 'https://vtiuuginymzhxndrmjxs.supabase.co').replace(/\/+$/, '') + '/functions/v1/api';
  function post(body) { return fetch(api, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, body: j }; }); }); }
  var fmt = function (n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'hu' ? ' ' : ','); };
  if (/^https?:/.test(location.protocol)) post({ action: 'stats' }).then(function (r) {
    var s = r.body || {}; if (r.status !== 200 || !s.show) return;
    var box = $('#stats'); box.hidden = false;
    ['checks', 'replicas', 'authentic'].forEach(function (k) { var el = $('[data-stat="' + k + '"]', box); if (el) el.textContent = fmt(s[k] || 0); });
  }).catch(function () {});

  /* ---------- sign-up forms (box at the bottom, and the highlighted one in the hero) ---------- */
  function signup(form, ids, done) {
    if (!form || CLOSED) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var L = T[lang], msg = $(ids.msg), btn = $(ids.btn), input = $(ids.email), email = input.value.trim(), ok = $(ids.ok).checked;
      var err = function (k) { msg.textContent = L[k]; msg.className = 'msg err'; };
      if (!/^[^\s@]{1,64}@[^\s@]+\.[a-z]{2,24}$/i.test(email) || email.length > 254) { err('e_email'); input.focus(); return; }
      if (!ok) { err('e_ok'); return; }
      btn.disabled = true; msg.className = 'msg'; msg.textContent = L.sending;
      post({ action: 'tester_signup', email: email, consent: true, lang: lang, hp: form.company.value, test: !!ids.tester })
        .then(function (r) {
          btn.disabled = false;
          if (r.status === 200 && r.body && r.body.ok) { msg.textContent = ''; done(); return; }
          var c = r.body && r.body.error && r.body.error.code;
          err(c === 'bad_email' ? 'e_email' : c === 'consent' ? 'e_ok' : c === 'rate_limited' ? 'e_rate' : 'e_net');
        })
        .catch(function () { btn.disabled = false; err('e_net'); });
    });
  }
  // The box at the bottom is a tester sign-up; the highlighted form in the hero (notify mode) is "tell me when it's out".
  if (!TCLOSED) signup($('#su'), { msg: '#su-msg', btn: '#su-btn', email: '#su-email', ok: '#su-ok', tester: true }, function () { $('#betabox').classList.add('sent'); });
  if (NOTIFY && TCLOSED) signup($('#bsu'), { msg: '#bsu-msg', btn: '#bsu-btn', email: '#bsu-email', ok: '#bsu-ok', tester: false }, function () { $('#bsu').classList.add('sent'); $('#bsu-done').hidden = false; });
  if (NOTIFY) signup($('#hsu'), { msg: '#hsu-msg', btn: '#hsu-btn', email: '#hsu-email', ok: '#hsu-ok', tester: false }, function () { $('#hsu').classList.add('sent'); $('#hsu-done').hidden = false; });

  /* ---------- counters ---------- */
  function fmtCount(el, k) {
    var v = Number(el.getAttribute('data-count')) * k, f = el.getAttribute('data-fmt');
    if (f === 'dec1') return v.toFixed(1).replace('.', lang === 'hu' ? ',' : '.');
    var n = String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'hu' ? ' ' : ',');
    return f === 'money' ? (lang === 'hu' ? n + ' Ft' : 'HUF ' + n) : n;
  }
  function runCount(el) {
    if (el.__done) return; el.__done = true;
    if (reduce) { el.textContent = fmtCount(el, 1); return; }
    var t0 = performance.now(), d = 1600;
    (function f(now) { var k = Math.min(1, (now - t0) / d); el.textContent = fmtCount(el, 1 - Math.pow(1 - k, 3)); if (k < 1) requestAnimationFrame(f); })(t0);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { setTimeout(function () { runCount(e.target); }, 350); cio.unobserve(e.target); } }); }, { threshold: .4 });
    $$('[data-count]').forEach(function (el) { cio.observe(el); });
  } else $$('[data-count]').forEach(runCount);

  /* ---------- parallax: floating cards and the big background words ---------- */
  var floats = $$('[data-speed]'), words = $$('.bgword');
  function parallax() {
    if (reduce) return; var vh = window.innerHeight;
    floats.forEach(function (el) { var r = el.parentNode.getBoundingClientRect(); if (r.bottom < -200 || r.top > vh + 200) return; var c = r.top + r.height / 2 - vh / 2; el.style.setProperty('--py', (c * Number(el.getAttribute('data-speed'))).toFixed(1) + 'px'); });
    words.forEach(function (el) { var r = el.parentNode.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; var k = (r.top + r.height / 2 - vh / 2) / vh; el.style.setProperty('--bx', (k * Number(el.getAttribute('data-bx') || .2) * 100).toFixed(2) + 'vw'); });
  }
  window.addEventListener('scroll', function () { requestAnimationFrame(parallax); }, { passive: true });

  /* ---------- PRO card follows the pointer ---------- */
  var card = $('#procard');
  if (card && !reduce && window.matchMedia('(hover:hover)').matches) {
    card.parentNode.addEventListener('pointermove', function (e) { var r = card.getBoundingClientRect(); var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; card.style.setProperty('--ty', (x * 22).toFixed(1) + 'deg'); card.style.setProperty('--tx', (-y * 16).toFixed(1) + 'deg'); });
    card.parentNode.addEventListener('pointerleave', function () { card.style.removeProperty('--ty'); card.style.removeProperty('--tx'); });
  }

  /* ---------- misc ---------- */
  var y = $('#year'); if (y) y.textContent = String(Math.max(2026, new Date().getFullYear()));
  var mail = $('[data-mail]'); if (mail && S.email) { mail.href = 'mailto:' + S.email; $('span', mail).textContent = S.email; }

  applyLang(lang);
  onScrollHdr(); onScrollShow(); setStep(0); parallax();
})();
