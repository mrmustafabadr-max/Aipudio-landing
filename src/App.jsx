function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050816',
        color: 'white',
        fontFamily: 'sans-serif',
        overflowX: 'hidden'
      }}
    >

      {/* HERO SECTION */}

      <section
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px'
        }}
      >

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
            opacity: 0.35
          }}
        >
          <source
            src="https://res.cloudinary.com/dtju69if0/video/upload/v1778899541/Hero-background_lwuw4i.mp4"
            type="video/mp4"
          />
        </video>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.6)'
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '900px'
          }}
        >

          <img
            src="/images/logo.png"
            alt="Aipudio"
            style={{
              width: '180px',
              marginBottom: '30px'
            }}
          />

          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              lineHeight: 1.2,
              fontWeight: 'bold'
            }}
          >
            فيديوهات AI سينمائية تجعل مشروعك يظهر بشكل احترافي
          </h1>

          <p
            style={{
              marginTop: '25px',
              color: '#d1d5db',
              fontSize: '20px',
              lineHeight: 1.8
            }}
          >
            إنتاج Reels احترافية للمطاعم والعقارات ومنتجات التجميل بجودة سينمائية.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              marginTop: '40px',
              flexWrap: 'wrap'
            }}
          >

            <a
              href="https://wa.me/201005825888?text=مرحبًا فريق Aipudio 👋%0A%0Aنوع النشاط:%0Aالباقة المختارة:%0A%0Aوأرغب في بدء تنفيذ فيديوهات AI سينمائية لمشروعي."
              style={{
                background: '#7c3aed',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px'
              }}
            >
              ابدأ الآن
            </a>

            <a
              href="#portfolio"
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px'
              }}
            >
              شاهد الأعمال
            </a>

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}

      <section
        id="portfolio"
        style={{
          padding: '100px 20px'
        }}
      >

        <h2
          style={{
            textAlign: 'center',
            fontSize: '48px',
            marginBottom: '60px'
          }}
        >
          نماذج الأعمال
        </h2>

        <div
          style={{
            maxWidth: '1400px',
            margin: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '30px'
          }}
        >

          {[
            {
              title: 'مطاعم',
              video: 'https://res.cloudinary.com/dtju69if0/video/upload/v1778899011/restaurant_mfy9sg.mp4'
            },
            {
              title: 'عقارات',
              video: 'https://res.cloudinary.com/dtju69if0/video/upload/v1778898970/realestate_pv2vrq.mp4'
            },
            {
              title: 'سكين كير',
              video: 'https://res.cloudinary.com/dtju69if0/video/upload/v1778899530/skincare_cwjitn.mp4'
            }
          ].map((item, index) => (

            <div
              key={index}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '30px',
                overflow: 'hidden'
              }}
            >

              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  height: '550px',
                  objectFit: 'cover'
                }}
              >
                <source src={item.video} type="video/mp4" />
              </video>

              <div
                style={{
                  padding: '25px'
                }}
              >

                <h3
                  style={{
                    fontSize: '32px',
                    marginBottom: '20px'
                  }}
                >
                  {item.title}
                </h3>

                <a
                  href="https://wa.me/201005825888"
                  style={{
                    background: '#7c3aed',
                    padding: '14px 28px',
                    borderRadius: '999px',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  اطلب فيديو مشابه
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  )
}

export default App
