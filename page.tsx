type Photo = {
  src: string;
  alt: string;
  caption: string;
};

type EventItem = {
  time: string;
  title: string;
  note?: string;
  mapUrl?: string;
  photo?: Photo;
  photos?: Photo[];
};

type DayPlan = {
  heading: string;
  subheading: string;
  events: EventItem[];
};

const days: DayPlan[] = [
  {
    heading: "11/7（土） 本庄 → 高崎 → 南魚沼",
    subheading: "工程表の下に写真を差し込み",
    events: [
      {
        time: "10:30頃",
        title: "家族は本庄駅へ",
        note: "四季島を狙って待機。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AC%E5%BA%84%E9%A7%85",
      },
      {
        time: "10:45前後",
        title: "🚆 四季島ウォッチング",
        note: "通過時刻は目安なので前後する可能性あり。",
        photo: {
          src: "/images/shikishima.png",
          alt: "四季島ウォッチングのイメージ",
          caption: "四季島見学の写真",
        },
      },
      {
        time: "12:15",
        title: "キルトラビットへお迎え",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%AD%E3%83%AB%E3%83%88%E3%83%A9%E3%83%93%E3%83%83%E3%83%88%20%E6%9C%AC%E5%BA%84",
      },
      { time: "12:30", title: "本庄を出発 → 高崎GLOWへ" },
      {
        time: "13:30頃",
        title: "GLOW到着・手続き",
        note: "HAPPY1 Turboへ荷物を積み替え。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%94%E3%83%B3%E3%82%B0%E3%82%AB%E3%83%BC%E3%83%AC%E3%83%B3%E3%82%BF%E3%83%AB%E8%B2%A9%E5%A3%B2%20GLOW%20%E9%AB%98%E5%B4%8E",
        photo: {
          src: "/images/happy1-turbo.jpeg",
          alt: "HAPPY1 Turboでの旅イメージ",
          caption: "JP STAR公式「HAPPY1 Turbo」",
        },
      },
      {
        time: "〜15:00",
        title: "🚐 車両説明・使い方チェック",
        note: "ベッド展開、FFヒーター、電源、給排水、バンクベッド確認。",
      },
      { time: "15:00", title: "レンタル開始・南魚沼へ出発" },
      {
        time: "16:30〜17:00",
        title: "RVパーク チェックイン",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=RV%E3%83%91%E3%83%BC%E3%82%AF%20NC21%2B%E3%83%94%E3%83%BC%E3%82%AD%E3%83%A3%E3%83%B3%20%E5%8D%97%E9%AD%9A%E6%B2%BC",
      },
      {
        time: "17:00頃",
        title: "🍶 金沢屋酒店で地酒を調達",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%B2%A2%E5%B1%8B%E9%85%92%E5%BA%97%20%E5%8D%97%E9%AD%9A%E6%B2%BC",
      },
      {
        time: "17:30頃",
        title: "🥢 田畑屋でへぎそば夕食",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A1%A9%E6%B2%A2%E3%81%9D%E3%81%B0%E5%87%A6%20%E7%94%B0%E7%95%91%E5%B1%8B",
        photo: {
          src: "/images/tabataya.jpg",
          alt: "へぎそばと夕食のイメージ",
          caption: "塩沢そば処 田畑屋・店舗外観",
        },
      },
      {
        time: "18:40頃",
        title: "♨️ 金城の里で温泉",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E5%9F%8E%E3%81%AE%E9%87%8C%20%E5%8D%97%E9%AD%9A%E6%B2%BC",
      },
      {
        time: "19:45頃〜",
        title: "🍶 RVパークで地酒飲み比べ",
        note: "車を完全に停めてから。子どもはキャンピングカータイム。",
      },
    ],
  },
  {
    heading: "11/8（日） 清津峡 → 塩沢 → 高崎返却",
    subheading: "写真も工程の中に配置",
    events: [
      { time: "6:30", title: "起床・朝食・片付け" },
      { time: "7:30", title: "RVパーク出発" },
      {
        time: "8:00〜8:10",
        title: "清津峡 到着",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B8%85%E6%B4%A5%E5%B3%A1%E6%B8%93%E8%B0%B7%E3%83%88%E3%83%B3%E3%83%8D%E3%83%AB",
      },
      {
        time: "8:30",
        title: "🪞 清津峡トンネル入坑",
        note: "水鏡まで歩いて、写真＆散策。",
        photo: {
          src: "/images/kiyotsukyo.png",
          alt: "清津峡のイメージ",
          caption: "清津峡の写真",
        },
      },
      { time: "9:25〜9:35", title: "清津峡 出発" },
      {
        time: "10:10頃",
        title: "塩沢到着・織の戸へ",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A1%A9%E6%B2%A2%E3%81%AE%E7%B9%94%E7%89%A9%E3%81%A8%E4%BD%93%E9%A8%93%20%E7%B9%94%E3%81%AE%E6%88%B8",
      },
      {
        time: "10:30〜11:15",
        title: "🧵 子ども2人：5cm機織り体験",
        note: "家族4人で最後まで見届ける。",
        photo: {
          src: "/images/orino-to.png",
          alt: "機織り体験のイメージ",
          caption: "織の戸の体験イメージ",
        },
      },
      { time: "11:15", title: "ここから二手に分かれる！" },
      {
        time: "11:25〜12:05頃",
        title: "👘 母：ちどりや",
        note: "塩沢織や着物をゆっくり見る時間。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A1%A9%E6%B2%A2%E3%81%8D%E3%82%82%E3%81%AE%20%E3%81%A1%E3%81%A9%E3%82%8A%E3%82%84%20%E5%A1%A9%E6%B2%A2%E6%9C%AC%E5%BA%97",
        photo: {
          src: "/images/chidoriya.png",
          alt: "ちどりやのイメージ",
          caption: "ちどりやの写真",
        },
      },
      {
        time: "11:25〜11:55頃",
        title: "🍙 母以外：おにぎり調達",
        note: "うおぬま倉友農園おにぎり屋へ。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%81%86%E3%81%8A%E3%81%AC%E3%81%BE%E5%80%89%E5%8F%8B%E8%BE%B2%E5%9C%92%20%E3%81%8A%E3%81%AB%E3%81%8E%E3%82%8A%E5%B1%8B",
        photos: [
          {
            src: "/images/onigiri-shop.jpeg",
            alt: "うおぬま倉友農園 おにぎり屋の店舗外観",
            caption: "うおぬま倉友農園 おにぎり屋・店舗外観（公式サイト）",
          },
          {
            src: "/images/onigiri.jpeg",
            alt: "うおぬま倉友農園のおにぎり",
            caption: "塩沢産コシヒカリのおにぎり（公式サイト）",
          },
        ],
      },
      { time: "12:05〜12:15", title: "ちどりや付近で合流" },
      {
        time: "12:15頃",
        title: "塩沢出発 → 高崎へ",
        note: "おにぎりを持って帰路へ。",
      },
      { time: "13:30〜14:00", title: "高崎方面到着・給油" },
      { time: "14:20〜14:30", title: "GLOW到着目標" },
      { time: "15:00", title: "🚐 HAPPY1 Turbo返却" },
    ],
  },
];

const packingItems = [
  "免許証・ETCカード",
  "シーツ",
  "子ども用寝袋1つ",
  "薄手の羽毛布団",
  "フリース毛布",
  "お風呂セット・タオル",
  "保冷バッグ・保冷剤",
  "地酒用の小さなカップ",
  "充電ケーブル・モバイルバッテリー",
  "防寒着・手袋",
];

function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <figure className="inlinephoto">
      <img src={photo.src} alt={photo.alt} />
      <figcaption className="caption">{photo.caption}</figcaption>
    </figure>
  );
}

function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="inlinephotogrid">
      {photos.map((photo) => (
        <figure className="pic" key={photo.src}>
          <img src={photo.src} alt={photo.alt} />
          <figcaption className="caption">{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function TimelineSection({ day }: { day: DayPlan }) {
  return (
    <section className="section">
      <div className="titlebar">
        <h2>{day.heading}</h2>
        <div className="sub">{day.subheading}</div>
      </div>
      <div className="card">
        <div className="timeline">
          {day.events.map((event) => (
            <div className="row" key={`${event.time}-${event.title}`}>
              <div className="time">{event.time}</div>
              <div className="event">
                <b>{event.title}</b>
                {event.note ? <div className="note">{event.note}</div> : null}
                {event.mapUrl ? (
                  <a className="maplink" href={event.mapUrl} target="_blank" rel="noreferrer">
                    地図を開く
                  </a>
                ) : null}
                {event.photo ? <PhotoCard photo={event.photo} /> : null}
                {event.photos ? <PhotoGrid photos={event.photos} /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="wrap">
      <section className="hero">
        <div className="heroimg">
          <img
            src="/images/happy1-turbo.jpeg"
            alt="南魚沼キャンピングカー旅イメージ"
          />
        </div>
        <div className="herotext">
          <div className="kicker">FAMILY CAMPING-CAR TRIP</div>
          <h1>南魚沼 1泊2日キャンピングカー旅</h1>
          <p className="subtitle">2026年11月7日（土）〜8日（日）｜HAPPY1 Turbo｜家族4人</p>
          <div className="pills">
            <span className="pill">🚆 四季島</span>
            <span className="pill">🚐 HAPPY1 Turbo</span>
            <span className="pill">🥢 へぎそば</span>
            <span className="pill">♨️ 温泉</span>
            <span className="pill">🍶 地酒</span>
            <span className="pill">🪞 清津峡</span>
            <span className="pill">🧵 機織り体験</span>
            <span className="pill">👘 ちどりや</span>
          </div>
        </div>
      </section>

      {days.map((day) => (
        <TimelineSection day={day} key={day.heading} />
      ))}

      <section className="section">
        <div className="box must">
          <h3>✅ 今回の固定ポイント</h3>
          <p>・11/7 12:30 キルトラビット出発</p>
          <p>・HAPPY1 Turboは 11/7 15:00〜11/8 15:00 の想定</p>
          <p>・11/8 10:30 織の戸「5cm機織り」×子ども2人</p>
          <p>・11/8 15:00 GLOW返却</p>
        </div>

        <div className="box caution">
          <h3>⏰ 調整ポイント</h3>
          <p>
            ・11/8は <b>清津峡 → 機織り体験 → 返却</b> を最優先。
          </p>
          <p>・朝が押したら、ちどりや滞在時間で調整。</p>
          <p>
            ・塩沢は <b>12:20頃までに出発</b> できると安心。
          </p>
        </div>

        <div className="box must">
          <h3>🎒 持ち物メモ</h3>
          <div className="checks">
            {packingItems.map((item) => (
              <div className="check" key={item}>
                □ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        今回は「工程表の該当箇所のすぐ下」に写真を入れる形に修正しました。
      </footer>
    </main>
  );
}
