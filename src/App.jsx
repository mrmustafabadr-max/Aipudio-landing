import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

function App() {

  const [selectedVideo, setSelectedVideo] = useState(null)

  const portfolioVideos = [
    {
      title: 'مطاعم',
      video:
        'https://res.cloudinary.com/dtju69if0/video/upload/v1778899011/restaurant_mfy9sg.mp4',
    },

    {
      title: 'عقارات',
      video:
        'https://res.cloudinary.com/dtju69if0/video/upload/v1778898970/realestate_pv2vrq.mp4',
    },

    {
      title: 'سكين كير',
      video:
        'https://res.cloudinary.com/dtju69if0/video/upload/v1778899530/skincare_cwjitn.mp4',
    },
  ]

  return (
    <div
      style={{
        background: '#050816',
        color: 'white',
        fontFamily: 'Cairo, sans-serif',
        overflowX: 'hidden',
      }}
    >

      {/* HERO */}

      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
          overflow: 'hidden',
        }}
      >

        {/* BACKGROUND VIDEO */}

        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.42,
          }}
        >
          <source
            src='https://res.cloudinary.com/dtju69if0/video/upload/v1778899541/Hero-background_lwuw4i.mp4'
            type='video/mp4'
          />
        </video>

        {/* OVERLAY */}

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
  'linear-gradient(to bottom, rgba(5,8,22,0.35), rgba(5,8,22,0.75))',
          }}
        />

        {/* GLOW */}

        <div
         style={{
  background:
    'linear-gradient(135deg,#7c3aed,#9333ea)',

  color: 'white',
  padding: '18px 40px',
  borderRadius: '999px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '18px',

  boxShadow:
    '0 15px 50px rgba(124,58,237,0.45)',

  transition: '0.3s',
}}
        />

        {/* CONTENT */}

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1100px',
          }}
        >

          {/* TOP BAR */}

          <div
            style={{
              display: 'inline-flex',
              gap: '12px',
              marginBottom: '30px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >

            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '10px 18px',
                borderRadius: '999px',
                fontSize: '14px',
              }}
            >
              خصم 10% للدفع الفوري
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '10px 18px',
                borderRadius: '999px',
                fontSize: '14px',
              }}
            >
              تسليم خلال أسبوع
            </div>

          </div>

          {/* LOGO */}

          <img
            src='/images/Logo.png'
            alt='Aipudio'
            style={{
              width: '180px',
              marginBottom: '40px',
            }}
          />

          {/* TITLE */}

          <h1
            style={{
              fontSize: 'clamp(42px, 7vw, 88px)',
              lineHeight: 1.15,
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            فيديوهات AI سينمائية
            <br />
            تجعل مشروعك يظهر
            <span
              style={{
                color: '#a855f7',
              }}
            >
              {' '}
              بشكل احترافي
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            style={{
              maxWidth: '850px',
              margin: '30px auto 0',
              color: '#cbd5e1',
              fontSize: '22px',
              lineHeight: 1.9,
            }}
          >
            إنتاج Reels احترافية للمطاعم والعقارات ومنتجات التجميل
            بجودة سينمائية تساعدك على الظهور بقوة على السوشيال ميديا.
          </p>

          {/* BUTTONS */}

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '45px',
              flexWrap: 'wrap',
            }}
          >

            <a
  href='https://wa.me/201005825888?text=مرحبًا فريق Aipudio 👋%0A%0Aنوع النشاط:%0Aالباقة المختارة:%0A%0Aوأرغب في بدء تنفيذ فيديوهات AI سينمائية لمشروعي.'

              onClick={() => {
  if (window.fbq) {
    fbq('track', 'Contact')
  }
}}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      'translateY(-4px) scale(1.03)'

    e.currentTarget.style.boxShadow =
      '0 25px 60px rgba(124,58,237,0.65)'
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      'translateY(0px) scale(1)'

    e.currentTarget.style.boxShadow =
      '0 15px 50px rgba(124,58,237,0.45)'
  }}

  style={{
    background:
      'linear-gradient(135deg,#7c3aed,#9333ea)',

    color: 'white',
    padding: '18px 40px',
    borderRadius: '999px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',

    boxShadow:
      '0 15px 50px rgba(124,58,237,0.45)',

    transition: '0.3s',
  }}
>
  ابدأ الآن
</a>

            <a
              href='#portfolio'
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                backdropFilter: 'blur(10px)',
              }}
            >
              شاهد الأعمال
            </a>

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}

      <section
        id='portfolio'
        style={{
          padding: '120px 20px',
        }}
      >

        <div
          style={{
            maxWidth: '1400px',
            margin: 'auto',
          }}
        >

          <h2
            style={{
              textAlign: 'center',
              fontSize: '56px',
              marginBottom: '20px',
            }}
          >
            نماذج الأعمال
          </h2>

          <p
            style={{
              textAlign: 'center',
              color: '#94a3b8',
              maxWidth: '700px',
              margin: '0 auto 70px',
              lineHeight: 1.8,
            }}
          >
            نماذج حقيقية لفيديوهات AI سينمائية تم تنفيذها لمجالات مختلفة.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(320px,1fr))',
              gap: '35px',
            }}
          >

            {portfolioVideos.map((item, index) => (

              <div
  key={index}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-10px)'
    e.currentTarget.style.boxShadow =
      '0 25px 70px rgba(124,58,237,0.35)'
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0px)'
    e.currentTarget.style.boxShadow = 'none'
  }}

  style={{
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '30px',
    overflow: 'hidden',
    backdropFilter: 'blur(14px)',
    transition: '0.4s',
    cursor: 'pointer',
  }}
>

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  onClick={() => setSelectedVideo(item.video)}
                  style={{
                    width: '100%',
                    height: '600px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                >
                  <source src={item.video} type='video/mp4' />
                </video>

                <div
                  style={{
                    padding: '28px',
                  }}
                >

                  <h3
                    style={{
                      fontSize: '32px',
                      marginBottom: '20px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <a
                    href='https://wa.me/201005825888'
                    style={{
                      background: '#7c3aed',
                      padding: '15px 30px',
                      borderRadius: '999px',
                      color: 'white',
                      textDecoration: 'none',
                      display: 'inline-block',
                      fontWeight: 'bold',
                    }}
                  >
                    اطلب فيديو مشابه
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* PACKAGES */}

      <section
        style={{
          padding: '120px 20px',
        }}
      >

        <div
          style={{
            maxWidth: '1400px',
            margin: 'auto',
          }}
        >

          <h2
            style={{
              textAlign: 'center',
              fontSize: '56px',
              marginBottom: '20px',
            }}
          >
            الباقات
          </h2>

          <p
            style={{
              textAlign: 'center',
              color: '#94a3b8',
              maxWidth: '700px',
              margin: '0 auto 70px',
              lineHeight: 1.8,
            }}
          >
            اختر الباقة المناسبة لمشروعك وابدأ في إنتاج فيديوهات AI
            سينمائية احترافية.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(320px,1fr))',
              gap: '35px',
            }}
          >

            {[
  {
    name: 'الباقة الأساسية',
    price: '2100 ج.م',

    features: [
      '3 Reels احترافية',
      'مدة 20-30 ثانية',
      'تعديل واحد لكل ريل',
      'تصدير 1080',
    ],
  },

  {
    name: 'باقة النمو',
    price: '3800 ج.م',
    popular: true,

    features: [
      '6 Reels احترافية',
      '2 تعديل لكل ريل',
      'تصميم Cover',
      'مؤثرات احترافية',
      'هندسة صوتية',
    ],
  },

  {
    name: 'البريميوم',
    price: '4400 ج.م',

    features: [
      '8 Reels احترافية',
      '2 تعديل لكل ريل',
      'Subtitles احترافية',
      'بناء هوية بصرية',
      'أفضل جودة إنتاج',
    ],
  },
].map((pkg, index) => (

              <div
                key={index}
                style={{
                  position: 'relative',

                  background: pkg.popular
                    ? 'linear-gradient(180deg,#7c3aed,#4c1d95)'
                    : 'rgba(255,255,255,0.05)',

                  border: pkg.popular
                    ? '1px solid rgba(168,85,247,0.5)'
                    : '1px solid rgba(255,255,255,0.08)',

                  borderRadius: '32px',
                  padding: '40px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(14px)',
                }}
              >

                {pkg.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: 'white',
                      color: '#4c1d95',
                      padding: '8px 16px',
                      borderRadius: '999px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    الأكثر طلبًا
                  </div>
                )}

                <h3
                  style={{
                    fontSize: '36px',
                    marginBottom: '20px',
                  }}
                >
                  {pkg.name}
                </h3>

                <div
                  style={{
                    fontSize: '54px',
                    fontWeight: 'bold',
                    marginBottom: '35px',
                  }}
                >
                  {pkg.price}
                </div>
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    marginBottom: '40px',
  }}
>

  {pkg.features.map((feature, i) => (

    <div
      key={i}
      style={{
        color: '#e2e8f0',
        fontSize: '18px',
      }}
    >
      ✓ {feature}
    </div>

  ))}

</div>
                <a
                  href='https://wa.me/201005825888'
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: pkg.popular
                      ? 'white'
                      : '#7c3aed',

                    color: pkg.popular
                      ? '#4c1d95'
                      : 'white',

                    padding: '18px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  اطلب الباقة
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* HOW IT WORKS */}

      <section
        style={{
          padding: '120px 20px',
        }}
      >

        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto',
          }}
        >

          <h2
            style={{
              textAlign: 'center',
              fontSize: '56px',
              marginBottom: '20px',
            }}
          >
            كيف نبدأ؟
          </h2>

          <p
            style={{
              textAlign: 'center',
              color: '#94a3b8',
              maxWidth: '700px',
              margin: '0 auto 70px',
              lineHeight: 1.8,
            }}
          >
            خطوات بسيطة لتحويل مشروعك إلى فيديوهات AI سينمائية احترافية.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(250px,1fr))',
              gap: '25px',
            }}
          >

            {[
              'اختر الباقة المناسبة',
              'أرسل صور أو فيديوهات المشروع',
              'أرسل تفاصيل النشاط',
              'ادفع 50% مقدم',
              'استلم الفيديو خلال أسبوع',
            ].map((step, index) => (

              <div
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '35px',
                  borderRadius: '28px',
                  textAlign: 'center',
                }}
              >

                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#7c3aed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto 20px',
                    fontWeight: 'bold',
                    fontSize: '22px',
                  }}
                >
                  {index + 1}
                </div>

                <h3
                  style={{
                    fontSize: '22px',
                    lineHeight: 1.6,
                  }}
                >
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section
        style={{
          padding: '120px 20px',
        }}
      >

        <div
          style={{
            maxWidth: '900px',
            margin: 'auto',
          }}
        >

          <h2
            style={{
              textAlign: 'center',
              fontSize: '56px',
              marginBottom: '70px',
            }}
          >
            الأسئلة الشائعة
          </h2>

          {[
            {
              q: 'هل أحتاج تصوير احترافي؟',
              a: 'لا، يمكننا العمل حتى باستخدام صور أو فيديوهات بالموبايل.',
            },

            {
              q: 'ما مدة التسليم؟',
              a: 'يتم التسليم خلال أسبوع.',
            },

            {
              q: 'هل يشمل التنفيذ تعليق صوتي وسيناريو؟',
              a: 'نعم، جميع الباقات تشمل كتابة السكريبت والتعليق الصوتي.',
            },

            {
              q: 'هل يمكن طلب تعديلات؟',
              a: 'نعم، حسب عدد التعديلات المتاحة في كل باقة.',
            },

            {
              q: 'ما طرق الدفع المتاحة؟',
              a: 'InstaPay و E-wallet مع دفع 50% مقدم.',
            },
          ].map((faq, index) => (

            <div
              key={index}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '30px',
                marginBottom: '20px',
              }}
            >

              <h3
                style={{
                  fontSize: '24px',
                  marginBottom: '14px',
                }}
              >
                {faq.q}
              </h3>

              <p
                style={{
                  color: '#cbd5e1',
                  lineHeight: 1.8,
                }}
              >
                {faq.a}
              </p>

            </div>

          ))}

        </div>

      </section>
            {/* FINAL CTA */}

      <section
        style={{
          padding: '120px 20px',
        }}
      >

        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto',

            background:
              'linear-gradient(135deg,#7c3aed,#4c1d95)',

            borderRadius: '40px',

            padding: '80px 30px',

            textAlign: 'center',

            position: 'relative',
            overflow: 'hidden',
          }}
        >

          {/* GLOW */}

          <div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: 'white',
              opacity: 0.08,
              filter: 'blur(120px)',
              top: '-100px',
              left: '-100px',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >

            <h2
              style={{
                fontSize: 'clamp(42px,6vw,72px)',
                lineHeight: 1.25,
                marginBottom: '25px',
              }}
            >
              جاهز تجعل مشروعك
              <br />
              يظهر بشكل سينمائي؟
            </h2>

            <p
              style={{
                maxWidth: '750px',
                margin: '0 auto',
                lineHeight: 1.9,
                fontSize: '22px',
                color: '#ede9fe',
              }}
            >
              ابدأ الآن وتواصل معنا عبر واتساب للحصول على فيديوهات
              AI احترافية لمشروعك.
            </p>

            <a
              href='https://wa.me/201005825888?text=مرحبًا فريق Aipudio 👋%0A%0Aنوع النشاط:%0Aالباقة المختارة:%0A%0Aوأرغب في بدء تنفيذ فيديوهات AI سينمائية لمشروعي.'

              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-4px) scale(1.03)'

                e.currentTarget.style.boxShadow =
                  '0 25px 60px rgba(255,255,255,0.35)'
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'translateY(0px) scale(1)'

                e.currentTarget.style.boxShadow =
                  '0 15px 40px rgba(255,255,255,0.2)'
              }}

              style={{
                display: 'inline-block',

                marginTop: '45px',

                background: 'white',

                color: '#4c1d95',

                padding: '20px 45px',

                borderRadius: '999px',

                textDecoration: 'none',

                fontWeight: 'bold',

                fontSize: '20px',

                transition: '0.3s',

                boxShadow:
                  '0 15px 40px rgba(255,255,255,0.2)',
              }}
            >
              تواصل الآن
            </a>

          </div>

        </div>

      </section>
      {/* FLOATING WHATSAPP */}

      <a
        href='https://wa.me/201005825888'
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '34px',
          textDecoration: 'none',
          zIndex: 999,
          boxShadow: '0 0 40px rgba(37,211,102,0.5)',
        }}
      >
        <FaWhatsapp />
      </a>

      {/* VIDEO MODAL */}

      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
        >

          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
            }}
          >

            <video
              controls
              autoPlay
              style={{
                width: '100%',
                borderRadius: '24px',
              }}
            >
              <source
                src={selectedVideo}
                type='video/mp4'
              />
            </video>

            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                border: 'none',
                background: '#7c3aed',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>

          </div>

        </div>
      )}

    </div>
  )
}

export default App
