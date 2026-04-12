# Anthropic Learn Icon Style Guide

## Overview

This document analyzes the visual style of 29 SVG icons extracted from Anthropic's Learn pages, and provides detailed AI image generation prompts for creating similar illustrations.

---

## Style Analysis

### 1. Technical Characteristics

| Property | Value |
|----------|-------|
| ViewBox | 500x500 or 1000x1000 |
| Fill Mode | `fill="none"` on root SVG |
| Strokes | None (fill-based only) |
| Gradients | None |
| Patterns | None |
| Element Type | Complex `<path>` elements |

### 2. Color Palette

**Primary (2 colors)**

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Ink | `#141413` | rgb(20, 20, 19) | Main shapes, outlines, fills |
| Oat | `#E3DACC` | rgb(227, 218, 204) | Background shapes, accents |

**Accent (2 colors)**

| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#FAF9F5` | Highlights, details |
| Charcoal | `#231F20` | Deep accents |

**Style:** Minimal 2-color palette with occasional cream accents. Silhouette-style with contrast.

### 3. Visual Style

#### Silhouette Illustration
- Complex path-based shapes (not strokes)
- Silhouette aesthetic with internal cutout details
- No stroke-based line art
- No gradient fills

#### Organic Geometry
- Hand-drawn organic feel with precise vector execution
- Organic curves combined with geometric precision
- Complex, intricate details (not minimal/flat)
- Layered shapes creating depth through overlapping

#### Subject Matter Themes

| Theme | Description | Examples |
|-------|-------------|----------|
| **Human + Tech** | Hands interacting with technology | AI hand, cursor nodes, hand arranging geometric shapes |
| **Nature + Growth** | Organic forms suggesting growth | Seedling, flower petals, sun with rays |
| **Knowledge** | Tools of learning and discovery | Document, magnifying glass, lightbulb, quill pen |
| **Abstract Concepts** | Visualizing ideas | Puzzle pieces, grid patterns, connected nodes |
| **Communication** | Dialogue and exchange | Speech bubbles |

#### Key Motifs

1. **The Hand** - Represents human agency, craftsmanship, learning (6 icons)
2. **Connected Nodes** - Represents AI, networks, relationships
3. **Organic Forms** - Seedlings, flowers, sun rays - growth and energy
4. **Geometric Shapes** - Squares, triangles, circles - structure and logic
5. **Documents/Books** - Knowledge and learning

### 4. Composition Patterns

- **Central focal point** with elements radiating outward
- **Layered complexity** - multiple overlapping shapes
- **Asymmetric balance** - organic, not grid-based
- **Detail density** - rich, intricate illustrations (not simple icons)
- **White/cream space** used as negative space within shapes

### 5. Feeling & Tone

| Attribute | Description |
|-----------|-------------|
| Warm | Oat/cream tones soften the black |
| Human | Hand motifs add personhood |
| Organic | Curves and natural forms |
| Intelligent | Geometric precision |
| Approachable | Not cold or sterile |
| Craft-forward | Shows attention to detail |

---

## AI Image Generation Prompts

### Prompt 1: Hand with Network Nodes

```
Create a minimalist SVG-style illustration of a human hand with fingertips 
touching connected network nodes. The hand is rendered in silhouette style 
using solid fills only (no strokes). Main hand shape in near-black ink 
color (#141413), nodes in a contrasting oat/cream color (#E3DACC). 
Complex path geometry with organic curves for the hand and geometric 
circles for the nodes. Central composition, 500x500 viewBox, no gradients, 
no patterns, fill-based only. The style should feel warm, human, and 
intelligent - representing AI and human collaboration.
```

### Prompt 2: Seedling with Geometric Elements

```
Design an SVG illustration of a young plant seedling emerging from soil, 
with geometric shapes (triangles, circles, squares) floating around it. 
Silhouette style with solid fills only - no strokes, no gradients. 
The seedling stem and leaves in near-black (#141413), the soil and 
background shapes in warm oat color (#E3DACC). Complex organic curves 
for the plant combined with precise geometric forms. Concept: growth, 
learning, potential. 500x500 viewBox, fill-based vector illustration.
```

### Prompt 3: Puzzle Piece with Organic Edges

```
Create an abstract puzzle piece illustration where the puzzle piece has 
both geometric edges and organic flowing curves. The piece is filled 
with a complex geometric pattern inside. Style: silhouette, solid fills, 
no strokes or gradients. Primary color #141413 on #E3DACC background. 
Concept: complex problem-solving, fitting pieces together. 
Intricate detailed paths, 500x500 viewBox.
```

### Prompt 4: Lightbulb with Organic Filament

```
Design a lightbulb illustration where the bulb contains not a traditional 
filament but an abstract organic form (perhaps a stylized flower or star). 
Silhouette style, fill-based only. The bulb glass in cream (#FAF9F5) 
with the internal organic shape in ink (#141413). Hand-drawn organic feel 
with precise vector execution. Concept: ideas, inspiration, illumination. 
500x500 viewBox, SVG format.
```

### Prompt 5: Two Hands Holding Geometric Shape

```
Create an illustration of two hands approaching each other from opposite 
sides, each holding one end of a floating geometric shape (like a cylinder 
or abstract object). Silhouette style, solid fills only, no strokes or 
gradients. Hands in near-black (#141413), the held object and connecting 
elements in oat (#E3DACC). Organic hand shapes with geometric precision 
in the object. Concept: collaboration, building together. 
500x500 viewBox, detailed paths.
```

### Prompt 6: Document with Connected Nodes

```
Design a document or scroll illustration with small connected dots/nodes 
on its corners and edges, suggesting digital connectivity. Silhouette 
style, fill-based only. Document shape in cream (#E3DACC), node dots and 
connections in near-black (#141413). Classical scroll/form with modern 
tech elements. Concept: knowledge + AI, traditional learning enhanced 
by technology. 500x500 viewBox.
```

### Prompt 7: Sun with Organic Rays

```
Create a sun illustration where instead of traditional pointed rays, 
the sun has organic flowing shapes radiating outward (petals, leaves, 
or abstract organic forms). Silhouette style, solid fills only. 
Central sun circle in oat (#E3DACC), radiating organic shapes in 
near-black (#141413). Concept: energy, growth, illumination. 
500x500 viewBox, intricate detailed paths.
```

### Prompt 8: Abstract Network Graph

```
Design an abstract network visualization with interconnected nodes and 
edges, but where the nodes are organic blob shapes and the connections 
are flowing curves rather than straight lines. Silhouette style, 
fill-based only (no strokes). Nodes in near-black (#141413), background 
connections suggested in oat (#E3DACC). Concept: AI neural networks, 
emergent behavior, connected intelligence. 500x500 viewBox.
```

---

## Generic Style Prompt (Reusable)

### Base Style Prompt for Anthropic-style Illustrations

```
Create a vector SVG illustration in the Anthropic design style characterized by:

TECHNICAL:
- Silhouette illustration style
- Solid fills only, no strokes
- No gradients, no patterns
- Complex path-based geometry
- 500x500 or 1000x1000 viewBox

COLORS:
- Primary: near-black ink (#141413)
- Secondary: warm oat/cream (#E3DACC)
- Accent: off-white (#FAF9F5)

SUBJECT:
- [INSERT YOUR SUBJECT: hand, plant, geometric shapes, document, etc.]
- Human + technology themes encouraged
- Organic forms combined with geometric precision
- Concept-driven (growth, learning, collaboration, intelligence)

COMPOSITION:
- Central focal point
- Layered complexity with overlapping shapes
- Rich detail, intricate paths
- Asymmetric balance

FEELING:
- Warm, human, approachable
- Intelligent but not cold
- Organic but precise
- Craft-forward with attention to detail

Format: Clean SVG code with fill="none" on root element, paths with 
explicit fill colors. No CSS, no external references.
```

---

## Comparison: Anthropic vs. Common Icon Styles

| Aspect | Anthropic Style | Flat Icons | Line Icons | Material Icons |
|--------|-----------------|------------|------------|---------------|
| Fill vs Stroke | Fill only | Fill + subtle stroke | Stroke only | Fill + stroke |
| Complexity | High/Intricate | Medium | Simple | Medium |
| Colors | 2-3 colors | Gradients possible | 1-2 colors | Single color |
| Organic Feel | Yes | No | No | No |
| Geometric | Hybrid | No | No | Yes |
| Detail Level | High | Medium | Low | Medium |
| Silhouette | Yes | No | No | No |

---

## Summary

**Anthropic icon style = Silhouette + Organic Geometry + Warm Minimalism**

The icons combine:
1. **Silhouette aesthetic** - solid fills, no strokes
2. **Organic geometry** - hand-drawn feel with vector precision
3. **Warm minimalism** - 2-color palette (ink + oat)
4. **Human presence** - hands, nature, person-centric themes
5. **Concept depth** - representing abstract ideas visually

This creates illustrations that feel:
- Human and approachable
- Intelligent and precise
- Warm but sophisticated
- Detailed but not cluttered

---

*Generated from analysis of 29 SVG icons from anthropic.com/learn*
