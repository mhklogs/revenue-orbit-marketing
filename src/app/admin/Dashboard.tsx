"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type Tab = "leads" | "blogs" | "team" | "settings";

type Lead = {
  id: string; name: string; email: string; company: string;
  phone: string; service: string; message: string;
  status: "new" | "contacted" | "qualified" | "closed"; createdAt: string;
};
type Blog = { id: string; slug: string; title: string; category: string; readTime: string; excerpt: string; body: string; createdAt: string };
type Member = { id: string; name: string; role: string; bio: string; email: string; createdAt: string };
type Theme = { accent: string; accentLight: string; accentDark: string };

const emptyBlog = (): Blog => ({ id: "", slug: "", title: "", category: "General", readTime: "", excerpt: "", body: "", createdAt: "" });
const emptyMember = (): Member => ({ id: "", name: "", role: "", bio: "", email: "", createdAt: "" });

const PRESETS = [
  { label: "Sea Green", accent: "#2EC4B0", light: "#5AD6C5", dark: "#0F6B63" },
  { label: "Off White", accent: "#E9EDF5", light: "#FFFFFF", dark: "#A8B3C8" },
  { label: "Electric Blue", accent: "#3B82F6", light: "#60A5FA", dark: "#1D4ED8" },
  { label: "Royal Gold", accent: "#D4AF37", light: "#E7C65A", dark: "#9A7B2E" },
  { label: "Ruby", accent: "#E5576B", light: "#EF8093", dark: "#A32E41" },
  { label: "Violet", accent: "#8B5CF6", light: "#A78BFA", dark: "#6D28D9" },
];

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>("leads");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [team, setTeam] = useState<Member[]>([]);
  const [theme, setTheme] = useState<Theme>({ accent: "#2EC4B0", accentLight: "#5AD6C5", accentDark: "#0F6B63" });

  // blog editor state
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  // team editor state
  const [editingMember, setEditingMember] = useState<Member | null>(null);

  const [msg, setMsg] = useState<{ t: "ok" | "err"; text: string } | null>(null);

  const notify = (t: "ok" | "err", text: string) => {
    setMsg({ t, text });
    setTimeout(() => setMsg(null), 3500);
  };

  const loadAll = useCallback(async () => {
    const [le, bl, te, th] = await Promise.all([
      fetch("/api/admin/leads").then((r) => (r.ok ? r.json() : null)),
      fetch("/api/admin/blogs").then((r) => (r.ok ? r.json() : null)),
      fetch("/api/admin/team").then((r) => (r.ok ? r.json() : null)),
      fetch("/api/admin/theme").then((r) => (r.ok ? r.json() : null)),
    ]);
    if (le) setLeads(le.leads);
    if (bl) setBlogs(bl.blogs);
    if (te) setTeam(te.team);
    if (th) setTheme({ ...theme, ...th.theme });
  }, [theme]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/me");
        if (res.ok) {
          setAuthed(true);
          await loadAll();
        } else {
          setAuthed(false);
          router.replace("/admin/login");
        }
      } catch {
        router.replace("/admin/login");
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  /* ----- Leads ----- */
  async function setLeadStatus(id: string, status: Lead["status"]) {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status } : l)));
    notify("ok", "Lead status updated");
  }
  async function deleteLead(id: string) {
    await fetch("/api/admin/leads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setLeads((ls) => ls.filter((l) => l.id !== id));
    notify("ok", "Lead deleted");
  }

  /* ----- Blogs ----- */
  async function saveBlog() {
    if (!editingBlog) return;
    if (!editingBlog.title.trim()) return notify("err", "Title is required");
    const res = await fetch("/api/admin/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingBlog),
    });
    const data = await res.json();
    if (res.ok) {
      setBlogs((bs) => {
        const idx = bs.findIndex((b) => b.id === data.post.id);
        if (idx >= 0) return bs.map((b) => (b.id === data.post.id ? data.post : b));
        return [data.post, ...bs];
      });
      setEditingBlog(null);
      notify("ok", "Blog saved");
    } else {
      notify("err", data.error || "Failed to save blog");
    }
  }
  async function deleteBlog(id: string) {
    await fetch("/api/admin/blogs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setBlogs((bs) => bs.filter((b) => b.id !== id));
    notify("ok", "Blog deleted");
  }

  /* ----- Team ----- */
  async function saveMember() {
    if (!editingMember) return;
    if (!editingMember.name.trim() || !editingMember.role.trim()) return notify("err", "Name and role are required");
    const res = await fetch("/api/admin/team", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingMember),
    });
    const data = await res.json();
    if (res.ok) {
      setTeam((ts) => {
        const idx = ts.findIndex((m) => m.id === data.member.id);
        if (idx >= 0) return ts.map((m) => (m.id === data.member.id ? data.member : m));
        return [data.member, ...ts];
      });
      setEditingMember(null);
      notify("ok", "Team member saved");
    } else {
      notify("err", data.error || "Failed to save member");
    }
  }
  async function deleteMember(id: string) {
    await fetch("/api/admin/team", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setTeam((ts) => ts.filter((m) => m.id !== id));
    notify("ok", "Team member deleted");
  }

  /* ----- Theme ----- */
  async function applyTheme(t: Theme) {
    setTheme(t);
    const res = await fetch("/api/admin/theme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t),
    });
    if (res.ok) notify("ok", "Color saved. Refresh public site to see it.");
    else notify("err", "Failed to save color");
  }

  if (loading) {
    return <div className="admin-wrap" style={{ textAlign: "center", paddingTop: 120 }}>Loading…</div>;
  }
  if (!authed) return null;

  return (
    <div className="admin-wrap">
      <div className="admin-top">
        <div className="admin-logo"><span className="dot"></span>Revenue Orbit <small>ADMIN</small></div>
        <div className="admin-user">
          <span className="muted" style={{ fontSize: 13 }}>Signed in as {process.env.NEXT_PUBLIC_ADMIN_HINT || "admin"}</span>
          <button className="btn" onClick={logout}>Sign out</button>
        </div>
      </div>

      <div className="tabs">
        {(["leads", "blogs", "team", "settings"] as Tab[]).map((t) => (
          <button key={t} className={`tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {msg && <div className={`msg ${msg.t}`} style={{ marginBottom: 16 }}>{msg.text}</div>}

      {/* ----- LEADS ----- */}
      {tab === "leads" && (
        <>
          <div className="row" style={{ marginBottom: 16 }}>
            <div className="stat"><div className="n">{leads.length}</div><div className="l">Total leads</div></div>
            <div className="stat"><div className="n">{leads.filter((l) => l.status === "new").length}</div><div className="l">New</div></div>
            <div className="stat"><div className="n">{leads.filter((l) => l.status === "qualified").length}</div><div className="l">Qualified</div></div>
            <div className="stat"><div className="n">{leads.filter((l) => l.status === "closed").length}</div><div className="l">Closed</div></div>
          </div>
          {leads.length === 0 ? (
            <div className="card muted">No leads yet. Submissions from the contact form appear here.</div>
          ) : (
            <div className="card" style={{ overflowX: "auto" }}>
              <table>
                <thead>
                  <tr><th>Name</th><th>Contact</th><th>Service</th><th>Message</th><th>Status</th><th>When</th><th></th></tr>
                </thead>
                <tbody>
                  {leads.map((l) => (
                    <tr key={l.id}>
                      <td><strong>{l.name}</strong>{l.company && <div className="muted" style={{ fontSize: 12 }}>{l.company}</div>}</td>
                      <td>{l.email}<div className="muted" style={{ fontSize: 12 }}>{l.phone || "—"}</div></td>
                      <td>{l.service}</td>
                      <td style={{ maxWidth: 260 }}><span className="muted">{l.message}</span></td>
                      <td>
                        <select value={l.status} onChange={(e) => setLeadStatus(l.id, e.target.value as Lead["status"])} style={{ background: "var(--admin-bg2)", border: "1px solid var(--admin-border)", color: "var(--admin-text)", borderRadius: 8, padding: "5px 8px", fontSize: 12 }}>
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td className="muted" style={{ fontSize: 12 }}>{new Date(l.createdAt).toLocaleString()}</td>
                      <td><button className="btn btn-ghost btn-danger" onClick={() => deleteLead(l.id)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* ----- BLOGS ----- */}
      {tab === "blogs" && (
        <>
          <div className="card">
            {!editingBlog ? (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <h3 style={{ margin: 0 }}>Blog posts ({blogs.length})</h3>
                  <button className="btn btn-primary" onClick={() => setEditingBlog(emptyBlog())}>+ New post</button>
                </div>
                {blogs.length === 0 && <p className="muted">No posts yet.</p>}
                {blogs.map((b) => (
                  <div key={b.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--admin-border)", padding: "10px 0" }}>
                    <div>
                      <strong>{b.title}</strong>
                      <div className="muted" style={{ fontSize: 12 }}>{b.category} · /blog/{b.slug} · {b.readTime}</div>
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button className="btn" onClick={() => setEditingBlog(b)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => deleteBlog(b.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div>
                <h3>{editingBlog.id ? "Edit post" : "New post"}</h3>
                <div className="field-row">
                  <div className="field"><label>Title</label><input value={editingBlog.title} onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })} /></div>
                  <div className="field"><label>Slug</label><input value={editingBlog.slug} onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })} /></div>
                </div>
                <div className="field-row">
                  <div className="field"><label>Category</label><input value={editingBlog.category} onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })} /></div>
                  <div className="field"><label>Read time</label><input value={editingBlog.readTime} placeholder="auto" onChange={(e) => setEditingBlog({ ...editingBlog, readTime: e.target.value })} /></div>
                </div>
                <div className="field"><label>Excerpt</label><textarea value={editingBlog.excerpt} onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })} style={{ minHeight: 60 }} /></div>
                <div className="field"><label>Body (markdown)</label><textarea value={editingBlog.body} onChange={(e) => setEditingBlog({ ...editingBlog, body: e.target.value })} /></div>
                <div className="row">
                  <button className="btn btn-primary" onClick={saveBlog}>Save post</button>
                  <button className="btn" onClick={() => setEditingBlog(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* ----- TEAM ----- */}
      {tab === "team" && (
        <>
          <div className="card">
            {!editingMember ? (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <h3 style={{ margin: 0 }}>Team members ({team.length})</h3>
                  <button className="btn btn-primary" onClick={() => setEditingMember(emptyMember())}>+ Add member</button>
                </div>
                {team.length === 0 && <p className="muted">No team members yet.</p>}
                {team.map((m) => (
                  <div key={m.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--admin-border)", padding: "10px 0" }}>
                    <div>
                      <strong>{m.name}</strong>
                      <div className="muted" style={{ fontSize: 12 }}>{m.role}{m.email && ` · ${m.email}`}</div>
                      {m.bio && <div className="muted" style={{ fontSize: 12 }}>{m.bio}</div>}
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button className="btn" onClick={() => setEditingMember(m)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => deleteMember(m.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div>
                <h3>{editingMember.id ? "Edit member" : "Add member"}</h3>
                <div className="field-row">
                  <div className="field"><label>Name</label><input value={editingMember.name} onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })} /></div>
                  <div className="field"><label>Role</label><input value={editingMember.role} onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })} /></div>
                </div>
                <div className="field"><label>Email</label><input value={editingMember.email} onChange={(e) => setEditingMember({ ...editingMember, email: e.target.value })} /></div>
                <div className="field"><label>Bio</label><textarea value={editingMember.bio} onChange={(e) => setEditingMember({ ...editingMember, bio: e.target.value })} style={{ minHeight: 80 }} /></div>
                <div className="row">
                  <button className="btn btn-primary" onClick={saveMember}>Save member</button>
                  <button className="btn" onClick={() => setEditingMember(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* ----- SETTINGS / THEME ----- */}
      {tab === "settings" && (
        <>
          <div className="card">
            <h3>Site accent color</h3>
            <p className="muted" style={{ fontSize: 13, marginBottom: 14 }}>
              Change the brand color across the website (currently sea-green). Pick a preset or choose custom colors.
            </p>
            <div className="swatch-row" style={{ marginBottom: 18 }}>
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  className={`swatch ${theme.accent.toLowerCase() === p.accent.toLowerCase() ? "active" : ""}`}
                  style={{ background: p.accent }}
                  title={p.label}
                  onClick={() => applyTheme({ accent: p.accent, accentLight: p.light, accentDark: p.dark })}
                />
              ))}
            </div>
            <div className="field-row">
              <div className="field">
                <label>Accent</label>
                <div className="color-input">
                  <input type="color" value={theme.accent} onChange={(e) => setTheme({ ...theme, accent: e.target.value })} />
                  <input value={theme.accent} onChange={(e) => setTheme({ ...theme, accent: e.target.value })} />
                </div>
              </div>
              <div className="field">
                <label>Accent light</label>
                <div className="color-input">
                  <input type="color" value={theme.accentLight} onChange={(e) => setTheme({ ...theme, accentLight: e.target.value })} />
                  <input value={theme.accentLight} onChange={(e) => setTheme({ ...theme, accentLight: e.target.value })} />
                </div>
              </div>
              <div className="field">
                <label>Accent dark</label>
                <div className="color-input">
                  <input type="color" value={theme.accentDark} onChange={(e) => setTheme({ ...theme, accentDark: e.target.value })} />
                  <input value={theme.accentDark} onChange={(e) => setTheme({ ...theme, accentDark: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="row">
              <button className="btn btn-primary" onClick={() => applyTheme(theme)}>Save colors</button>
              <span className="muted" style={{ alignSelf: "center", fontSize: 12 }}>Affects the public site accent color.</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
