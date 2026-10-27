import Link from 'next/link';
import { getJobs } from '../lib/jobs';

export const revalidate = 900;

export default async function HomePage() {
  const jobs = await getJobs();

  return (
    <main className="wrap section">
      <section>
        <span className="badge">KERALA GOVERNMENT JOBS</span>
        <h1>Find Your Next Government Job</h1>
        <p className="lead">
          Latest Kerala PSC, Central Government and
          Kerala Government recruitment notifications.
        </p>
      </section>

      <section>
        <h2>Latest Job Notifications</h2>

        {jobs.length === 0 ? (
          <p>No job notifications available right now.</p>
        ) : (
          <div className="jobsGrid">
            {jobs.map((job) => (
              <article className="jobCard" key={job.id}>
                <span className="badge">
                  {job.organization}
                </span>

                <h3>{job.title}</h3>

                <p>
                  Qualification: {job.qualification || 'See notification'}
                </p>

                <p>
                  Location: {job.location || 'Kerala'}
                </p>

                <p>
                  Last Date: {job.last_date || 'See notification'}
                </p>

                <Link
                  className="btn"
                  href={`/jobs/${job.id}`}
                >
                  View Job Details →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
