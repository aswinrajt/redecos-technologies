import { useState } from 'react';
import { Maximize2, X, Check, Eye } from 'lucide-react';

export interface CadModelData {
  id: string;
  image: string;
  badge: string;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  projectId: string;
  features: string[];
  specs: { label: string; value: string }[];
  width: number;
  height: number;
}

interface CadModelCardProps {
  model: CadModelData;
  className?: string;
  onInspect?: (model: CadModelData) => void;
}

export function CadModelCard({ model, className = '', onInspect }: CadModelCardProps) {
  return (
    <div
      className={`cad-model-card group ${className}`}
      onClick={() => onInspect?.(model)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onInspect?.(model);
        }
      }}
      aria-label={`Inspect ${model.title} 3D model`}
    >
      {/* Blueprint Grid Background Pattern */}
      <div className="cad-card-grid-bg" aria-hidden="true" />

      {/* Radial Engineering Lighting Accent */}
      <div className="cad-card-glow" aria-hidden="true" />

      {/* Corner Technical Crosshair Ticks */}
      <span className="cad-corner-tick cad-corner-tl" aria-hidden="true">+</span>
      <span className="cad-corner-tick cad-corner-tr" aria-hidden="true">+</span>
      <span className="cad-corner-tick cad-corner-bl" aria-hidden="true">+</span>
      <span className="cad-corner-tick cad-corner-br" aria-hidden="true">+</span>

      {/* HUD Telemetry Top Bar */}
      <div className="cad-card-hud-top">
        <div className="cad-hud-badge">
          <span className="cad-hud-pulse" aria-hidden="true" />
          <span className="cad-hud-badge-text">{model.badge}</span>
        </div>
        <div className="cad-hud-meta">
          <span className="cad-hud-tag">{model.tagline}</span>
        </div>
      </div>

      {/* 3D CAD Stage / Viewport */}
      <div className="cad-stage-viewport">
        {/* Soft grounding shadow under 3D model */}
        <div className="cad-model-shadow" aria-hidden="true" />

        <img
          src={model.image}
          alt={model.title}
          width={model.width}
          height={model.height}
          loading="lazy"
          className="cad-stage-image"
        />

        {/* Floating Hover Action Pill */}
        <div className="cad-inspect-pill" aria-hidden="true">
          <Maximize2 size={13} />
          <span>Click to Inspect CAD Model</span>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="cad-card-info">
        <div className="cad-card-header-row">
          <div>
            <span className="cad-project-code">{model.projectId}</span>
            <h3 className="cad-card-title">{model.title}</h3>
            {/* <p className="cad-card-subtitle">{model.subtitle}</p> */}
          </div>
          <button
            type="button"
            className="cad-inspect-btn"
            onClick={(e) => {
              e.stopPropagation();
              onInspect?.(model);
            }}
            aria-label={`Open detailed view for ${model.title}`}
          >
            <Eye size={15} />
            <span>Details</span>
          </button>
        </div>

        {/* Feature Tags List */}
        <div className="cad-feature-tags">
          {model.features.slice(0, 3).map((feat) => (
            <span key={feat} className="cad-tag-chip">
              <Check size={11} className="text-primary mr-1 shrink-0" />
              {feat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CadInspectModalProps {
  model: CadModelData | null;
  onClose: () => void;
}

export function CadInspectModal({ model, onClose }: CadInspectModalProps) {
  if (!model) return null;

  return (
    <div
      className="cad-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cad-modal-title"
      onClick={onClose}
    >
      <div
        className="cad-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="cad-modal-header">
          <div>
            <div className="cad-hud-badge inline-flex mb-1">
              <span className="cad-hud-pulse" aria-hidden="true" />
              <span className="cad-hud-badge-text">{model.badge}</span>
            </div>
            <h2 id="cad-modal-title" className="cad-modal-title">
              {model.title}
            </h2>
            {/* <p className="cad-modal-subtitle">{model.subtitle}</p> */}
          </div>
          <button
            type="button"
            className="cad-modal-close"
            onClick={onClose}
            aria-label="Close CAD model view"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body: CAD Image Viewport */}
        <div className="cad-modal-stage">
          <div className="cad-card-grid-bg" aria-hidden="true" />
          <div className="cad-card-glow" aria-hidden="true" />
          <div className="cad-model-shadow" aria-hidden="true" />

          <img
            src={model.image}
            alt={model.title}
            className="cad-modal-image"
          />
        </div>

        {/* Modal Engineering Specs & Callouts */}
        <div className="cad-modal-details">
          <p className="cad-modal-description">{model.description}</p>

          <div className="cad-modal-specs-grid">
            {model.specs.map((s) => (
              <div key={s.label} className="cad-spec-box">
                <span className="cad-spec-label">{s.label}</span>
                <strong className="cad-spec-value">{s.value}</strong>
              </div>
            ))}
          </div>

          <div className="cad-modal-features">
            <h4 className="cad-features-heading">REDECOS Tooling &amp; Design Standards Implemented:</h4>
            <div className="cad-modal-feature-list">
              {model.features.map((f) => (
                <div key={f} className="cad-feature-item">
                  <Check size={14} className="text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
