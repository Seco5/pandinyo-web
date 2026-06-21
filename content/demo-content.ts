// Pandinyo deneme içeriği — mobil projedeki gerçek kelime/diyalog verisinden derlenmiştir
// (src/data/sector-vocab.json, content.ts). Tamamı statik, login/backend yok.

export type Sector = {
  id: string;
  emoji: string;
  name: string;
  sub: string;
  tint: string; // kart arka plan tonu
  iconColor: string;
};

export type VocabCard = {
  english: string;
  turkish: string;
  example: string;
};

export type DialogueTurn = {
  speaker: "other" | "user";
  text: string;
  tr: string;
};

export type Dialogue = {
  title: string;
  turns: DialogueTurn[];
};

// Mobil src/data/sectors.ts ile aynı kimlik
export const sectors: Sector[] = [
  { id: "tech", emoji: "💻", name: "Teknoloji / Yazılım", sub: "Sprint, backlog, deployment", tint: "#EFF6FF", iconColor: "#1D4ED8" },
  { id: "finance", emoji: "🏦", name: "Finans / Bankacılık", sub: "Revenue, audit, portfolio", tint: "#F0FDF4", iconColor: "#15803D" },
  { id: "health", emoji: "🏥", name: "Sağlık", sub: "Diagnosis, protocol, referral", tint: "#FEF2F2", iconColor: "#DC2626" },
  { id: "marketing", emoji: "📢", name: "Pazarlama / Reklam", sub: "ROI, KPI, engagement", tint: "#FAF5FF", iconColor: "#7C3AED" },
  { id: "aviation", emoji: "✈️", name: "Havayolu / Havacılık", sub: "Boarding, crew, clearance", tint: "#F0F9FF", iconColor: "#0369A1" },
  { id: "culinary", emoji: "👨‍🍳", name: "Aşçılık / Gastronomi", sub: "Mise en place, plating, yield", tint: "#ECFDF5", iconColor: "#059669" },
];

export const vocabBySector: Record<string, VocabCard[]> = {
  tech: [
    { english: "deployment", turkish: "yayına alma / dağıtım", example: "The deployment is scheduled for Friday night." },
    { english: "backlog", turkish: "iş listesi / birikmiş işler", example: "Let's groom the backlog before the next sprint." },
    { english: "sprint", turkish: "kısa geliştirme döngüsü", example: "We committed to five tasks for this sprint." },
    { english: "rollback", turkish: "geri alma", example: "We had to rollback the release after the bug." },
    { english: "stakeholder", turkish: "paydaş", example: "We need approval from every stakeholder." },
    { english: "scope creep", turkish: "kapsam kayması", example: "Extra requests caused serious scope creep." },
  ],
  finance: [
    { english: "revenue", turkish: "gelir / ciro", example: "Quarterly revenue grew by twelve percent." },
    { english: "audit", turkish: "denetim", example: "The external audit starts next Monday." },
    { english: "portfolio", turkish: "portföy", example: "We rebalanced the portfolio this quarter." },
    { english: "liquidity", turkish: "likidite / nakit gücü", example: "The company maintains strong liquidity." },
    { english: "forecast", turkish: "tahmin / öngörü", example: "Our revenue forecast looks optimistic." },
    { english: "compliance", turkish: "mevzuata uygunluk", example: "All transactions must meet compliance rules." },
  ],
  health: [
    { english: "diagnosis", turkish: "tanı / teşhis", example: "The diagnosis was confirmed after the test results." },
    { english: "referral", turkish: "sevk / yönlendirme", example: "I need a referral to see a specialist." },
    { english: "prescription", turkish: "reçete", example: "The doctor wrote a prescription for antibiotics." },
    { english: "symptoms", turkish: "belirtiler / semptomlar", example: "What symptoms is the patient experiencing?" },
    { english: "discharge", turkish: "taburculuk", example: "The patient is ready for discharge tomorrow." },
    { english: "follow-up", turkish: "takip randevusu", example: "Schedule a follow-up appointment in two weeks." },
  ],
  marketing: [
    { english: "engagement", turkish: "etkileşim", example: "This campaign doubled our engagement rate." },
    { english: "conversion", turkish: "dönüşüm", example: "The new landing page improved conversion." },
    { english: "reach", turkish: "erişim", example: "Our reach grew after the influencer post." },
    { english: "funnel", turkish: "satış hunisi", example: "Let's optimize the top of the funnel." },
    { english: "brand awareness", turkish: "marka bilinirliği", example: "The ad boosted brand awareness nationwide." },
    { english: "call to action", turkish: "harekete geçirici mesaj", example: "Every email needs a clear call to action." },
  ],
  aviation: [
    { english: "boarding", turkish: "uçağa biniş", example: "Boarding will begin in twenty minutes." },
    { english: "clearance", turkish: "izin / kalkış onayı", example: "We are waiting for takeoff clearance." },
    { english: "crew", turkish: "ekip / mürettebat", example: "The cabin crew is preparing for departure." },
    { english: "turbulence", turkish: "türbülans", example: "Please remain seated during turbulence." },
    { english: "delay", turkish: "rötar / gecikme", example: "The flight has a short delay due to weather." },
    { english: "gate", turkish: "kapı / biniş kapısı", example: "The gate has changed to B12." },
  ],
  culinary: [
    { english: "mise en place", turkish: "ön hazırlık", example: "Good mise en place is the foundation of a smooth service." },
    { english: "plating", turkish: "tabak sunumu", example: "The plating on that dish is absolutely stunning." },
    { english: "garnish", turkish: "garnitür / süsleme", example: "Add a garnish of fresh herbs before serving." },
    { english: "sauté", turkish: "tavada hızlı pişirmek", example: "Sauté the onions until golden." },
    { english: "reduce", turkish: "sosun suyunu çektirmek", example: "Reduce the sauce by half over medium heat." },
    { english: "yield", turkish: "verim / çıkan miktar", example: "This recipe has a yield of twelve portions." },
  ],
};

export const dialogueBySector: Record<string, Dialogue> = {
  tech: {
    title: "Sprint planlama görüşmesi",
    turns: [
      { speaker: "other", text: "Can we still ship the feature this sprint?", tr: "Bu özelliği yine de bu sprintte çıkarabilir miyiz?" },
      { speaker: "user", text: "It's tight, but we can if we cut the scope a bit.", tr: "Sıkışık ama kapsamı biraz daraltırsak çıkarabiliriz." },
      { speaker: "other", text: "Okay, let's move the rest to the backlog.", tr: "Tamam, geri kalanı backlog'a taşıyalım." },
      { speaker: "user", text: "Sounds good. I'll update the board after standup.", tr: "Olur. Toplantıdan sonra panoyu güncellerim." },
    ],
  },
  finance: {
    title: "Çeyrek sonuçları görüşmesi",
    turns: [
      { speaker: "other", text: "How does revenue look this quarter?", tr: "Bu çeyrek gelir nasıl görünüyor?" },
      { speaker: "user", text: "It's up twelve percent compared to last quarter.", tr: "Geçen çeyreğe göre yüzde on iki artmış durumda." },
      { speaker: "other", text: "Great. Are we ready for the audit next week?", tr: "Harika. Gelecek haftaki denetime hazır mıyız?" },
      { speaker: "user", text: "Yes, all the reports are compliant and ready.", tr: "Evet, tüm raporlar mevzuata uygun ve hazır." },
    ],
  },
  health: {
    title: "Hasta devir teslimi",
    turns: [
      { speaker: "other", text: "What's the status of the patient in room 204?", tr: "204 numaralı odadaki hastanın durumu nedir?" },
      { speaker: "user", text: "Stable. The diagnosis was confirmed this morning.", tr: "Stabil. Tanı bu sabah doğrulandı." },
      { speaker: "other", text: "Do we need a referral to a specialist?", tr: "Bir uzmana sevk gerekiyor mu?" },
      { speaker: "user", text: "Yes, and a follow-up is scheduled in two weeks.", tr: "Evet, iki hafta sonrasına bir takip randevusu ayarlandı." },
    ],
  },
  marketing: {
    title: "Kampanya değerlendirmesi",
    turns: [
      { speaker: "other", text: "How did the new campaign perform?", tr: "Yeni kampanya nasıl performans gösterdi?" },
      { speaker: "user", text: "Engagement doubled and conversion is up as well.", tr: "Etkileşim ikiye katlandı ve dönüşüm de arttı." },
      { speaker: "other", text: "Nice. Should we increase the budget for reach?", tr: "Güzel. Erişim için bütçeyi artıralım mı?" },
      { speaker: "user", text: "Yes, let's scale it with a stronger call to action.", tr: "Evet, daha güçlü bir harekete geçirici mesajla büyütelim." },
    ],
  },
  aviation: {
    title: "Kalkış öncesi koordinasyon",
    turns: [
      { speaker: "other", text: "Are we cleared for boarding yet?", tr: "Binişe izin aldık mı?" },
      { speaker: "user", text: "Almost. We're waiting for the final clearance.", tr: "Neredeyse. Son izni bekliyoruz." },
      { speaker: "other", text: "Is the crew ready at the gate?", tr: "Ekip kapıda hazır mı?" },
      { speaker: "user", text: "Yes, the crew is in position. Slight delay for weather.", tr: "Evet, ekip yerinde. Hava nedeniyle ufak bir rötar var." },
    ],
  },
  culinary: {
    title: "Servis öncesi mutfak brifingi",
    turns: [
      { speaker: "other", text: "Is your mise en place ready for service?", tr: "Ön hazırlığın servise hazır mı?" },
      { speaker: "user", text: "Yes, everything is prepped and in place.", tr: "Evet, her şey hazır ve yerli yerinde." },
      { speaker: "other", text: "Good. Let's reduce that sauce a bit more.", tr: "Güzel. Şu sosu biraz daha çektirelim." },
      { speaker: "user", text: "On it. I'll finish the plating right after.", tr: "Hemen yapıyorum. Hemen ardından tabak sunumunu bitiririm." },
    ],
  },
};

// Ana sayfada gösterilen 8 modül (mobil src/data/modules.ts birebir)
export const modules = [
  { emoji: "📚", name: "Kelimeler", desc: "Kart çevirme + cümle içinde kullanım" },
  { emoji: "👋", name: "Kendini Tanıtma", desc: "Boşluk doldur + cümle sıralama" },
  { emoji: "📞", name: "Telefon Görüşmesi", desc: "Gerçek senaryolarla diyalog pratiği" },
  { emoji: "💼", name: "Mülakat", desc: "Soru-cevap + model cevap karşılaştırma" },
  { emoji: "💰", name: "Ücret Görüşmesi", desc: "Senaryo + strateji seçimi" },
  { emoji: "🗣️", name: "Toplantı Dili", desc: "İfade eşleştirme + diyalog" },
  { emoji: "📧", name: "E-posta Yazma", desc: "Yaz + profesyonel metinle karşılaştır" },
  { emoji: "📊", name: "Sunum Yapma", desc: "İfade sıralama + sunum akışı" },
];

// Panda seri (streak) durumları — mobil src/panda.ts birebir
export const streakStages = [
  { day: 0, accessory: "💤", label: "Uyuyor", note: "Henüz başlamadın" },
  { day: 3, accessory: "🔥", label: "Ateşli", note: "Seri tutuşuyor" },
  { day: 7, accessory: "🕶️", label: "Güneşli", note: "Bir haftalık seri" },
  { day: 14, accessory: "💻", label: "Çalışkan", note: "İki hafta üst üste" },
  { day: 30, accessory: "🥇", label: "Şampiyon", note: "Bir aylık disiplin" },
  { day: 60, accessory: "🎓", label: "Mezun", note: "Artık bir profesyonelsin" },
];
