"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AnimatedCounter } from "@/components/animated-counter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { annualHighlights, beneficiarySplit, impactMetrics, portfolioData, regionalCoverage } from "@/data/impact";

const colors = ["#124734", "#1f7a52", "#4d7893", "#c9874c"];

export function ImpactDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {impactMetrics.map((metric) => (
          <Card key={metric.label} className="border-vahatra-forest/10 bg-white shadow-soft">
            <CardContent className="p-5">
              <p className="text-3xl font-semibold text-vahatra-forest">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <h3 className="mt-3 font-semibold">{metric.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{metric.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
        <Card className="border-vahatra-forest/10 bg-white shadow-soft">
          <CardHeader>
            <CardTitle>Progression des programmes</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioData} margin={{ left: -18, right: 12, top: 10 }}>
                  <defs>
                    <linearGradient id="microfinance" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#124734" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#124734" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="agriculture" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#1f7a52" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#1f7a52" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#e4dccd" strokeDasharray="3 3" />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="microfinance" stroke="#124734" fill="url(#microfinance)" strokeWidth={2} />
                  <Area type="monotone" dataKey="agriculture" stroke="#1f7a52" fill="url(#agriculture)" strokeWidth={2} />
                  <Area type="monotone" dataKey="sante" stroke="#4d7893" fill="#4d789326" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full rounded-md bg-vahatra-cream" />
            )}
          </CardContent>
        </Card>

        <Card className="border-vahatra-forest/10 bg-white shadow-soft">
          <CardHeader>
            <CardTitle>Répartition des bénéficiaires</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={beneficiarySplit}
                    cx="50%"
                    cy="50%"
                    innerRadius={58}
                    outerRadius={98}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {beneficiarySplit.map((entry, index) => (
                      <Cell key={entry.name} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full rounded-md bg-vahatra-cream" />
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-vahatra-forest/10 bg-white shadow-soft">
          <CardHeader>
            <CardTitle>Points saillants</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3">
              {annualHighlights.map((highlight) => (
                <li key={highlight} className="rounded-md bg-vahatra-cream px-4 py-3 text-sm leading-6">
                  {highlight}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-vahatra-forest/10 bg-white shadow-soft">
          <CardHeader>
            <CardTitle>Couverture territoriale</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalCoverage} margin={{ left: -18, right: 12, top: 10 }}>
                  <CartesianGrid stroke="#e4dccd" strokeDasharray="3 3" />
                  <XAxis dataKey="region" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="families" fill="#124734" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full rounded-md bg-vahatra-cream" />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
