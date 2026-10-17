/* ================================
EDUCATION SECTION
================================ */

.education {
position: relative;
}

.education__header {
margin-bottom: 42px;
}

.education__list {
display: flex;
flex-direction: column;
gap: 18px;
}

/* Education card */
.education__card {
position: relative;
display: grid;
grid-template-columns: 54px minmax(0, 1fr) auto;
align-items: center;
gap: 22px;
padding: 26px 28px;
border-radius: 18px;
overflow: hidden;
transition:
transform 0.3s ease,
border-color 0.3s ease,
box-shadow 0.3s ease;
}

/* Subtle burgundy accent */
.education__card::before {
content: '';
position: absolute;
top: 0;
left: 0;
width: 3px;
height: 100%;
background: linear-gradient(
180deg,
var(--accent-primary),
var(--accent-secondary)
);
opacity: 0;
transition: opacity 0.3s ease;
}

.education__card:hover {
transform: translateY(-4px);
border-color: rgba(227, 75, 121, 0.3);
box-shadow: 0 16px 38px rgba(8, 3, 9, 0.24);
}

.education__card:hover::before {
opacity: 1;
}

/* Highlight current/highest education */
.education__card--primary {
background: linear-gradient(
120deg,
rgba(227, 75, 121, 0.09),
rgba(182, 107, 255, 0.045),
rgba(255, 240, 246, 0.025)
);
border-color: rgba(227, 75, 121, 0.22);
}

.education__card--primary::before {
opacity: 1;
}

/* Graduation icon */
.education__icon {
display: flex;
align-items: center;
justify-content: center;
width: 54px;
height: 54px;
flex-shrink: 0;
color: var(--accent-tertiary);
background: rgba(227, 75, 121, 0.1);
border: 1px solid rgba(227, 75, 121, 0.2);
border-radius: 15px;
transition:
transform 0.3s ease,
background 0.3s ease,
box-shadow 0.3s ease;
}

.education__card:hover .education__icon {
transform: translateY(-2px);
background: rgba(227, 75, 121, 0.16);
box-shadow: 0 0 22px rgba(227, 75, 121, 0.12);
}

/* Degree and institution */
.education__info {
min-width: 0;
}

.education__degree {
margin: 0 0 8px;
color: var(--text-primary);
font-family: var(--font-heading);
font-size: 17px;
font-weight: 600;
line-height: 1.5;
}

.education__institution {
display: block;
color: var(--text-secondary);
font-size: 13px;
line-height: 1.7;
overflow-wrap: anywhere;
}

/* Duration and academic score */
.education__meta {
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 10px;
text-align: right;
}

.education__duration {
color: var(--accent-tertiary);
font-size: 12px;
font-weight: 600;
letter-spacing: 0.04em;
white-space: nowrap;
}

.education__score {
display: inline-flex;
align-items: center;
justify-content: center;
padding: 7px 12px;
border-radius: 8px;
color: var(--text-primary);
background: rgba(227, 75, 121, 0.09);
border: 1px solid rgba(227, 75, 121, 0.2);
font-size: 12px;
font-weight: 600;
white-space: nowrap;
}

/* Tablet */
@media (max-width: 768px) {
.education__card {
grid-template-columns: 46px minmax(0, 1fr);
gap: 16px;
padding: 22px;
}

.education__icon {
width: 46px;
height: 46px;
border-radius: 13px;
}

.education__meta {
grid-column: 2;
align-items: flex-start;
flex-direction: row;
flex-wrap: wrap;
gap: 10px;
text-align: left;
}

.education__degree {
font-size: 16px;
}
}

/* Mobile */
@media (max-width: 480px) {
.education__header {
margin-bottom: 30px;
}

.education__list {
gap: 14px;
}

.education__card {
gap: 13px;
padding: 18px 15px;
border-radius: 14px;
}

.education__icon {
width: 42px;
height: 42px;
}

.education__degree {
font-size: 15px;
margin-bottom: 6px;
}

.education__institution {
font-size: 12px;
}

.education__meta {
gap: 8px;
}

.education__duration,
.education__score {
font-size: 11px;
}

.education__score {
padding: 6px 9px;
white-space: normal;
}
}

/* Reduced motion accessibility */
@media (prefers-reduced-motion: reduce) {
.education__card,
.education__icon,
.education__card::before {
transition: none;
}
}
