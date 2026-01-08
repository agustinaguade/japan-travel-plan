// src/data/fighters.js

export const BASE_FIGHTERS = [
    {
      id: 'unknown',
      nameLocked: 'Unknown',
      nameUnlocked: 'Dieguin El Malin',
      lockedImg: '/images/fighters/unknown_character.jpg',
      unlockedImg: '/images/fighters/unknown_unlocked.jpg',
      tag: 'Carry',
      descUnlocked: '説明はありません',
      locked: true,
    },
    {
      id: 'cara-do-sapo',
      name: 'Cara Do Sapo',
      img: '/images/fighters/cara_do_sapo_pic.jpg',
      tag: 'Support',
      desc: '説明なし',
    },
    {
      id: 'carla',
      name: 'Carla',
      img: '/images/fighters/carla_pic.jpg',
      tag: 'Support',
      desc: '説明がありません',
    },
    {
      id: 'theo',
      name: 'Theo',
      img: '/images/fighters/theo_pic.jpg',
      tag: 'Offlane',
      desc: '説明は未記載です',
    },
    {
      id: 'shulius',
      name: 'Shulius',
      img: '/images/fighters/shulius_pic.jpg',
      tag: 'Support',
      desc: '説明はまだありません',
    },
    {
      id: 'masa-de-grasa',
      name: 'Masa De Grasa',
      img: '/images/fighters/masa_de_grasa.jpg',
      tag: 'Tank',
      desc: '説明未設定',
    },
  ];
  
  export const PAYWALL_COPY = {
    title: '🔒 Paid Content',
    cancelCta: 'I pay nothing',
  };
  
  // ✅ confirm 1–3 use CONTAIN so you see the full portrait (no crop).
  // ✅ confirm 4 stays COVER (you said it's great).
  export const PAYWALL_FLOW = [
    {
      kind: 'plain',
      title: 'Paid content.',
      body:
        'To use this character you must pay $1,800 USD or the equivalent of a round-trip ticket to Japan.',
      cta: 'Pay now',
    },
  
    {
      kind: 'image',
      title: 'Are you sure?',
      body: 'Think carefully. This is a serious commitment.',
      img: '/images/paywall/confirm-1.jpg',
      cta: 'Yes, continue',
      fit: 'contain', // ✅ SHOW FULL PHOTO
    },
    {
      kind: 'image',
      title: 'REALLY sure?',
      body: "We’re watching. Don’t try to trick us.",
      img: '/images/paywall/confirm-2.jpg',
      cta: 'I am sure',
      fit: 'contain', // ✅ SHOW FULL PHOTO
    },
    {
      kind: 'image',
      title: 'Last warning.',
      body: 'If you click again, the transaction will happen. No jokes.',
      img: '/images/paywall/confirm-3.jpg',
      cta: 'Do it',
      fit: 'contain', // ✅ SHOW FULL PHOTO
    },
  
    {
      kind: 'image',
      title: 'Final confirmation.',
      body: 'This is your last chance to back out.',
      img: '/images/paywall/confirm-4.jpg',
      cta: 'Confirm transaction',
      // cover by default
    },
  ];
  
  export const SUCCESS_SCREEN = {
    title: 'Transaction completed.',
    body: 'Nos vimo en Tokyo',
    img: '/images/paywall/success.jpg',
    ok: 'OK',
    // cover by default (great)
  };
  