const questions = [

    // --- 基本的な意味と使い方 ---
    { q: "漢字の「越」の基本的な意味に含まれないものはどれ？", a: ["境目をこえる", "他よりすぐれる", "その場にとどまる", "時期が経過する"], c: 2 },
    { q: "卓越と優越について、間違っているものはどれ？", a: ["卓越は絶対的な突出", "優越は相対的な比較", "卓越は比較対象がなければならない", "優越は立場・地位・感情を表すときに使う"], c: 2 },

    // --- 漢字の成り立ちと語源 ---
    { q: "「越」という字を構成する左側の要素は何？", a: ["走（はしる）", "歩（あゆむ）", "足（あし）", "行（いく）"], c: 0 },
    { q: "「越」の右側にある戉は何の形をかたどったもの？", a: ["矛（ほこ）", "盾（たて）", "大きな斧（まさかり）", "弓（ゆみ）"], c: 2 },
    { q: "古代中国において戉は何の象徴とされていた？", a: ["豊作の祈り", "王権や軍事力", "商売繁盛", "学問の成就"], c: 1 },
    { q: "「越」の字の成り立ちにおいて、戉にはどのような役割がある？", a: ["境界線を引く", "障害を切り開き進む", "地面を耕す", "獲物を捕らえる"], c: 1 },

    // --- 画数および書き順 ---
    { q: "「越」の字の画数は全部で何画？", a: ["10画", "11画", "12画", "13画"], c: 2 },
    { q: "「越」の字の左側「そうにょう（走）」は何画？", a: ["5画", "6画", "7画", "8画"], c: 2 },
    { q: "「越」の字の右側「えつ（戉）」は何画？", a: ["3画", "4画", "5画", "6画"], c: 2 },
    { q: "「越」の字の右側はどれ？", a: ["戉", "戈", "戊", "戍"], c: 0 },

    // --- 中国・ベトナムにおける「越」 ---
    { q: "中国の春秋時代に存在し、勾践（こうせん）王が治めた国名は？", a: ["呉", "越", "楚", "秦"], c: 1 },
    { q: "中国の春秋時代に、勾践（こうせん）王が治めた越国は、現在のどこにあった？", a: ["浙江省", "江蘇省", "山東省", "河北省"], c: 0 },
    { q: "古代中国南部からベトナム北部に居住した諸民族の総称は？", a: ["南蛮", "百越", "東夷", "西戎"], c: 1 },
    { q: "古代中国南部からベトナム北部に居住した民族・百越（ひゃくえつ）の人々が特に長けていたものは？", a: ["陶芸と漆工", "稲作と航海術", "鉄器の製造", "文字の発明"], c: 1 },
    { q: "ベトナムの国名「越南（えつなん）」の「越」の由来は？", a: ["山を越える国", "百越の流れを汲む歴史", "越国が移転した地", "優れた南の国"], c: 1 },
    { q: "ベトナムの国名「越南」はいつ「ベトナム」に変わった？", a: ["変わっていない", "第一次大戦後", "第二次大戦後", "ベトナム戦争後"], c: 0 },

    // --- 日本における「越（こし）」 ---
    { q: "日本の北陸道一帯にあった越の国。誰が統治していた？", a: ["豪族", "国司", "地頭", "大名"], c: 0 },
    { q: "日本の北陸道一帯にあった越の国。別の表記は？", a: ["高志・古志", "越路・越地", "北越・南越", "遠志・近志"], c: 0 },
    { q: "日本の北陸道一帯にあった越の国。名前の由来として有力な説は？", a: ["越人が住んでいた", "都から見て山々を越えて行く遠い地", "優れた土地であった", "越後の国が中心だった"], c: 1 },
    { q: "越の国が越前・越中・越後に分割された主な理由は？", a: ["人口が増えすぎた", "国司が統治するには広すぎた", "天皇の直轄地にするため", "外敵の侵攻を防ぐため"], c: 1 },
    { q: "越の国が分割された際、現在の福井県北部・東部にあたるのは？", a: ["越前", "越中", "越後", "越南"], c: 0 },
    { q: "越の国が分割された際、現在の富山県にあたるのは？", a: ["越前", "越中", "越後", "越北"], c: 1 },
    { q: "越の国が分割された際、現在の新潟県（本州部分）にあたるのは？", a: ["越前", "越中", "越後", "越西"], c: 2 },
    { q: "越前を治めた大名として有名なのは誰？", a: ["浅井長政", "朝倉義景", "足利義昭", "武田元明"], c: 1 },
    { q: "越中を治めた大名として有名なのは誰？", a: ["六角義賢", "柴田勝家", "佐々成政", "大久保忠世"], c: 2 },
    { q: "越後を治めた大名として有名なのは上杉謙信。その上杉謙信の終生のライバルといえば誰？", a: ["滝川一益", "丹羽長秀", "前田利家", "武田信玄"], c: 1 },

    // --- 言葉の持つニュアンスと印象 ---
    { q: "「越権」や「越境」という言葉が与えるニュアンスとして、間違っているものは？", a: ["傲慢", "挑戦", "逸脱", "怠惰"], c: 3 },

    // --- 名字や人名における意味 ---
    { q: "「越」という名字の由来として多いものは？", a: ["職業由来", "地形由来（山や坂を越える場所）", "宗教由来", "外国由来"], c: 1 },
    { q: "「越」という名字は特にどの地方に多い？", a: ["東北・北海道", "北陸・長野・関東", "四国・九州", "中国・近畿"], c: 1 },

    // --- 「越」がつく日本の地名（市区町村名） ---
    { q: "「小江戸」として知られる埼玉県にある市は？", a: ["川越市", "南越谷市", "越正町", "新越谷市"], c: 0 },
    { q: "埼玉県川越市の名前の由来とされる川は？", a: ["多摩川", "荒川", "入間川", "利根川"], c: 2 },
    { q: "埼玉県にある難読地名「越生」の正しい読み方は？", a: ["こしお", "こしなま", "おごせ", "えつなま"], c: 2 },
    { q: "川越市、越谷市、越生町。埼玉はなぜ越がつく地名が多い？", a: ["越の国の住民が多く移住したから", "越を名乗る住民が多いから", "越後守受領者が多いから", "交通の要衝で山河を越えていくから"], c: 3 },

    // --- 「越」がつく日本の地名（地域・町名） ---
    { q: "新潟県長岡市にある、北陸道の路を象徴する旧町名は？", a: ["越路", "越前", "越中", "越後"], c: 0 },
    { q: "「上越・中越・下越」の区分は何に基づいている？", a: ["標高の高さ", "緯度の高低", "都（京都）からの距離", "面積の広さ"], c: 2 },
    { q: "「鳥越」という地名に込められることが多い意味は？", a: ["鳥を飼う場所", "鳥が越えていくほど険しい場所", "鳥が飛んでこない場所", "鳥の形をした山"], c: 1 },

    // --- 「越」がつく日本の地名（鉄道駅・路線名） ---
    { q: "出羽（山形・秋田）と越後を結ぶ路線の名前は？", a: ["信越本線", "羽越本線", "北陸本線", "上越線"], c: 1 },
    { q: "信越本線が結んでいる地域の組み合わせは？", a: ["信濃（長野）と越前", "信濃（長野）と越後", "信濃（長野）と越中", "伊勢（三重）と越後"], c: 1 },
    { q: "川端康成の小説『雪国』の舞台として知られる駅は？", a: ["越後湯沢駅", "長岡駅", "新潟駅", "越中島駅"], c: 0 },

    // --- 「越」がつく日本の地名（難読地名・珍しい地名） ---
    { q: "愛媛県八幡浜市にある難読地名「神越」の読み方は？", a: ["かみこし", "しんえつ", "みのこし", "じんごし"], c: 2 },
    { q: "福島県石川町の難読地名「越代」の読み方は？", a: ["えつだい", "こしだい", "おちだい", "えっしろ"], c: 1 },
    { q: "岩手県田野畑村の三陸海岸にある「島越」の読み方は？", a: ["とうえつ", "しまこえ", "しまこし", "とうごし"], c: 2 },

    // --- 難読字 ---
    { q: "日本の雅楽の代表的な曲名「越天楽」の読み方は？", a: ["えつてんらく", "えてんらく", "こしてんらく", "おちてんらく"], c: 1 },
    { q: "「あやまち、過失」を意味し、「落ち度」の語源とされる言葉は？", a: ["越度（おちど）", "越務（おちむ）", "越楽（おらく）", "越制（えせい）"], c: 0 },
    { q: "役人が通常の順序を飛び越えて昇進することを指す言葉は？", a: ["越位（えつい）", "越階（おっかい）", "越順（えじゅん）", "越昇（えっしょう）"], c: 1 },
    { q: "正規の手続きを無視して最高権力者に訴え出る行為を指す言葉は？", a: ["越直（えじつ）", "上越（じょうえ）", "越訴（おっそ）", "出越（しゅつえ）"], c: 2 },
    { q: "お寺を支える信者を指し、「檀家」の語源となった言葉は？", a: ["檀越（だんおち・だんおつ）", "檀越（だんえつ）", "檀越（だんこし）", "檀越（だんごえ）"], c: 0 },
    { q: "6月末に行われる罪や穢れを祓う神事の名前は？", a: ["夏越（なごし）の祓", "越年（えつねん）の祓", "越境（えっきょう）の祓", "越階（おっかい）の祓"], c: 0 },

    // --- 時代劇における「越後屋」 ---
    { q: "時代劇の悪徳商人「越後屋」の実在モデルの出身地は？", a: ["越後（新潟）", "伊勢（三重）", "近江（滋賀）", "江戸（東京）"], c: 1 },
    { q: "三井家の屋号「越後屋」の由来となった、先祖が名乗っていた官職名は？", a: ["越後藩主", "越後守", "越後奉行", "越後代官"], c: 1 },
    { q: "実在の越後屋（三越のルーツ）が掲げた画期的な商法は？", a: ["富くじ商売", "現金掛け値なし", "置き薬", "産地直送"], c: 1 },
    { q: "時代劇で「越後屋」が悪役として定着した理由の一つとされる事件は？", a: ["三井事件", "三越事件", "越後事件", "昭和事件"], c: 1 },

    // --- 受領名としての越後守 ---
    { q: "紫式部の父で、実際に越後守として赴任した人物は？", a: ["藤原 為時", "藤原 道長", "藤原 定家", "藤原 頼通"], c: 0 },
    { q: "平安時代の武将・木曽義仲が、平家追討後に臨時に拝命した官職名は？", a: ["越前守", "越中守", "越後守", "越州守"], c: 2 },
    { q: "「越後の虎」と呼ばれ、正式に越後守を叙任された戦国大名は？", a: ["直江兼続", "上杉謙信", "最上義光", "河田長親"], c: 1 },
    { q: "三井家の「遠祖」で、越後守を自称していた武士は？", a: ["三井 高利", "三井 高安", "三井 高俊", "三井 高平"], c: 1 },
    { q: "三井家の「家祖（創業者）」で、江戸で越後屋を開業したのは？", a: ["三井 高利", "三井 高安", "三井 高俊", "三井 高平"], c: 0 },
    { q: "「越後騒動」で知られる越後高田藩主・松平光長は、徳川家康の何にあたる？", a: ["孫", "曾孫", "玄孫", "子"], c: 1 },
    { q: "律令制において、越後国が位置づけられていたランクは？", a: ["大国", "上国", "中国", "下国"], c: 1 },

    // --- 越がつく歴史上の有名人 ---
    { q: "三国志に登場する武将で、公孫瓚の弟の名前は？", a: ["公孫 越", "公孫 度", "公孫 恭", "公孫 淵"], c: 0 },
    { q: "中国明代の武将で、国防大臣級にまで昇進し文武両道で知られたのは？", a: ["王 越", "李 越", "張 越", "劉 越"], c: 0 }
];

const correctExpls = {
    "「あやまち、過失」を意味し、「落ち度」の語源とされる言葉は？": "越度が変化して現在の「落ち度」になったと言われています。",
    "古代中国において戉は何の象徴とされていた？": "斧が持つ霊的な力によって、困難や境界を突破していくという力強いニュアンスがその根源にあります。",
    "ベトナムの国名「越南」はいつ「ベトナム」に変わった？": "越南をベトナム語で書くとViệt Namであり、国名は越南で変わっていないのです。",
    "実在の越後屋（三越のルーツ）が掲げた画期的な商法は？": "現金掛け値なしは、定価販売・即時決済のことです。当時は後払いが主流でした。",
    "時代劇で「越後屋」が悪役として定着した理由の一つとされる事件は？": "三越事件は、1982年、当時の三越社長が愛人への利益供与、商品不正仕入れ、独裁的な経営のため、取締役会で社長を解任された事件です。",
    "「越後騒動」で知られる越後高田藩主・松平光長は、徳川家康の何にあたる？": "越後騒動：松平光長は徳川家康の曾孫にあたる名門でしたが、後継者問題をめぐって藩内が真っ二つに割れ、幕府が介入して事態を収拾しました。",
    "三国志に登場する武将で、公孫瓚の弟の名前は？": "公孫越の戦死が、袁紹戦争のきっかけになりました。"
};

let currentQuestions = [];
let currentIdx = 0;
let score = 0;
let audioCtx = null;

const app = document.getElementById('app');
const progressBar = document.getElementById('progress-bar');

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    }
}

function showTitle() {
    document.body.classList.remove('bg-2');
    progressBar.style.width = '0%';
    app.innerHTML = "<h1>越検定</h1><br><h3>あなたも検定に合格して'越'に入ろう</h3><br><button class='start-btn' onclick='startQuiz()'>START</button>";
}

function startQuiz() {
    initAudio();
    score = 0;
    currentIdx = 0;
    currentQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);
    showQuestion();
}

function showQuestion() {
    if (currentIdx === 5) {
        document.body.classList.add('bg-2');
    }
    
    const qData = currentQuestions[currentIdx];
    const progress = ((currentIdx + 1) / 10) * 100;
    progressBar.style.width = progress + "%";

    const options = qData.a.map((text, i) => ({ text, isCorrect: i === qData.c }));
    options.sort(() => 0.5 - Math.random());

    app.innerHTML = '<div class="question-text">' + qData.q + '</div>' +
        '<div id="feedback" class="message-text"></div>' +
        '<div class="btn-container">' +
            options.map(opt => '<button onclick="handleAnswer(' + opt.isCorrect + ', this)">' + opt.text + '</button>').join('') +
        '</div>';
}

function handleAnswer(isCorrect, btn) {
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.btn-container button');
    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        score++;
        playSound('correct');
        feedback.innerHTML = '<span class="correct">正解！</span>';
        const qData = currentQuestions[currentIdx];
        if (correctExpls[qData.q]) {
            feedback.innerHTML += '<br><small style="font-size:1.2rem;">' + correctExpls[qData.q] + '</small>';
        }
    } else {
        playSound('wrong');
        feedback.innerHTML = '<span class="wrong">間違い！</span>';
    }

    setTimeout(() => {
        currentIdx++;
        if (currentIdx < 10) {
            showQuestion();
        } else {
            showResult();
        }
    }, isCorrect ? 2500 : 1200);
}

function showResult() {
    let rank = "";
    let message = "";
    let showCert = false;

    if (score === 10) { rank = "1級"; showCert = true; }
    else if (score >= 8) { rank = "2級"; showCert = true; }
    else if (score >= 6) { rank = "3級"; showCert = true; }
    else if (score >= 4) { rank = "4級"; showCert = true; }
    else { message = "残念でした。また挑戦してください。"; }

    app.innerHTML = '<h1>結果発表</h1>' +
        '<div class="question-text">10問中 ' + score + '問 正解！</div>' +
        '<div class="message-text">' + (showCert ? '越検定' + rank + ' 合格！' : message) + '</div>' +
        (showCert ? '<button class="start-btn" onclick="showCertificate(\'' + rank + '\')">賞状表示</button>' : '') +
        '<button style="margin-top:20px;" onclick="showTitle()">タイトルに戻る</button>';
}

function getJapaneseDate() {
    try {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(new Date());
    } catch (e) {
        // Fallback for environments where Japanese calendar is not supported
        const now = new Date();
        return now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日";
    }
}

function showCertificate(rank) {
    const overlay = document.createElement('div');
    overlay.className = 'certificate-overlay';
    overlay.onclick = () => {
        document.body.removeChild(overlay);
        showTitle();
    };
    
    const dateStr = getJapaneseDate();
    
    overlay.innerHTML = '<div class="certificate">' +
            '<div class="cert-title">越検定 合格証</div>' +
            '<div class="cert-rank">越検定 ' + rank + '</div>' +
            '<div class="cert-body">' +
                'あなたは「越」に関する深い知識を有し、' +
                '本検定において優秀な成績を収めたことを' +
                'ここに証します。' +
            '</div>' +
            '<div class="cert-footer">' +
                dateStr + '<br>' +
                '越検定協会' +
            '</div>' +
        '</div>';
    document.body.appendChild(overlay);
}

showTitle();
