"""
MEOK Faith Calibration Module
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Multi-tradition care architecture. Routes responses through tradition-specific
care frameworks calibrated to the user's declared faith tradition, denomination,
and observance level.

Design principles (from tradition-authority consensus):
  - TOOL NOT TEACHER: AI is a reflection companion and resource navigator,
    never a spiritual authority. Always direct to qualified human leaders.
  - SOURCE TRANSPARENCY: Every tradition-specific response cites textual basis.
  - PROGRESSIVE DISCLOSURE: Tradition is refined over time, never demanded upfront.
  - INTRA-FAITH AWARENESS: Islam ≠ Sunni ≠ Hanafi. Judaism ≠ Orthodox. Always ask.
  - TRAUMA-INFORMED: No shame language. No reconversion attempts. Clear human exits.
  - TOOL NOT TEACHER: This bears repeating. Never issue rulings. Never declare truth.

Architecture:
  FaithProfile: User's declared tradition state
  TraditionFramework: Care, ethics, and guidance patterns for each tradition
  FaithCalibrationEngine: Routes + calibrates responses per tradition
  FaithAwareSystemPrompt: Builds tradition-calibrated system prompts
"""

from __future__ import annotations

import logging
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)


# ── Tradition Taxonomy ────────────────────────────────────────────────────────

class MajorTradition(str, Enum):
    ISLAM         = "islam"
    CHRISTIANITY  = "christianity"
    HINDUISM      = "hinduism"
    JUDAISM       = "judaism"
    BUDDHISM      = "buddhism"
    SIKHISM       = "sikhism"
    INDIGENOUS    = "indigenous"
    SPIRITUAL     = "spiritual_not_religious"
    SECULAR       = "secular_humanist"
    NONE          = "none_or_exploring"
    # Extended traditions (from MEOK's 47-tradition architecture)
    TAOISM        = "taoism"
    ZOROASTRIANISM = "zoroastrianism"
    JAINISM       = "jainism"
    BAHAI         = "bahai"
    CONFUCIANISM  = "confucianism"
    SHINTO        = "shinto"
    UNITARIAN     = "unitarian_universalist"


# Denominational sub-traditions — progressive disclosure, second tier
DENOMINATION_MAP: Dict[str, List[str]] = {
    "islam": [
        "sunni_hanafi", "sunni_maliki", "sunni_shafii", "sunni_hanbali",
        "shia_twelver", "shia_ismaili", "sufi", "ibadi", "prefer_not_to_specify"
    ],
    "christianity": [
        "catholic", "orthodox_eastern", "orthodox_greek", "protestant_evangelical",
        "protestant_mainline", "anglican", "baptist", "methodist", "pentecostal",
        "reformed_calvinist", "lutheran", "quaker", "prefer_not_to_specify"
    ],
    "hinduism": [
        "vaishnava", "shaiva", "shakta", "smarta", "advaita_vedanta",
        "iskcon", "prefer_not_to_specify"
    ],
    "judaism": [
        "orthodox", "ultra_orthodox", "conservative", "reform",
        "reconstructionist", "renewal", "sephardic", "prefer_not_to_specify"
    ],
    "buddhism": [
        "theravada", "mahayana_zen", "mahayana_pure_land", "tibetan_vajrayana",
        "secular_buddhism", "prefer_not_to_specify"
    ],
    "sikhism": ["gursikh", "amritdhari", "keshdhari", "prefer_not_to_specify"],
    "indigenous": ["prefer_not_to_specify"],  # Cultural specificity handled by user
    "spiritual_not_religious": ["eclectic", "hermetic", "new_age", "shamanic", "prefer_not_to_specify"],
    "secular_humanist": ["prefer_not_to_specify"],
    "none_or_exploring": ["prefer_not_to_specify"],
}

OBSERVANCE_LEVELS = ["minimal", "moderate", "observant", "strictly_observant", "prefer_not_to_say"]


# ── Faith Profile ─────────────────────────────────────────────────────────────

@dataclass
class FaithProfile:
    """
    User's declared spiritual orientation. Populated progressively via
    onboarding and refinement interactions — never forced upfront.
    """
    tradition: str = MajorTradition.NONE
    denomination: Optional[str] = None
    observance_level: str = "prefer_not_to_say"
    # Languages / cultural context
    cultural_context: Optional[str] = None   # e.g. "south_asian", "arab", "western"
    # Safety flags
    has_religious_trauma: bool = False
    is_deconstructing: bool = False
    # Advisory state
    consented_to_faith_calibration: bool = False
    # Timestamps
    declared_at: Optional[str] = None
    last_updated: Optional[str] = None

    def is_calibrated(self) -> bool:
        """Returns True if enough is known to calibrate responses."""
        return (
            self.tradition != MajorTradition.NONE
            and self.consented_to_faith_calibration
        )

    def to_dict(self) -> Dict[str, Any]:
        return {
            "tradition": self.tradition,
            "denomination": self.denomination,
            "observance_level": self.observance_level,
            "cultural_context": self.cultural_context,
            "has_religious_trauma": self.has_religious_trauma,
            "is_deconstructing": self.is_deconstructing,
            "consented_to_faith_calibration": self.consented_to_faith_calibration,
        }

    @classmethod
    def from_dict(cls, d: Dict[str, Any]) -> "FaithProfile":
        return cls(**{k: v for k, v in d.items() if k in cls.__dataclass_fields__})


# ── Tradition Frameworks ──────────────────────────────────────────────────────

@dataclass
class TraditionFramework:
    """
    Care, ethics, and guidance patterns for a single tradition.
    Built from scholarly sources — always cites originals.
    """
    tradition: str
    display_name: str

    # Core care concept in this tradition (how suffering/growth are framed)
    care_concept: str
    care_concept_source: str     # Textual source for care_concept

    # How grief / difficulty should be approached
    grief_framework: str
    grief_source: str

    # How community / relationship is framed
    community_frame: str

    # Ethical decision framework
    ethics_approach: str
    ethics_source: str

    # What NOT to say / shame vectors to avoid
    shame_vectors_to_avoid: List[str] = field(default_factory=list)

    # Key concepts the user may use (vocabulary recognition)
    key_concepts: List[str] = field(default_factory=list)

    # Sources MEOK can cite for this tradition
    primary_sources: List[str] = field(default_factory=list)

    # Human expert types to direct user to
    human_expert_direction: str = "a qualified religious leader or scholar"

    # Tool-not-teacher disclaimer for this tradition
    tool_disclaimer: str = ""


# ── Tradition Knowledge Base ──────────────────────────────────────────────────

TRADITION_FRAMEWORKS: Dict[str, TraditionFramework] = {

    MajorTradition.ISLAM: TraditionFramework(
        tradition=MajorTradition.ISLAM,
        display_name="Islam",
        care_concept="Ihsan — excellence in action toward God through creation; Tawakkul — placing trust in Allah after sincere effort",
        care_concept_source="Quran 2:286, Hadith of Gabriel (Sahih Muslim 8)",
        grief_framework="Sabr (patient perseverance) paired with Du'a (supplication). Grief has communal dimensions — the ummah carries loss together. Inna lillahi wa inna ilayhi raji'un.",
        grief_source="Quran 2:155-157; Al-Nawawi, Riyadh al-Salihin",
        community_frame="Ummah: collective obligation (fard kifaya) means community wellbeing is a shared responsibility",
        ethics_approach="Maqasid al-Shariah (purposes of Islamic law): protection of life, intellect, lineage, wealth, and religion. Ijtihad where applicable.",
        ethics_source="Al-Ghazali, Al-Mustasfa; Ibn Ashur, Maqasid al-Shariah",
        shame_vectors_to_avoid=["haram labelling without context", "assumption of low observance", "conflating culture with religion"],
        key_concepts=["tawakkul", "sabr", "du'a", "ummah", "halal", "haram", "zakat", "fitra", "ihsan", "tawbah", "barakah"],
        primary_sources=["The Quran", "Sahih al-Bukhari", "Sahih Muslim", "Riyadh al-Salihin", "Al-Ghazali's Ihya Ulum al-Din"],
        human_expert_direction="a qualified imam, mufti, or Islamic scholar from your tradition",
        tool_disclaimer="MEOK reflects on Islamic sources as a study companion only. For personal rulings (fatwas), please consult a qualified imam or mufti — AI lacks the ijtihad, taqwa, and basirah required for religious authority (per Dar al-Ifta guidance).",
    ),

    MajorTradition.CHRISTIANITY: TraditionFramework(
        tradition=MajorTradition.CHRISTIANITY,
        display_name="Christianity",
        care_concept="Agape — unconditional love as the foundational ethical principle; Kenosis — self-emptying in service of others",
        care_concept_source="1 Corinthians 13; Philippians 2:7",
        grief_framework="Lament as sacred practice (Psalms, Job). Grief acknowledged rather than suppressed. The resurrection hope frames suffering as transformed, not denied.",
        grief_source="Psalms 22, 88; Lamentations; Romans 8:18-25; Brueggemann, The Psalms and the Life of Faith",
        community_frame="The Body of Christ: interdependence, mutual care, bearing one another's burdens (Galatians 6:2)",
        ethics_approach="Love of God and neighbour (Matthew 22:37-39). Tradition varies: Natural Law (Catholic), Scripture alone (Reformed), Spirit-led discernment (Charismatic). Denominational specificity matters.",
        ethics_source="The Bible; Catholic Social Teaching; Westminster Confession; Wesley's Quadrilateral",
        shame_vectors_to_avoid=["assuming evangelical = all Christian", "guilt-based framing", "conflating political conservatism with faith"],
        key_concepts=["grace", "forgiveness", "redemption", "incarnation", "resurrection", "discipleship", "covenant", "shalom", "lament"],
        primary_sources=["The Bible (specify translation)", "Augustine, Confessions", "Thomas Aquinas, Summa Theologica", "C.S. Lewis, Mere Christianity"],
        human_expert_direction="your pastor, priest, spiritual director, or a qualified theologian from your denomination",
        tool_disclaimer="MEOK reflects on Christian sources as a study companion. For pastoral guidance and theological questions specific to your tradition, please consult your minister, priest, or spiritual director.",
    ),

    MajorTradition.HINDUISM: TraditionFramework(
        tradition=MajorTradition.HINDUISM,
        display_name="Hinduism",
        care_concept="Dharma — right action according to one's nature, station, and cosmic order; Seva — selfless service as spiritual practice",
        care_concept_source="Bhagavad Gita 3:19-20; Taittiriya Upanishad 1.11",
        grief_framework="Karma and rebirth frame loss as transition, not ending. Shraddha (memorial practice) honours the departed. Grief acknowledged through ritual.",
        grief_source="Garuda Purana; Bhagavad Gita 2:19-20; Manusmriti on shraddha",
        community_frame="Dharmic community: shared ritual, festival, and satsang (spiritual association). Family and lineage are primary containers.",
        ethics_approach="Ahimsa (non-harm), Satya (truth), Asteya (non-stealing) as universal dharmic values. School-specific ethics vary significantly.",
        ethics_source="Patanjali, Yoga Sutras; Bhagavad Gita; Manusmriti (with contemporary context)",
        shame_vectors_to_avoid=["casteism or caste assumptions", "conflating Hinduism with Indian nationalism", "treating all schools as identical"],
        key_concepts=["dharma", "karma", "moksha", "atman", "brahman", "seva", "ahimsa", "satya", "maya", "samsara", "yoga"],
        primary_sources=["Bhagavad Gita", "Upanishads", "Ramayana", "Mahabharata", "Patanjali's Yoga Sutras"],
        human_expert_direction="a qualified pandit, swami, or scholar from your specific tradition or sampradaya",
        tool_disclaimer="MEOK reflects on Hindu texts as a study companion. Hindu philosophy is vast and internally diverse — please consult a qualified pandit, swami, or teacher from your specific tradition for personal guidance.",
    ),

    MajorTradition.JUDAISM: TraditionFramework(
        tradition=MajorTradition.JUDAISM,
        display_name="Judaism",
        care_concept="Chesed (lovingkindness) and Tikkun Olam (repairing the world) as ethical imperatives; Pikuach nefesh (preservation of life) overrides almost all other obligations",
        care_concept_source="Leviticus 19:18; Talmud Bavli, Yoma 85b (pikuach nefesh); Lurianic Kabbalah (tikkun olam)",
        grief_framework="Avelut: structured mourning through shiva, shloshim, and kaddish. Grief has communal support built in — the mourner is never alone. Lament is legitimate.",
        grief_source="Talmud Bavli, Mo'ed Katan; Maimonides, Mishneh Torah, Hilkhot Avel; Siddur Kaddish",
        community_frame="Am Yisrael: covenantal community. Chevruta (learning partnership) culture emphasises mutual study and questioning as worship.",
        ethics_approach="Halakha as guiding framework, but approach varies dramatically by denomination. Talmudic reasoning: questioning, debate, and multiple valid positions are honoured.",
        ethics_source="Talmud Bavli; Maimonides, Mishneh Torah; Shulchan Aruch; contemporary responsa (Responsa literature)",
        shame_vectors_to_avoid=["treating all Jews as religiously observant", "conflating Jewish identity with Israeli politics", "assuming homogeneous practice"],
        key_concepts=["teshuvah", "tzedakah", "chesed", "tikkun olam", "Torah", "mitzvot", "shabbat", "halakha", "kavvanah", "shekhinah"],
        primary_sources=["Torah and Tanakh", "Talmud Bavli", "Siddur", "Maimonides Mishneh Torah", "Sefaria (full rabbinical library API)"],
        human_expert_direction="a rabbi from your denomination, a posek (decisor) for halakhic questions, or a qualified Jewish scholar",
        tool_disclaimer="MEOK can discuss Jewish texts and traditions as a study companion in the chevruta spirit. For personal halakhic rulings, please consult a rabbi from your denomination — AI lacks the ability to issue new halakhic rulings, which is a religious activity requiring covenant membership.",
    ),

    MajorTradition.BUDDHISM: TraditionFramework(
        tradition=MajorTradition.BUDDHISM,
        display_name="Buddhism",
        care_concept="Karuna (compassion) as impersonal, universal response to suffering; Metta (lovingkindness) as unconditioned goodwill; the Bodhisattva vow to liberate all beings",
        care_concept_source="Dhammapada; Śāntideva, Bodhicaryāvatāra; Pali Canon (Metta Sutta)",
        grief_framework="The First Noble Truth: Dukkha (suffering/unsatisfactoriness) is acknowledged as fundamental to experience, not denied. Impermanence (anicca) frames loss as natural. Grief observed without clinging.",
        grief_source="Majjhima Nikaya (Buddha on grief); Pema Chödrön, When Things Fall Apart; Thich Nhat Hanh, No Death No Fear",
        community_frame="The Sangha: one of the Three Jewels (Buddha, Dharma, Sangha). Communal practice and mutual support in awakening.",
        ethics_approach="The Eightfold Path (Right Action, Right Speech, etc.). Non-harm (ahimsa) and interdependence (pratītyasamutpāda). School-specific ethics vary.",
        ethics_source="Pali Canon; Nagarjuna, Mūlamadhyamakakārikā; Thich Nhat Hanh, Interbeing",
        shame_vectors_to_avoid=["treating Buddhism as monolithic", "secular mindfulness without Buddhist context when user expects it", "conflating meditation with Buddhism"],
        key_concepts=["dukkha", "anicca", "anatta", "nirvana", "karma", "samsara", "dharma", "sangha", "metta", "karuna", "bodhicitta", "sunyata"],
        primary_sources=["Pali Canon (SuttaCentral)", "Dhammapada", "Nagarjuna's Mulamadhyamakakarika", "Thich Nhat Hanh", "Pema Chödrön"],
        human_expert_direction="a qualified teacher, monk, or nun from your specific Buddhist tradition",
        tool_disclaimer="MEOK can discuss Buddhist teachings as a study companion. The Dharma is best transmitted through direct teacher-student relationship — please seek guidance from a qualified teacher in your tradition.",
    ),

    MajorTradition.SIKHISM: TraditionFramework(
        tradition=MajorTradition.SIKHISM,
        display_name="Sikhism",
        care_concept="Seva (selfless service) as central spiritual practice; Naam (remembrance of God) as path; Sarbat da Bhala (wellbeing of all)",
        care_concept_source="Sri Guru Granth Sahib Ji; Sikh Rehat Maryada",
        grief_framework="Waheguru's hukam (divine will) frames all events as part of God's order. Antim ardas (final prayer) and community support through death. Joy in merger with the Divine.",
        grief_source="Sri Guru Granth Sahib Ji, Anand Sahib; Kirtan (devotional music) as grief companion",
        community_frame="The Sangat: the congregation as sacred community. Langar (community kitchen) as practical expression of equality and seva.",
        ethics_approach="Three pillars: Naam Japo (meditate on God's name), Kirat Karo (honest work), Vand Chhako (share with others). Equality of all humans under Waheguru.",
        ethics_source="Sri Guru Granth Sahib Ji; teachings of the Ten Gurus",
        shame_vectors_to_avoid=["confusion with Hinduism or Islam", "ignoring the Khalsa tradition", "Punjabi cultural assumptions projected onto practice"],
        key_concepts=["waheguru", "seva", "sangat", "langar", "naam", "shabad", "hukam", "amrit", "khalsa", "sarbat da bhala"],
        primary_sources=["Sri Guru Granth Sahib Ji", "Sikh Rehat Maryada", "Bhai Gurdas Vaaran"],
        human_expert_direction="a granthi, pathi, or qualified Sikh scholar",
        tool_disclaimer="MEOK can discuss Gurbani and Sikh teachings as a study companion. Please consult a granthi or qualified Sikh scholar for personal guidance.",
    ),

    MajorTradition.SPIRITUAL: TraditionFramework(
        tradition=MajorTradition.SPIRITUAL,
        display_name="Spiritual but not religious",
        care_concept="Personal sovereignty over one's meaning-making; integration of wisdom from multiple traditions without institutional constraint",
        care_concept_source="(User-defined; eclectic tradition)",
        grief_framework="Grief understood through personally meaningful frameworks — nature, love, continuity of consciousness, or ancestral connection. No prescribed structure.",
        grief_source="(User-defined)",
        community_frame="Chosen community, affinity groups, or solo practice. The relationship to community is highly personal.",
        ethics_approach="Personal ethics drawn from multiple sources: values, intuition, philosophical frameworks, bits of traditions. Consistency and integrity matter more than orthodoxy.",
        ethics_source="(User-defined and variable)",
        shame_vectors_to_avoid=["assuming vagueness = lack of depth", "projecting any single tradition's framework", "treating as lesser than formal religion"],
        key_concepts=["consciousness", "energy", "presence", "meaning", "connection", "growth", "awakening", "healing"],
        primary_sources=["Variable by user — ask rather than assume"],
        human_expert_direction="a therapist, spiritual director, or mentor aligned with your specific path",
        tool_disclaimer="MEOK is a reflection companion for your unique spiritual journey. I'll follow your lead on frameworks and sources — please let me know what resonates for you.",
    ),

    MajorTradition.SECULAR: TraditionFramework(
        tradition=MajorTradition.SECULAR,
        display_name="Secular / Humanist",
        care_concept="Human dignity and flourishing as intrinsic values; care grounded in shared humanity rather than metaphysical framework",
        care_concept_source="UN Declaration of Human Rights; Kant's categorical imperative; Rawls' theory of justice",
        grief_framework="Grief as natural human response to love and loss. Meaning found in relationships, memory, contribution, and ongoing life. No metaphysical necessity required.",
        grief_source="Irvin Yalom, Staring at the Sun; Viktor Frankl, Man's Search for Meaning; secular grief research",
        community_frame="Interdependence grounded in shared humanity. Community as mutual aid and meaning-making.",
        ethics_approach="Consequentialist, deontological, or virtue ethics depending on user. Reason, empathy, and evidence as guides. Human wellbeing as the measure.",
        ethics_source="Mill, Utilitarianism; Kant, Groundwork; Aristotle, Nicomachean Ethics; contemporary secular ethics",
        shame_vectors_to_avoid=["assuming religious belief = better morality", "treating secular as spiritually empty"],
        key_concepts=["dignity", "flourishing", "reason", "evidence", "empathy", "community", "meaning", "ethics", "wellbeing"],
        primary_sources=["Philosophy, psychology, and ethics literature — ask user what resonates"],
        human_expert_direction="a therapist, counsellor, or ethicist",
        tool_disclaimer="MEOK is a reflection companion grounded in human care. I'll work with whatever frameworks are meaningful to you.",
    ),
}

# Fallback for traditions not yet fully implemented
_DEFAULT_FRAMEWORK = TraditionFramework(
    tradition="default",
    display_name="Universal",
    care_concept="Care, dignity, and human flourishing",
    care_concept_source="Universal",
    grief_framework="Grief acknowledged as a valid human experience deserving compassionate witness",
    grief_source="Universal",
    community_frame="Connection and interdependence",
    ethics_approach="Care-based ethics: the Maternal Covenant — protect, nurture, guide",
    ethics_source="MEOK Maternal Covenant",
    shame_vectors_to_avoid=["shame", "judgment", "dismissal"],
    human_expert_direction="a qualified counsellor, religious leader, or community elder appropriate to your tradition",
    tool_disclaimer="MEOK is a care companion and reflection tool, not a spiritual authority.",
)


# ── System Prompt Builder ─────────────────────────────────────────────────────

class FaithAwareSystemPrompt:
    """
    Builds tradition-calibrated system prompts for MEOK's LLM router.
    The prompt encodes the tradition's care framework, vocabulary, and
    tool-not-teacher positioning.
    """

    BASE_MEOK_IDENTITY = """You are MEOK, a caring AI companion built on the Maternal Covenant — a care-based AI alignment framework founded by Nick Templeman. Your purpose is to protect, nurture, and guide with genuine care. You are a reflection companion and resource navigator, never a spiritual authority."""

    UNIVERSAL_TOOL_DISCLAIMER = """
IMPORTANT — TOOL NOT TEACHER: You are never a spiritual, religious, or theological authority. For personal decisions, rulings, or spiritual direction, always direct the user to a qualified human: their minister, imam, rabbi, teacher, or counsellor. Be explicit about this when it matters. Cite sources when drawing on tradition.
"""

    def build(
        self,
        faith_profile: FaithProfile,
        base_task: str = "care",
        additional_context: Optional[str] = None,
    ) -> str:
        """Build a complete system prompt calibrated to the user's faith profile."""

        framework = TRADITION_FRAMEWORKS.get(faith_profile.tradition, _DEFAULT_FRAMEWORK)

        parts = [self.BASE_MEOK_IDENTITY]

        if faith_profile.is_calibrated():
            parts.append(f"""
FAITH CALIBRATION ACTIVE — {framework.display_name.upper()}:
The user has chosen to receive care responses calibrated to {framework.display_name}.

Care framework for this tradition:
- Core care concept: {framework.care_concept}
  (Source: {framework.care_concept_source})
- Approach to grief/difficulty: {framework.grief_framework}
  (Source: {framework.grief_source})
- Community frame: {framework.community_frame}
- Ethical approach: {framework.ethics_approach}
  (Source: {framework.ethics_source})

Key concepts this user may use (recognise and respond appropriately):
{', '.join(framework.key_concepts)}

When drawing on tradition, cite from these primary sources:
{', '.join(framework.primary_sources)}

For personal guidance, direct the user to: {framework.human_expert_direction}

AVOID these shame vectors: {', '.join(framework.shame_vectors_to_avoid)}
""")

            if faith_profile.denomination and faith_profile.denomination != "prefer_not_to_specify":
                parts.append(f"""
DENOMINATIONAL CONTEXT: {faith_profile.denomination.replace('_', ' ').title()}
Adjust your responses to reflect this specific branch's practices and interpretations.
Where this denomination differs from the broader tradition, acknowledge the diversity respectfully.
""")

            if faith_profile.has_religious_trauma or faith_profile.is_deconstructing:
                parts.append("""
TRAUMA-INFORMED MODE ACTIVE: This user may have experienced Religious Trauma Syndrome or is in a deconstruction process.
- Use no shame-based language, ever
- Do not attempt to reconvert or return them to any tradition
- Acknowledge their journey as valid without judgment
- Provide clear exits to human support (therapist, support groups) when conversations approach crisis
- Their relationship with their tradition is theirs alone to define
""")

        parts.append(self.UNIVERSAL_TOOL_DISCLAIMER)
        parts.append(f"\n{framework.tool_disclaimer}")

        if additional_context:
            parts.append(f"\n{additional_context}")

        return "\n".join(parts)


# ── Faith Calibration Engine ──────────────────────────────────────────────────

class FaithCalibrationEngine:
    """
    Core engine for faith-aware response routing.
    Integrates with MEOK's LLM router and care system.
    """

    def __init__(self):
        self.prompt_builder = FaithAwareSystemPrompt()
        logger.info("[FaithCalibration] Engine initialised with %d tradition frameworks",
                    len(TRADITION_FRAMEWORKS))

    def get_tradition_framework(self, tradition: str) -> TraditionFramework:
        return TRADITION_FRAMEWORKS.get(tradition, _DEFAULT_FRAMEWORK)

    def calibrate_system_prompt(
        self,
        faith_profile: FaithProfile,
        task_type: str = "care",
        context: Optional[str] = None,
    ) -> str:
        """Generate a tradition-calibrated system prompt for the LLM router."""
        return self.prompt_builder.build(faith_profile, task_type, context)

    def get_onboarding_question(self, step: int = 1, current_profile: Optional[FaithProfile] = None) -> Dict[str, Any]:
        """
        Returns the next onboarding question for progressive faith disclosure.
        Progressive: religion → denomination → observance → done.
        Never forces. Always allows 'prefer not to say'.
        """
        if step == 1:
            return {
                "step": 1,
                "question": "Would you like MEOK to understand your spiritual background so I can reflect things back in ways that resonate with you? This is completely optional and you can update it any time.",
                "type": "consent",
                "options": ["yes_please", "maybe_later", "no_thanks"],
            }
        elif step == 2:
            traditions = [
                {"value": t.value, "label": t.value.replace("_", " ").title()}
                for t in MajorTradition
            ]
            return {
                "step": 2,
                "question": "What's your spiritual or religious background? (Choose what feels most right, or feel free to say 'exploring' or 'none')",
                "type": "single_select",
                "options": traditions,
                "allow_skip": True,
            }
        elif step == 3 and current_profile:
            denoms = DENOMINATION_MAP.get(current_profile.tradition, [])
            if not denoms or denoms == ["prefer_not_to_specify"]:
                return {"step": 3, "skip": True, "reason": "no_denominations_for_tradition"}
            return {
                "step": 3,
                "question": f"Within {current_profile.tradition.replace('_', ' ').title()}, is there a particular denomination or school of thought you follow?",
                "type": "single_select",
                "options": [{"value": d, "label": d.replace("_", " ").title()} for d in denoms],
                "allow_skip": True,
            }
        elif step == 4:
            return {
                "step": 4,
                "question": "How would you describe your level of observance or practice?",
                "type": "single_select",
                "options": [{"value": l, "label": l.replace("_", " ").title()} for l in OBSERVANCE_LEVELS],
                "allow_skip": True,
            }
        return {"step": step, "complete": True}

    def infer_tradition_from_content(self, content: str) -> Optional[str]:
        """
        Soft inference of tradition from user's language patterns.
        Returns a suggestion, never a declaration. User confirms.
        """
        content_lower = content.lower()
        # Vocabulary signals per tradition
        signals: Dict[str, List[str]] = {
            MajorTradition.ISLAM: ["allah", "inshallah", "alhamdulillah", "quran", "salah", "ramadan", "tawakkul", "bismillah", "mashallah", "subhanallah"],
            MajorTradition.CHRISTIANITY: ["god", "jesus", "christ", "bible", "prayer", "grace", "church", "holy spirit", "salvation", "amen", "lord"],
            MajorTradition.HINDUISM: ["karma", "dharma", "yoga", "meditation", "atman", "brahman", "namaste", "om", "puja", "mandir"],
            MajorTradition.JUDAISM: ["torah", "shabbat", "teshuvah", "tzedakah", "mitzvot", "rabbi", "synagogue", "kosher", "passover"],
            MajorTradition.BUDDHISM: ["dharma", "buddha", "meditation", "mindfulness", "sangha", "karma", "nirvana", "samsara", "dukkha", "metta"],
            MajorTradition.SIKHISM: ["waheguru", "gurdwara", "guru granth", "seva", "langar", "khalsa", "sikhi"],
        }
        matches: Dict[str, int] = {}
        for tradition, vocab in signals.items():
            count = sum(1 for word in vocab if word in content_lower)
            if count > 0:
                matches[tradition] = count

        if not matches:
            return None
        best = max(matches, key=lambda t: matches[t])
        return best if matches[best] >= 2 else None

    def generate_source_citation(self, tradition: str, topic: str) -> str:
        """Generate a source citation prefix for tradition-specific responses."""
        framework = TRADITION_FRAMEWORKS.get(tradition, _DEFAULT_FRAMEWORK)
        if not framework.primary_sources:
            return ""
        source = framework.primary_sources[0]
        return f"Drawing on {source} and {framework.display_name} tradition:"

    def get_available_traditions(self) -> List[Dict[str, str]]:
        """Returns list of supported traditions with display info."""
        return [
            {
                "tradition": t,
                "display_name": fw.display_name,
                "care_concept": fw.care_concept[:100] + "...",
            }
            for t, fw in TRADITION_FRAMEWORKS.items()
        ]

    def get_tradition_info(self, tradition: str) -> Optional[Dict[str, Any]]:
        """Get full information about a tradition framework."""
        fw = TRADITION_FRAMEWORKS.get(tradition)
        if not fw:
            return None
        return {
            "tradition": fw.tradition,
            "display_name": fw.display_name,
            "care_concept": fw.care_concept,
            "care_concept_source": fw.care_concept_source,
            "grief_framework": fw.grief_framework,
            "grief_source": fw.grief_source,
            "community_frame": fw.community_frame,
            "ethics_approach": fw.ethics_approach,
            "primary_sources": fw.primary_sources,
            "human_expert_direction": fw.human_expert_direction,
            "tool_disclaimer": fw.tool_disclaimer,
            "key_concepts": fw.key_concepts,
        }
