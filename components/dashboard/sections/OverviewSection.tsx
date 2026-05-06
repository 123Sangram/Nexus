// "use client";

// import Image from "next/image";
// import styles from "./Overview.module.css";

// export default function OverviewSection() {
//   return (
//     <section className={styles.page}>
//       {/* Page header */}
//       <header className={styles.header}>
//         <h1 className={styles.title}>Overview</h1>
//         <p className={styles.subtitle}>Track your interview journey and insights.</p>
//       </header>

//       {/* Main card */}
//      <div className={styles.card}>

//   {/* TOP STATS */}
//   <div className={styles.statsGrid}>
//     <div className={styles.statBox}>
//       <h3>12</h3>
//       <p>Total Interviews</p>
//     </div>

//     <div className={styles.statBox}>
//       <h3>78%</h3>
//       <p>Average Score</p>
//     </div>

//     <div className={styles.statBox}>
//       <h3>5</h3>
//       <p>Strong Skills</p>
//     </div>

//     <div className={styles.statBox}>
//       <h3>3</h3>
//       <p>Weak Areas</p>
//     </div>
//   </div>

//   {/* MAIN GRID */}
//   <div className={styles.mainGrid}>

//     {/* LEFT SIDE */}
//     <div className={styles.leftPanel}>

//       <h2 className={styles.heading}>Your Interview Progress 🚀</h2>

//       <p className={styles.body}>
//         You're consistently improving. Keep practicing to reach top performance.
//       </p>

//       {/* PROGRESS BAR */}
//       <div className={styles.progressWrap}>
//         <div className={styles.progressBar}>
//           <div className={styles.progressFill}></div>
//         </div>
//         <span>78% Overall Performance</span>
//       </div>

//       {/* ACTION BUTTONS */}
//       <div className={styles.actions}>
//         <button className={styles.primaryBtn}>Start Interview</button>
//         <button className={styles.secondaryBtn}>View History</button>
//       </div>
//     </div>

//     {/* RIGHT SIDE */}
//     <div className={styles.rightPanel}>
//       <Image
//         src="/overview-illustration.png"
//         alt="overview"
//         width={320}
//         height={260}
//         className={styles.illustrationImg}
//       />
//     </div>

//   </div>

// </div>
//     </section>
//   );
// }










"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { db, auth } from "@/firebase/client";
import { collection, query, where, getDocs } from "firebase/firestore";
import {
  Play,
  RotateCcw,
  Plus,
  Search,
  Calendar,
  FileText,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  BarChart3,
  Layers,
  TrendingUp,
  Award,
} from "lucide-react";
import styles from "./Overview.module.css";

// ─── Tech stack color map ────────────────────────────────────────────────────
const TECH_COLORS: Record<string, { bg: string; color: string; short: string }> = {
  "react":            { bg: "#0c2340", color: "#61dafb", short: "Re" },
  "react.js":         { bg: "#0c2340", color: "#61dafb", short: "Re" },
  "node":             { bg: "#0c200c", color: "#68a063", short: "No" },
  "node.js":          { bg: "#0c200c", color: "#68a063", short: "No" },
  "express":          { bg: "#0c1c0c", color: "#68b068", short: "Ex" },
  "express.js":       { bg: "#0c1c0c", color: "#68b068", short: "Ex" },
  "mongodb":          { bg: "#0c200c", color: "#4db33d", short: "Mo" },
  "python":           { bg: "#0c1c34", color: "#ffd43b", short: "Py" },
  "typescript":       { bg: "#0c1440", color: "#3178c6", short: "Ts" },
  "javascript":       { bg: "#1e1800", color: "#f7df1e", short: "Js" },
  "java":             { bg: "#1e0c00", color: "#f89820", short: "Ja" },
  "c++":              { bg: "#0c0c20", color: "#9c88ff", short: "C+" },
  "aws":              { bg: "#1e1000", color: "#ff9900", short: "Aw" },
  "docker":           { bg: "#0c1420", color: "#2496ed", short: "Do" },
  "git":              { bg: "#1e0c0c", color: "#f05032", short: "Gi" },
  "github":           { bg: "#0c0c14", color: "#94a3b8", short: "Gh" },
  "postgresql":       { bg: "#0c1420", color: "#336791", short: "Pg" },
  "mysql":            { bg: "#0c1420", color: "#4479a1", short: "My" },
  "redis":            { bg: "#1e0c0c", color: "#dc382d", short: "Rd" },
  "graphql":          { bg: "#140c20", color: "#e10098", short: "Gq" },
  "flutter":          { bg: "#0c1420", color: "#02569b", short: "Fl" },
  "swift":            { bg: "#1e0c00", color: "#fa7343", short: "Sw" },
  "kotlin":           { bg: "#0c0c20", color: "#7f52ff", short: "Ko" },
  "mern stack":       { bg: "#0c1c34", color: "#61dafb", short: "ME" },
  "linux":            { bg: "#14140c", color: "#fcc624", short: "Li" },
  "postman":          { bg: "#1e0c00", color: "#ff6c37", short: "Pm" },
  "restful apis":     { bg: "#0c1e1e", color: "#00d4aa", short: "RA" },
  "agile development":{ bg: "#0c1420", color: "#a78bfa", short: "Ag" },
};

function getTechStyle(tech: string) {
  const key = tech.trim().toLowerCase();
  return TECH_COLORS[key] || {
    bg: "#0c1020",
    color: "#60a5fa",
    short: tech.trim().slice(0, 2).toUpperCase(),
  };
}

function TechBadge({ tech }: { tech: string }) {
  const s = getTechStyle(tech);
  return (
    <span
      className={styles.techBadge}
      style={{ background: s.bg, color: s.color, borderColor: s.color + "2a" }}
    >
      {tech.trim()}
    </span>
  );
}

function CoverIcon({ techstack }: { techstack: string[] }) {
  const primary = techstack?.[0] || "";
  const s = getTechStyle(primary);
  return (
    <div
      className={styles.coverIcon}
      style={{ background: s.bg, borderColor: s.color + "50" }}
    >
      <span style={{ color: s.color }}>{s.short}</span>
    </div>
  );
}

/** Mini SVG ring showing score percentage */
function ScoreRing({ score }: { score: number }) {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  const color = score >= 75 ? "#4ade80" : score >= 50 ? "#facc15" : "#f87171";
  return (
    <svg className={styles.scoreRing} viewBox="0 0 52 52">
      <circle cx="26" cy="26" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeDashoffset={circ / 4}
        style={{ filter: `drop-shadow(0 0 4px ${color}66)` }}
      />
      <text
        x="26"
        y="26"
        dominantBaseline="central"
        textAnchor="middle"
        fill={color}
        fontSize="10"
        fontWeight="700"
        fontFamily="Syne, sans-serif"
      >
        {score}%
      </text>
    </svg>
  );
}

const ITEMS_PER_PAGE = 5;

type Interview = {
  id: string;
  role: string;
  type: string;
  level: string;
  techstack: string[];
  questions: string[];
  createdAt: string;
  coverImage?: string;
  finalized?: boolean;
  userId: string;
  hasFeedback: boolean;
  feedbackId: string | null;
  score?: number;
  completedAt?: string;
};

export default function OverviewSection() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [activeFilter, setActiveFilter] = useState<"all" | "pending" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest" | "score">("latest");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchInterviews = async () => {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) return setLoading(false);

      const q = query(collection(db, "interviews"), where("userId", "==", user.uid));
      const snapshot = await getDocs(q);

      const data = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const interview = { id: doc.id, ...doc.data() } as Interview;
          const feedbackQ = query(
            collection(db, "feedback"),
            where("interviewId", "==", doc.id),
            where("userId", "==", user.uid)
          );
          const feedbackSnap = await getDocs(feedbackQ);
          const feedbackDoc = feedbackSnap.empty ? null : feedbackSnap.docs[0];
          return {
            ...interview,
            hasFeedback: !feedbackSnap.empty,
            feedbackId: feedbackDoc?.id || null,
            score: feedbackDoc?.data()?.totalScore || null,
          };
        })
      );

      setInterviews(data);
      setLoading(false);
    };
    fetchInterviews();
  }, []);

  // ─── Stats ───────────────────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const total = interviews.length;
    const completed = interviews.filter((i) => i.hasFeedback).length;
    const pending = interviews.filter((i) => !i.hasFeedback).length;
    const scores = interviews.filter((i) => i.score).map((i) => i.score as number);
    const avgScore = scores.length
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : null;
    return { total, completed, pending, avgScore };
  }, [interviews]);

  // ─── Unique options ───────────────────────────────────────────────────────────
  const roles = useMemo(
    () => ["all", ...Array.from(new Set(interviews.map((i) => i.role)))],
    [interviews]
  );
  const types = useMemo(
    () => ["all", ...Array.from(new Set(interviews.map((i) => i.type)))],
    [interviews]
  );

  // ─── Filtered & sorted ────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let list = [...interviews];
    if (activeFilter === "pending") list = list.filter((i) => !i.hasFeedback);
    if (activeFilter === "completed") list = list.filter((i) => i.hasFeedback);
    if (roleFilter !== "all") list = list.filter((i) => i.role === roleFilter);
    if (typeFilter !== "all") list = list.filter((i) => i.type === typeFilter);
    if (searchQuery)
      list = list.filter(
        (i) =>
          i.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          i.techstack?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    if (sortOrder === "latest")
      list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    if (sortOrder === "oldest")
      list.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    if (sortOrder === "score") list.sort((a, b) => (b.score || 0) - (a.score || 0));
    return list;
  }, [interviews, activeFilter, roleFilter, typeFilter, searchQuery, sortOrder]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (f: "all" | "pending" | "completed") => {
    setActiveFilter(f);
    setCurrentPage(1);
  };

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const diff = Math.floor((Date.now() - date.getTime()) / 86400000);
    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";
    if (diff < 7) return `${diff}d ago`;
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  const typeColors: Record<string, { bg: string; color: string; border: string }> = {
    technical: { bg: "rgba(29,78,216,0.18)", color: "#93c5fd", border: "rgba(59,130,246,0.25)" },
    behavioral: { bg: "rgba(88,28,135,0.2)", color: "#c4b5fd", border: "rgba(139,92,246,0.25)" },
    balanced:   { bg: "rgba(6,78,59,0.2)",   color: "#6ee7b7", border: "rgba(52,211,153,0.25)" },
  };

  return (
    <div className={styles.section}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIcon}>
            <Layers size={22} />
          </div>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>Overview</h1>
            <p className={styles.subtitle}>Track your interview journey and performance insights.</p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.searchBox}>
            <Search size={15} className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              placeholder="Search by role or tech..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            />
          </div>
          <button className={styles.newBtn} onClick={() => router.push("/dashboard/interview-manual")}>
            <Plus size={16} />
            New Interview
          </button>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className={styles.statsGrid}>
        {[
          {
            icon: <FileText size={20} />,
            label: "Total Interviews",
            value: stats.total,
            sub: "All time",
            color: "#3b82f6",
          },
          {
            icon: <Clock size={20} />,
            label: "Pending",
            value: stats.pending,
            sub: "Awaiting completion",
            color: "#60a5fa",
          },
          {
            icon: <CheckCircle2 size={20} />,
            label: "Completed",
            value: stats.completed,
            sub: "Reviews received",
            color: "#34d399",
          },
          {
            icon: <Award size={20} />,
            label: "Avg. Score",
            value: stats.avgScore !== null ? `${stats.avgScore}%` : "—",
            sub: "Across completed",
            color: "#818cf8",
          },
        ].map((s) => (
          <div key={s.label} className={styles.statCard}>
            <div
              className={styles.statIconWrap}
              style={{ background: s.color + "18", color: s.color }}
            >
              {s.icon}
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statSub} style={{ color: s.color }}>
                {s.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Filters ── */}
      <div className={styles.filtersBar}>
        <div className={styles.tabGroup}>
          {(["all", "pending", "completed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`${styles.tab} ${activeFilter === f ? styles.tabActive : ""}`}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              {f !== "all" && (
                <span style={{ marginLeft: 6, opacity: 0.65, fontSize: "0.7rem" }}>
                  ({f === "pending" ? stats.pending : stats.completed})
                </span>
              )}
            </button>
          ))}
        </div>
        <div className={styles.filterGroup}>
          <select
            className={styles.select}
            value={roleFilter}
            onChange={(e) => { setRoleFilter(e.target.value); setCurrentPage(1); }}
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r === "all" ? "All Roles" : r}
              </option>
            ))}
          </select>
          <select
            className={styles.select}
            value={typeFilter}
            onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }}
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t === "all" ? "All Types" : t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
          <select
            className={styles.select}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as any)}
          >
            <option value="latest">Latest First</option>
            <option value="oldest">Oldest First</option>
            <option value="score">Highest Score</option>
          </select>
        </div>
      </div>

      {/* ── Interview List ── */}
      <div className={styles.list}>
        {loading ? (
          <div className={styles.empty}>Loading your interviews…</div>
        ) : paginated.length === 0 ? (
          <div className={styles.empty}>No interviews found. Create your first one!</div>
        ) : (
          paginated.map((interview) => {
            const MAX_VISIBLE = 4;
            const visibleTech = interview.techstack?.slice(0, MAX_VISIBLE) || [];
            const extraCount = (interview.techstack?.length || 0) - MAX_VISIBLE;
            const tc = typeColors[interview.type] || typeColors.technical;

            return (
              <div key={interview.id} className={styles.card}>

                {/* Left: Info */}
                <div className={styles.cardLeft}>
                  <CoverIcon techstack={interview.techstack} />
                  <div className={styles.cardInfo}>
                    <div className={styles.cardTitleRow}>
                      <span className={styles.cardTitle}>{interview.role} Interview</span>
                      <span
                        className={styles.cardType}
                        style={{ background: tc.bg, color: tc.color, borderColor: tc.border }}
                      >
                        {interview.type?.charAt(0).toUpperCase() + interview.type?.slice(1)}
                      </span>
                    </div>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardRole}>{interview.role}</span>
                      <span className={styles.cardDot}>·</span>
                      <span className={styles.cardLevel} style={{ color: "#818cf8" }}>
                        {interview.level}
                      </span>
                    </div>
                    <div className={styles.techList}>
                      {visibleTech.map((t) => (
                        <TechBadge key={t} tech={t} />
                      ))}
                      {extraCount > 0 && (
                        <span className={styles.techExtra}>+{extraCount} more</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mid: Stats */}
                <div className={styles.cardMid}>
                  {interview.hasFeedback && interview.score ? (
                    <ScoreRing score={interview.score} />
                  ) : (
                    <div className={styles.cardStat}>
                      <FileText size={14} />
                      <span>{interview.questions?.length || 0} Qs</span>
                    </div>
                  )}
                </div>

                {/* Right: Actions */}
                <div className={styles.cardRight}>
                  <div className={styles.dateInfo}>
                    <div className={styles.dateRow}>
                      <Calendar size={12} />
                      <span>{formatDate(interview.createdAt)}</span>
                    </div>
                    <div className={styles.dateSubRow}>
                      {interview.hasFeedback ? "Completed " : "Created "}{formatDate(interview.createdAt)}
                    </div>
                  </div>

                  <div className={styles.cardActions}>
                    <span
                      className={`${styles.statusBadge} ${
                        interview.hasFeedback ? styles.statusCompleted : styles.statusPending
                      }`}
                    >
                      {interview.hasFeedback ? (
                        <><CheckCircle2 size={11} /> Completed</>
                      ) : (
                        <><Clock size={11} /> Pending</>
                      )}
                    </span>

                    {!interview.hasFeedback ? (
                      <button
                        className={styles.btnPrimary}
                        onClick={() => router.push(`/interview/${interview.id}`)}
                      >
                        <Play size={13} /> Start Interview
                      </button>
                    ) : (
                      <>
                        <button
                          className={styles.btnSuccess}
                          onClick={() => router.push(`/interview/${interview.id}/feedback`)}
                        >
                          <BarChart3 size={13} /> View Feedback
                        </button>
                        <button
                          className={styles.btnSecondary}
                          onClick={() => router.push(`/interview/${interview.id}`)}
                        >
                          <RotateCcw size={13} /> Retry
                        </button>
                      </>
                    )}
                    <button
                      className={styles.btnGhost}
                      onClick={() => router.push(`/interview/${interview.id}`)}
                    >
                      Details <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={15} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`${styles.pageBtn} ${currentPage === p ? styles.pageBtnActive : ""}`}
            >
              {p}
            </button>
          ))}
          <button
            className={styles.pageBtn}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={15} />
          </button>
        </div>
      )}
    </div>
  );
}