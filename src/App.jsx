function App() {
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
        fontFamily: 'sans-serif',
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
            opacity: 0.28,
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
              'linear-gradient(to bottom, rgba(5,8,22,0.7), rgba(5,8,22,0.95))',
          }}
        />

        {/* GLOW */}

        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            background: '#7c3aed',
            filter: 'blur(180px)',
            opacity: 0.18,
            top: '-200px',
            borderRadius: '50%',
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
            src='/images/Logo.svg'
            alt='Aipudio'
            style={{
              width: '220px',
              marginBottom: '40px',
            }}
          />

          {/* HEADLINE */}

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
              style={{
                background: '#7c3aed',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 0 40px rgba(124,58,237,0.5)',
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

          {/* STATS */}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
              gap: '20px',
              marginTop: '80px',
            }}
          >
            {[
              ['+50', 'فيديو سينمائي'],
              ['+20', 'عميل'],
              ['+1M', 'مشاهدة'],
              ['7 أيام', 'مدة التسليم'],
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '25px',
                  borderRadius: '24px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h2
                  style={{
                    fontSize: '42px',
                    color: '#a855f7',
                    margin: 0,
                  }}
                >
                  {item[0]}
                </h2>

                <p
                  style={{
                    color: '#cbd5e1',
                    marginTop: '12px',
                  }}
                >
                  {item[1]}
                </p>
              </div>
            ))}
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
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: '600px',
                    objectFit: 'cover',
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
    </div>
  )
}

export default App
