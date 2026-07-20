"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { StoryFieldIcon } from "@/components/StoryFieldIcon";
import {
  featuredStories,
  stories,
  storyTagIcons,
  storyTags,
} from "@/data/stories";

export function StoryShowcase() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? stories
        : stories.filter((story) => story.tag === activeTag),
    [activeTag],
  );

  return (
    <section id="stories" className="stories-section section-divided">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">The Legacy</div>
          <h2>Restoring the Legacy of more than 300 Women</h2>
          <p>
            These 1001 Women examples show the breadth of the research and the
            range of stories that can become book spreads, exhibition moments,
            lessons, short videos and public talks.
          </p>
        </div>

        <div className="story-scroller" aria-label="Featured women">
          {featuredStories.map((story) => (
            <article className="story-feature" key={story.name}>
              <div className="story-feature-media">
                {story.image ? (
                  <Image
                    src={story.image}
                    alt={`Illustrated scene for ${story.name}`}
                    width={877}
                    height={1024}
                    sizes="(max-width: 900px) 70vw, 240px"
                  />
                ) : null}
              </div>
              <div className="story-feature-copy">
                <span className="story-feature-tag">{story.tag}</span>
                <h3>{story.name}</h3>
                <p>{story.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="story-filter" aria-label="Filter by field">
          <div className="ornament-divider" aria-hidden="true" />
          <div className="story-tags" role="tablist">
            {storyTags.map((tag) => (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={activeTag === tag}
                className={
                  activeTag === tag ? "story-tag is-active" : "story-tag"
                }
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="story-box-grid">
            {filtered.map((story) => {
              const iconClass = storyTagIcons[story.tag];

              return (
                <article className="story-box" key={story.name}>
                  {iconClass ? (
                    <span className="story-box-icon" aria-hidden="true">
                      <StoryFieldIcon name={iconClass} />
                    </span>
                  ) : null}
                  <span className="story-box-tag">{story.tag}</span>
                  <h3>{story.name}</h3>
                  <p>{story.summary}</p>
                </article>
              );
            })}
          </div>

          <p className="story-coming-soon">
            Full illustrated portraits and longer profiles — coming soon.
          </p>
        </div>

        <div className="story-research">
          <div className="ornament-divider" aria-hidden="true" />
          <h3>Based on research, not myths</h3>
          <p>
            Behind the public movement is a major research project. Each story
            must be checked carefully before it becomes a book spread,
            exhibition panel, lesson or social post.
          </p>
          <ul className="bullet-list">
            <li>Inspire children without inventing stories.</li>
            <li>Give creators clear facts and safe wording.</li>
            <li>Protect the credibility of the movement.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
