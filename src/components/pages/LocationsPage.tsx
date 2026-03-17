import { useEffect } from 'react';

export default function LocationsPage() {
  useEffect(() => { document.title = 'Locations | OMGyro Halal'; }, []);

  return (
    <main className="site-content__main page-id--1001174">
      <section className="content container locations-page locations-page--full-width" style={{ padding: '40px 20px 60px' }}>
        <div className="locations-container" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>

          {/* Location List */}
          <div className="locations-list" style={{ flex: '0 0 450px', background: 'linear-gradient(180deg,#fff 0%,#fffbf9 100%)', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.08),0 0 0 1px rgba(255,102,0,0.1)', maxHeight: '750px', overflowY: 'auto', position: 'sticky', top: '20px' }}>

            <div className="location-item" data-lat="40.7489" data-lng="-74.2610" style={{ marginBottom: '30px', padding: '25px', border: '2px solid #f0f0f0', borderRadius: '10px', background: '#ffffff', transition: 'all 0.3s ease' }}>
              <h2 className="h2" style={{ color: 'var(--omgyro-orange)', marginBottom: '15px', fontSize: '22px', fontWeight: 600 }}>📍 South Orange, NJ</h2>
              <p style={{ color: 'var(--omgyro-black)', marginBottom: '20px', fontSize: '14px', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--omgyro-black)', fontSize: '15px', display: 'block', marginBottom: '8px' }}>Hours</strong>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Sunday-Tuesday: 10:30am - 1:00am</span>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Wednesday-Thursday: 10:30am - 2:00am</span>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Friday-Saturday: 10:30am - 3:00am</span>
              </p>
              <div className="location-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px', alignItems: 'center', width: '100%' }}>
                <a href="https://maps.google.com/?q=South+Orange+NJ+OMGyro" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ width: '100%', padding: '12px 20px', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>View on Map</a>
                <a href="https://omgyrohalal.square.site/" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', border: 'none' }}>Order Online</a>
              </div>
            </div>

            <div className="location-item" data-lat="40.6976" data-lng="-74.2632" style={{ marginBottom: '30px', padding: '25px', border: '2px solid #f0f0f0', borderRadius: '10px', background: '#ffffff', transition: 'all 0.3s ease' }}>
              <h2 className="h2" style={{ color: 'var(--omgyro-orange)', marginBottom: '15px', fontSize: '22px', fontWeight: 600 }}>📍 Union, NJ</h2>
              <p style={{ color: 'var(--omgyro-black)', marginBottom: '20px', fontSize: '14px', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--omgyro-black)', fontSize: '15px', display: 'block', marginBottom: '8px' }}>Hours</strong>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Sunday-Thursday: 10:30am - 1:00am</span>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Friday-Saturday: 10:30am - 2:00am</span>
              </p>
              <div className="location-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px', alignItems: 'center', width: '100%' }}>
                <a href="https://maps.google.com/?q=Union+NJ+OMGyro" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ width: '100%', padding: '12px 20px', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>View on Map</a>
                <a href="https://omgyrohalal.square.site/" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', border: 'none' }}>Order Online</a>
              </div>
            </div>

            <div className="location-item" data-lat="40.9485" data-lng="-74.0933" style={{ marginBottom: '30px', padding: '25px', border: '2px solid #f0f0f0', borderRadius: '10px', background: '#ffffff', transition: 'all 0.3s ease' }}>
              <h2 className="h2" style={{ color: 'var(--omgyro-orange)', marginBottom: '15px', fontSize: '22px', fontWeight: 600 }}>📍 Paramus, NJ</h2>
              <p style={{ color: 'var(--omgyro-black)', marginBottom: '20px', fontSize: '14px', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--omgyro-black)', fontSize: '15px', display: 'block', marginBottom: '8px' }}>Hours</strong>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Sunday-Saturday: 10:30am - 11:00pm</span>
              </p>
              <div className="location-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px', alignItems: 'center', width: '100%' }}>
                <a href="https://maps.google.com/?q=Paramus+NJ+OMGyro" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ width: '100%', padding: '12px 20px', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>View on Map</a>
                <a href="https://omgyrohalal.square.site/" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', border: 'none' }}>Order Online</a>
              </div>
            </div>

            <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '3px solid #e0e0e0' }}>
              <h3 className="h3" style={{ color: 'var(--omgyro-black)', marginBottom: '20px', fontSize: '20px', fontWeight: 600 }}>Coming Soon</h3>
              <div className="coming-soon-item" style={{ marginBottom: '12px', padding: '18px 20px', background: '#f9f9f9', borderRadius: '8px', border: '2px solid #e8e8e8' }}>
                <h4 style={{ color: 'var(--omgyro-orange)', margin: 0, fontSize: '16px', fontWeight: 600 }}>📍 Old Bridge, NJ</h4>
              </div>
              <div className="coming-soon-item" style={{ marginBottom: '12px', padding: '18px 20px', background: '#f9f9f9', borderRadius: '8px', border: '2px solid #e8e8e8' }}>
                <h4 style={{ color: 'var(--omgyro-orange)', margin: 0, fontSize: '16px', fontWeight: 600 }}>📍 Elmwood, NJ</h4>
              </div>
              <div className="coming-soon-item" style={{ marginBottom: '12px', padding: '18px 20px', background: '#f9f9f9', borderRadius: '8px', border: '2px solid #e8e8e8' }}>
                <h4 style={{ color: 'var(--omgyro-orange)', margin: 0, fontSize: '16px', fontWeight: 600 }}>📍 Morris Twp, NJ</h4>
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="map-wrapper" style={{ flex: 1, minHeight: '750px', position: 'relative' }}>
            <div className="map-container" style={{ borderRadius: '24px', overflow: 'hidden', minHeight: '750px', boxShadow: '0 24px 64px rgba(0,0,0,0.14)', position: 'relative' }}>
              <div className="map-attribution" style={{ position: 'absolute', bottom: '12px', left: '12px', zIndex: 10, background: 'rgba(255,255,255,0.9)', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', color: '#333' }}>OMGYRO® · Find us in NJ</div>
              <iframe
                title="OMGYRO Locations Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96873.3!2d-74.261!3d40.7489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0ab%3A0x9de34dba47de1df2!2sSouth%20Orange%2C%20NJ!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="750"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
