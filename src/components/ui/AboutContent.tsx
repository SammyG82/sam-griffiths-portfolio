export default function AboutContent() {
  return (
    <div className="about-grid">
      <div className="about-text reveal">
        <p>
          Hello! My name is <span>Sam Griffiths</span> and I'm a first-year Probability and Statistics student at
          the <span>University of California, San Diego</span>.
        </p>
        <p>
          I'm passionate about the intersection of <span>data science and software engineering</span> — building
          systems that not only look great but extract meaningful insight from real-world data. From ETL pipelines
          and machine learning models to full-stack production web apps, I love working across the stack and
          shipping things that actually get used.
        </p>
        <p>
          At <span>DS3 (Data Science Student Society)</span>, I serve as a Full-Stack Engineer on the software
          team — building and maintaining production web applications used by the club and its events.
        </p>
        <p>
          Outside of academics, I love keeping up with sports — mainly{' '}
          <span>football and basketball</span> — and I'm always down for a good movie, TV show, or anime.
        </p>
      </div>

      <div className="about-details reveal">
        <div className="detail-block">
          <div className="detail-label">Education</div>
          <div className="detail-value">
            B.S. Probability &amp; Statistics
            <br />
            UC San Diego · Class of 2029
          </div>
        </div>
        <div className="detail-block">
          <div className="detail-label">GPA</div>
          <div className="detail-value">3.96 / 4.0</div>
        </div>
        <div className="detail-block">
          <div className="detail-label">Current Role</div>
          <div className="detail-value">
            Full-Stack Engineer
            <br />
            Data Science Student Society (DS3)
          </div>
        </div>
        <div className="detail-block">
          <div className="detail-label">Location</div>
          <div className="detail-value">San Diego, CA</div>
        </div>
        <div className="detail-block">
          <div className="detail-label">Relevant Coursework</div>
          <div className="detail-value">DSC 20 · DSC 10 · Math 20C · Math 20B</div>
        </div>
      </div>
    </div>
  )
}
