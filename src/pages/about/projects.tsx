import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import styles from "@/styles/about/Projects.module.css";

export default function Projects() {
  const [repos, setRepos] = useState([
    { id: 0, name: "", description: "", html_url: "" },
  ]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGitHubRepos().then((repos) => {
      setRepos(repos);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div id="projects">
        <div className={styles.header}>
          <h2>Projects</h2>
          <h2>Description</h2>
        </div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!repos) return <p>No profile data</p>;

  return (
    <div id="projects" className={styles.layout}>
      <div className={styles.header}>
        <h2>Projects</h2>
        <h2>Description</h2>
      </div>
      {repos.map((repo) => {
        return (
          <div key={repo.id} className={styles.linkContainer}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getGitHubRepos() {
  const octokit = new Octokit({
    auth: "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",
  });
  const repos = await octokit
    .request(
      "GET /users/{username}/repos{?type,sort,direction,per_page,page}",
      {
        username: "Rynosuki",
      }
    )
    .then((res) => {
      return res.data;
    });
  return repos;
}
