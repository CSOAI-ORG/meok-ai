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
  - INTRA-FAITH AWARENESS: Islam != Sunni != Hanafi. Judaism != Orthodox. Always ask.
  - TRAUMA-INFORMED: No shame language. No reconversion attempts. Clear human exits.
  - TOOL NOT TEACHER: This bears repeating. Never issue rulings. Never declare truth.

Architecture:
  FaithProfile: User's declared tradition state
  ReligiousTraumaMode: Trauma-informed safety configuration
  CalendarAwareness: Tradition-specific calendar and prayer time config
  FaithAPIConfig: External scripture and prayer API endpoints
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


# ── Authority Consensus Disclaimers ──────────────────────────────────────────

TOOL_NOT_TEACHER_DISCLAIMER = """
AI AND RELIGIOUS AUTHORITY — WHAT TRADITION LEADERS SAY:

  Islam / Dar al-Ifta (Egypt): "It is not religiously permissible to depend on
  an AI-produced fatwa or act upon it." AI lacks the ijtihad, taqwa, and basirah
  required for religious rulings.

  Catholic Church / Vatican "Antiqua et Nova" (2025): AI "should be used only
  as a tool to complement human intelligence, not replace it." AI cannot exercise
  pastoral judgement, conscience, or sacramental authority.

  Jewish Tradition / Rabbi Gil Student (Torah Musings): "Issuing a new halakhic
  ruling is a religious activity" requiring covenant membership, Talmudic mastery,
  and communal accountability. AI cannot fulfil these conditions.

  Buddhism / His Holiness the Dalai Lama: "Artificial intelligence cannot have
  consciousness" in the Buddhist sense. The Dharma is best transmitted through
  direct teacher-student relationship, not algorithmic mediation.

MEOK is a reflection companion and resource navigator. For personal rulings,
spiritual direction, and pastoral care, always consult a qualified human authority
from your tradition.
"""


# ── Tradition Taxonomy ────────────────────────────────────────────────────────

class MajorTradition(str, Enum):
    ISLAM          = "islam"
    CHRISTIANITY   = "christianity"
    HINDUISM       = "hinduism"
    JUDAISM        = "judaism"
    BUDDHISM       = "buddhism"
    SIKHISM        = "sikhism"
    INDIGENOUS     = "indigenous"
    SPIRITUAL      = "spiritual_not_religious"
    SECULAR        = "secular_humanist"
    NONE           = "none_or_exploring"
    TAOISM         = "taoism"
    ZOROASTRIANISM = "zoroastrianism"
    JAINISM        = "jainism"
    BAHAI          = "bahai"
    CONFUCIANISM   = "confucianism"
    SHINTO         = "shinto"
    UNITARIAN      = "unitarian_universalist"


# ── Full Denomination Trees ───────────────────────────────────────────────────

DENOMINATION_TREE: Dict[str, Dict[str, Any]] = {
    "islam": {
        "display": "Islam",
        "schools": {
            "sunni_hanafi": {
                "label": "Sunni — Hanafi",
                "description": "Prevalent in South Asia, Turkey, Central Asia. Known for its rational methodology (ra'y) and flexibility in legal reasoning.",
            },
            "sunni_maliki": {
                "label": "Sunni — Maliki",
                "description": "Prevalent in North/West Africa and parts of the Gulf. Emphasises the practice of Medina (amal ahl al-Madinah) as a source.",
            },
            "sunni_shafii": {
                "label": "Sunni — Shafi'i",
                "description": "Prevalent in Southeast Asia, Egypt, East Africa. Rigorous systematic legal methodology (usul al-fiqh).",
            },
            "sunni_hanbali": {
                "label": "Sunni — Hanbali",
                "description": "Prevalent in Saudi Arabia and Gulf. Most text-literal of the four schools; basis for Salafi/Wahhabi orientations.",
            },
            "shia_twelver": {
                "label": "Shia — Twelver (Ja'fari)",
                "description": "Largest Shia school. Recognises twelve Imams; Ja'fari fiqh. Prevalent in Iran, Iraq, Bahrain, Lebanon.",
            },
            "shia_ismaili": {
                "label": "Shia — Ismaili",
                "description": "Follows the Aga Khan lineage. Emphasises esoteric interpretation (ta'wil) and living Imamate.",
            },
            "sufi_general": {
                "label": "Sufi / Tasawwuf",
                "description": "Mystical Islam. Multiple tariqas (orders): Qadiri, Naqshbandi, Shadhili, Chishti, Mevlevi. Focus on inner purification and closeness to God.",
            },
            "ibadi": {
                "label": "Ibadi",
                "description": "Distinct from Sunni/Shia. Prevalent in Oman. Moderate, scholarly tradition.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "christianity": {
        "display": "Christianity",
        "schools": {
            "catholic_roman": {
                "label": "Roman Catholic",
                "description": "Communion with Rome. Sacramental theology, Natural Law ethics, Pope as Vicar of Christ. Magisterium as teaching authority.",
            },
            "orthodox_eastern": {
                "label": "Eastern Orthodox",
                "description": "Greek, Russian, Antiochian, Serbian, Romanian and other autocephalous churches. Theosis, apophatic theology, liturgical tradition.",
            },
            "orthodox_coptic": {
                "label": "Coptic Orthodox",
                "description": "Egyptian and Ethiopian Orthodox tradition. Ancient Alexandrian rite; Miaphysite Christology.",
            },
            "anglican": {
                "label": "Anglican / Episcopal",
                "description": "Via media between Catholic and Protestant. Broad Church tradition; Wesley's Quadrilateral in Methodist offshoots.",
            },
            "baptist": {
                "label": "Baptist",
                "description": "Believer's baptism; congregational polity; Scripture as sole authority (sola scriptura). Southern Baptist, American Baptist, and others.",
            },
            "methodist": {
                "label": "Methodist / Wesleyan",
                "description": "Arminian theology, social holiness, Wesley's Quadrilateral (Scripture, Tradition, Reason, Experience).",
            },
            "lutheran": {
                "label": "Lutheran",
                "description": "Law and Gospel; justification by grace through faith alone (sola fide, sola gratia). Lutheran Church Missouri Synod, ELCA, and others.",
            },
            "pentecostal": {
                "label": "Pentecostal / Charismatic",
                "description": "Gifts of the Spirit (tongues, healing, prophecy). Assemblies of God, Church of God in Christ, and others.",
            },
            "evangelical": {
                "label": "Evangelical (non-denominational)",
                "description": "Biblical inerrancy; personal conversion; evangelism. Broadly Protestant but non-denominational.",
            },
            "reformed_calvinist": {
                "label": "Reformed / Calvinist / Presbyterian",
                "description": "TULIP doctrines; covenant theology; Westminster Confession. PCA, PCUSA, Dutch Reformed, and others.",
            },
            "quaker": {
                "label": "Quaker / Friends",
                "description": "Inner Light; silent worship; testimony of peace, equality, simplicity, integrity, community, stewardship.",
            },
            "seventh_day_adventist": {
                "label": "Seventh-day Adventist",
                "description": "Sabbath on Saturday; health message; prophetic interpretation; Ellen White writings as inspired commentary.",
            },
            "lds_mormon": {
                "label": "Latter-day Saint / Mormon",
                "description": "Restoration tradition. Book of Mormon, Doctrine and Covenants, Pearl of Great Price alongside Bible. Temple theology.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "judaism": {
        "display": "Judaism",
        "schools": {
            "orthodox_modern": {
                "label": "Modern Orthodox",
                "description": "Torah U'Madda: full halakhic observance while engaging with modernity. YU/RCA stream in the US.",
            },
            "orthodox_haredi": {
                "label": "Haredi / Ultra-Orthodox",
                "description": "Strict halakhic observance; segregation from secular culture. Litvish (Yeshivish) and Hasidic sub-streams.",
            },
            "hasidic": {
                "label": "Hasidic",
                "description": "Mystical, joyful devotion. Chabad-Lubavitch, Breslov, Satmar, Belz, and many other courts.",
            },
            "conservative_masorti": {
                "label": "Conservative / Masorti",
                "description": "Halakha as binding but evolving; Committee on Jewish Law and Standards. Egalitarian in most streams.",
            },
            "reform": {
                "label": "Reform",
                "description": "Individual autonomy in religious practice; progressive values; liturgical innovation. Largest US Jewish denomination.",
            },
            "reconstructionist": {
                "label": "Reconstructionist",
                "description": "Judaism as evolving civilisation (Kaplan). Democratic, egalitarian, naturalistic theology.",
            },
            "renewal": {
                "label": "Jewish Renewal",
                "description": "Neo-Hasidic spirituality meets progressive values. Zalman Schachter-Shalomi lineage. Eco-kosher, feminist.",
            },
            "sephardic": {
                "label": "Sephardic",
                "description": "Jewish communities from Spain, North Africa, Middle East. Shulchan Aruch of R. Yosef Karo as primary code.",
            },
            "mizrahi": {
                "label": "Mizrahi",
                "description": "Jewish communities from Middle East and Central Asia. Distinct liturgical and legal traditions.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "buddhism": {
        "display": "Buddhism",
        "schools": {
            "theravada": {
                "label": "Theravada",
                "description": "Oldest surviving school. Pali Canon as scripture. Prevalent in Sri Lanka, Thailand, Myanmar, Cambodia, Laos.",
            },
            "zen_rinzai": {
                "label": "Zen — Rinzai",
                "description": "Koan practice; sudden enlightenment (satori). Vigorous, martial aesthetic.",
            },
            "zen_soto": {
                "label": "Zen — Soto",
                "description": "Shikantaza ('just sitting'). Gradual cultivation; Dogen's Shobogenzo.",
            },
            "pure_land": {
                "label": "Pure Land (Jodo/Jodo Shin)",
                "description": "Nembutsu practice; rebirth in Amitabha's Pure Land as path to awakening. Most popular East Asian form.",
            },
            "nichiren": {
                "label": "Nichiren",
                "description": "Lotus Sutra as supreme teaching; Nam-myoho-renge-kyo chanting. Soka Gakkai is a major Nichiren lay organisation.",
            },
            "tibetan_gelug": {
                "label": "Tibetan — Gelug",
                "description": "Dalai Lama lineage. Rigorous scholasticism; Lamrim graduated path. Je Tsongkhapa's tradition.",
            },
            "tibetan_kagyu": {
                "label": "Tibetan — Kagyu",
                "description": "Mahamudra; Milarepa lineage; Karmapa. Emphasis on direct transmission and tantric practice.",
            },
            "tibetan_nyingma": {
                "label": "Tibetan — Nyingma",
                "description": "Oldest Tibetan school. Dzogchen (Great Perfection); treasure texts (terma). Padmasambhava lineage.",
            },
            "tibetan_sakya": {
                "label": "Tibetan — Sakya",
                "description": "Lamdre ('path with its result') practice. Hereditary leadership of Sakya lineage.",
            },
            "secular_buddhism": {
                "label": "Secular / Agnostic Buddhism",
                "description": "Buddhist ethics and practice without metaphysical commitments. Stephen Batchelor's 'Buddhism Without Beliefs'.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "hinduism": {
        "display": "Hinduism",
        "schools": {
            "vaishnava": {
                "label": "Vaishnavism",
                "description": "Vishnu/Krishna as Supreme. Includes ISKCON, Sri Vaishnavism (Ramanuja), Gaudiya Vaishnavism, Pustimarg.",
            },
            "shaiva": {
                "label": "Shaivism",
                "description": "Shiva as Supreme. Includes Kashmir Shaivism, Shaiva Siddhanta, Lingayat, Nath tradition.",
            },
            "shakta": {
                "label": "Shaktism",
                "description": "Goddess (Devi/Shakti) as Supreme. Includes Sri Vidya, Kali worship, Tantric traditions.",
            },
            "smarta": {
                "label": "Smartism",
                "description": "Advaita Vedanta; worship of five deities (Panchayatana puja). Shankaracharya lineage. Pluralistic.",
            },
            "advaita_vedanta": {
                "label": "Advaita Vedanta",
                "description": "Non-dual philosophy; Brahman as ultimate reality; Ramakrishna, Vivekananda, Ramana Maharshi.",
            },
            "iskcon": {
                "label": "ISKCON / Hare Krishna",
                "description": "Gaudiya Vaishnava; Srila Prabhupada's tradition. Chanting of Hare Krishna maha-mantra.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "sikhism": {
        "display": "Sikhism",
        "schools": {
            "khalsa": {
                "label": "Khalsa (Amritdhari)",
                "description": "Initiated Sikhs who have taken Amrit ceremony. Observe the Five Ks (panj kakars).",
            },
            "keshdhari": {
                "label": "Keshdhari",
                "description": "Maintain uncut hair (kesh) but have not taken Amrit. Follow Sikh practices.",
            },
            "nanakpanthi": {
                "label": "Nanakpanthi",
                "description": "Following of Guru Nanak's teachings. May not observe all Khalsa disciplines.",
            },
            "udasi": {
                "label": "Udasi",
                "description": "Ascetic tradition founded by Sri Chand (son of Guru Nanak). Distinct monastic practices.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "taoism": {
        "display": "Taoism",
        "schools": {
            "philosophical_taoism": {
                "label": "Philosophical Taoism (Daojia)",
                "description": "Laozi's Tao Te Ching and Zhuangzi as foundational texts. Wu wei, natural harmony, simplicity.",
            },
            "religious_taoism_quanzhen": {
                "label": "Religious Taoism — Quanzhen",
                "description": "Northern school. Monastic; internal alchemy (neidan); Wang Chongyang tradition.",
            },
            "religious_taoism_zhengyi": {
                "label": "Religious Taoism — Zhengyi",
                "description": "Southern school. Ritual specialists; external alchemy; celestial masters lineage.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "bahai": {
        "display": "Baha'i Faith",
        "schools": {
            "mainstream_bahai": {
                "label": "Baha'i (Universal House of Justice)",
                "description": "Unity of humanity, progressive revelation, independent investigation of truth. Global administrative order.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "indigenous": {
        "display": "Indigenous / Earth-based",
        "schools": {
            "specify_nation_or_tradition": {
                "label": "Specify nation or tradition",
                "description": "Indigenous traditions are highly specific. Please name your tradition or nation if comfortable.",
            },
            "pan_indigenous": {
                "label": "Pan-Indigenous / Broadly Earth-based",
                "description": "Draws from multiple indigenous or earth-based traditions.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "spiritual_not_religious": {
        "display": "Spiritual but not religious",
        "schools": {
            "eclectic": {"label": "Eclectic / Perennial", "description": "Draws from multiple traditions."},
            "hermetic": {"label": "Hermetic / Western Esoteric", "description": "Hermeticism, Kabbalah (Western), alchemy, astrology."},
            "new_age": {"label": "New Age", "description": "Crystals, energy work, channelling, Law of Attraction."},
            "shamanic": {"label": "Shamanic / Earth-based", "description": "Plant medicine, journeywork, animism."},
            "esoteric_innerstanding": {
                "label": "Esoteric / Innerstanding",
                "description": "Inner knowing; hidden wisdom traditions; consciousness exploration. Sevan Bomar / Secret Energy orientation.",
            },
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "secular_humanist": {
        "display": "Secular / Humanist",
        "schools": {
            "secular_humanist": {"label": "Secular Humanist", "description": "Human dignity and flourishing without theistic grounding."},
            "atheist": {"label": "Atheist", "description": "No belief in gods."},
            "agnostic": {"label": "Agnostic", "description": "Uncertainty about ultimate metaphysical questions."},
            "prefer_not_to_specify": {"label": "Prefer not to specify", "description": ""},
        },
    },

    "none_or_exploring": {
        "display": "Exploring / None",
        "schools": {
            "prefer_not_to_specify": {"label": "Prefer not to specify / Still exploring", "description": ""},
        },
    },
}

# Flat denomination list for backward compatibility
DENOMINATION_MAP: Dict[str, List[str]] = {
    tradition: list(tree["schools"].keys())
    for tradition, tree in DENOMINATION_TREE.items()
}

OBSERVANCE_LEVELS = ["minimal", "moderate", "observant", "strictly_observant", "prefer_not_to_say"]


# ── Religious Trauma Mode ─────────────────────────────────────────────────────

@dataclass
class ReligiousTraumaMode:
    """
    Configuration for trauma-informed faith conversations.

    Religious Trauma Syndrome (RTS) — coined by Dr. Marlene Winell — describes
    harm caused by toxic religious teachings or environments. Activated when a
    user discloses trauma, spiritual abuse, or active deconstruction.
    """
    is_in_trauma_mode: bool = False

    # Language patterns that can re-trigger shame or fear
    shame_triggers_to_avoid: List[str] = field(default_factory=lambda: [
        "you should pray more",
        "have you tried going back to church",
        "God has a plan",
        "everything happens for a reason",
        "you need to forgive",
        "your faith must be weak",
        "sin",
        "punishment",
        "hell",
        "damnation",
        "backslider",
        "apostate",
        "blasphemy",
    ])

    # Prompt shown at the start of trauma-mode conversations
    entry_acknowledgement: str = (
        "I want you to know that your experience is valid, your pain is real, "
        "and you are not alone. There is no judgment here — only care."
    )

    # Offered when conversation approaches crisis territory
    exit_ramp_prompt: str = (
        "If what we're discussing is bringing up a lot, it's completely okay to pause. "
        "If you'd find it helpful, a therapist who specialises in religious trauma "
        "can provide the kind of support I can't. Would you like me to help you find one?"
    )

    # Human support resources to surface
    human_resources: List[str] = field(default_factory=lambda: [
        "Reclaiming My Theology (recoveringfromreligion.com)",
        "Religious Trauma Institute (religioustraumainstitute.com)",
        "Secular Therapy Project (seculartherapy.org)",
        "Therapist who specialises in religious trauma (Psychology Today filter)",
    ])

    @classmethod
    def activated(cls) -> "ReligiousTraumaMode":
        """Return a fully activated trauma mode instance."""
        return cls(is_in_trauma_mode=True)


# ── Calendar Awareness ────────────────────────────────────────────────────────

@dataclass
class CalendarAwareness:
    """
    Tradition-specific calendar and prayer time awareness.
    Connects to external APIs for accurate scheduling.
    """
    tradition: str
    display_name: str

    has_prayer_times: bool = False
    calendar_system: str = "gregorian"   # gregorian | hijri | hebrew | hindu_panchang | sikh | chinese

    # External API endpoint for this tradition's calendar/prayer times
    api_endpoint: Optional[str] = None
    api_name: Optional[str] = None
    api_docs: Optional[str] = None
    api_requires_auth: bool = False

    supports_observance_reminders: bool = False

    # Key observances for this tradition
    key_observances: List[str] = field(default_factory=list)

    # Notes on calendar use
    notes: str = ""


# ── Scripture / Text API Config ───────────────────────────────────────────────

@dataclass
class FaithAPIConfig:
    """
    External API configuration for scripture texts, prayer times, and calendars.
    All APIs listed are publicly accessible without API keys unless noted.
    """
    tradition: str
    display_name: str

    # Scripture text API
    scripture_api_url: Optional[str] = None
    scripture_api_name: Optional[str] = None
    scripture_api_docs: Optional[str] = None
    scripture_api_requires_auth: bool = False
    scripture_example_endpoint: Optional[str] = None

    # Prayer/calendar API
    calendar_api_url: Optional[str] = None
    calendar_api_name: Optional[str] = None
    calendar_api_docs: Optional[str] = None
    calendar_api_requires_auth: bool = False

    # Notes for integration
    integration_notes: str = ""


# ── Faith API Registry ────────────────────────────────────────────────────────

FAITH_API_REGISTRY: Dict[str, FaithAPIConfig] = {

    "islam": FaithAPIConfig(
        tradition="islam",
        display_name="Islam",
        scripture_api_url="https://api.quran.com/api/v4/",
        scripture_api_name="Quran.com API v4",
        scripture_api_docs="https://quran.api-docs.io/v4/welcome",
        scripture_api_requires_auth=False,
        scripture_example_endpoint="https://api.quran.com/api/v4/verses/by_key/2:286?translations=131",
        calendar_api_url="https://api.aladhan.com/v1/",
        calendar_api_name="AlAdhan Prayer Times API",
        calendar_api_docs="https://aladhan.com/prayer-times-api",
        calendar_api_requires_auth=False,
        integration_notes=(
            "Quran.com API: GET /verses/by_chapter/{chapter_number} or /verses/by_key/{chapter}:{verse}. "
            "Supports 90+ translations. AlAdhan: GET /timings?latitude=51.5&longitude=-0.1&method=2 "
            "for prayer times by coordinate. Method 2 = ISNA, method 4 = Umm Al-Qura."
        ),
    ),

    "judaism": FaithAPIConfig(
        tradition="judaism",
        display_name="Judaism",
        scripture_api_url="https://www.sefaria.org/api/",
        scripture_api_name="Sefaria API",
        scripture_api_docs="https://developers.sefaria.org",
        scripture_api_requires_auth=False,
        scripture_example_endpoint="https://www.sefaria.org/api/texts/Genesis.1.1?context=0",
        calendar_api_url="https://www.hebcal.com/",
        calendar_api_name="Hebcal Jewish Calendar API",
        calendar_api_docs="https://www.hebcal.com/home/developer-apis",
        calendar_api_requires_auth=False,
        integration_notes=(
            "Sefaria: GET /api/texts/{reference} for any text (Torah, Talmud, Midrash, etc). "
            "GET /api/search-wrapper?q={query} for text search. "
            "Hebcal: GET /api/holidays?v=1&year=2026&maj=on for major holidays. "
            "GET /api/converter for Hebrew/Gregorian date conversion."
        ),
    ),

    "sikhism": FaithAPIConfig(
        tradition="sikhism",
        display_name="Sikhism",
        scripture_api_url="https://api.banidb.com/v2/",
        scripture_api_name="BaniDB API (Khalis Foundation)",
        scripture_api_docs="https://banidb.com/",
        scripture_api_requires_auth=False,
        scripture_example_endpoint="https://api.banidb.com/v2/shabads/1",
        calendar_api_url=None,
        calendar_api_name=None,
        integration_notes=(
            "BaniDB: GET /v2/shabads/{id} for a shabad. GET /v2/search/{query} for search. "
            "Covers Sri Guru Granth Sahib Ji, Amrit Keertan, and other Banis. "
            "Open source from the Khalis Foundation."
        ),
    ),

    "hinduism": FaithAPIConfig(
        tradition="hinduism",
        display_name="Hinduism",
        scripture_api_url="https://vedicscriptures.github.io/",
        scripture_api_name="VedicScriptures — Bhagavad Gita API",
        scripture_api_docs="https://github.com/vedicscriptures/vedicscriptures.github.io",
        scripture_api_requires_auth=False,
        scripture_example_endpoint="https://vedicscriptures.github.io/slok/1/1/",
        calendar_api_url=None,
        calendar_api_name=None,
        integration_notes=(
            "VedicScriptures: GET /slok/{chapter}/{verse}/ for Bhagavad Gita verse. "
            "Returns Sanskrit, transliteration, and multiple translations. "
            "For Panchang (Hindu calendar), consider local panchang APIs or libraries. "
            "PyJHora (Python) provides Vedic astrology and Panchang calculations."
        ),
    ),

    "buddhism": FaithAPIConfig(
        tradition="buddhism",
        display_name="Buddhism",
        scripture_api_url="https://suttacentral.net/api/",
        scripture_api_name="SuttaCentral API",
        scripture_api_docs="https://suttacentral.net/about/api",
        scripture_api_requires_auth=False,
        scripture_example_endpoint="https://suttacentral.net/api/suttas/dn1/sujato",
        calendar_api_url=None,
        calendar_api_name=None,
        integration_notes=(
            "SuttaCentral: GET /api/suttas/{uid}/{author} for Pali texts with translations. "
            "Covers the full Pali Canon, Chinese Agamas, Tibetan translations, and more. "
            "GET /api/languages for available translation languages. "
            "For Tibetan texts, Lotsawa House (lotsawahouse.org) has many free translations."
        ),
    ),

    "christianity": FaithAPIConfig(
        tradition="christianity",
        display_name="Christianity",
        scripture_api_url="https://api.esv.org/v3/passage/text/",
        scripture_api_name="ESV Bible API",
        scripture_api_docs="https://api.esv.org/",
        scripture_api_requires_auth=True,
        scripture_example_endpoint="https://api.esv.org/v3/passage/text/?q=John+3:16",
        calendar_api_url=None,
        calendar_api_name=None,
        integration_notes=(
            "ESV API requires a free API key (api.esv.org). "
            "For open access: Bible.api at https://bible-api.com/{passage} (no auth, public domain). "
            "GET https://bible-api.com/John+3:16 returns JSON with text. "
            "Supports KJV, WEB, ASV, YLT, DARBY, and other public domain translations. "
            "For liturgical calendar: churchcal.app has a REST API for lectionary dates."
        ),
    ),

    "taoism": FaithAPIConfig(
        tradition="taoism",
        display_name="Taoism",
        scripture_api_url=None,
        scripture_api_name="No dedicated public API",
        scripture_api_docs=None,
        scripture_api_requires_auth=False,
        integration_notes=(
            "No dedicated Taoist text API. Recommend using Wikisource for Tao Te Ching "
            "and Zhuangzi in public domain translations. "
            "The Tao Te Ching is available via multiple translation comparison sites. "
            "For I Ching: iching-api.com provides programmatic access."
        ),
    ),

    "bahai": FaithAPIConfig(
        tradition="bahai",
        display_name="Baha'i Faith",
        scripture_api_url="https://www.bahai.org/library/",
        scripture_api_name="Baha'i Reference Library",
        scripture_api_docs="https://www.bahai.org/library/",
        scripture_api_requires_auth=False,
        integration_notes=(
            "Official Baha'i writings at bahai.org/library. No formal REST API. "
            "For programmatic access, the Baha'i World Centre does not provide an API; "
            "use web scraping of public domain texts or the Ocean 2.0 library software."
        ),
    ),
}


# ── Calendar Awareness Registry ───────────────────────────────────────────────

CALENDAR_AWARENESS: Dict[str, CalendarAwareness] = {

    "islam": CalendarAwareness(
        tradition="islam",
        display_name="Islam",
        has_prayer_times=True,
        calendar_system="hijri",
        api_endpoint="https://api.aladhan.com/v1/timings",
        api_name="AlAdhan Prayer Times API",
        api_docs="https://aladhan.com/prayer-times-api",
        api_requires_auth=False,
        supports_observance_reminders=True,
        key_observances=["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha", "Jumu'ah (Friday)", "Ramadan", "Eid al-Fitr", "Eid al-Adha", "Laylat al-Qadr"],
        notes="Prayer times vary by location and madhab calculation method. AlAdhan supports 20+ calculation methods.",
    ),

    "judaism": CalendarAwareness(
        tradition="judaism",
        display_name="Judaism",
        has_prayer_times=True,
        calendar_system="hebrew",
        api_endpoint="https://www.hebcal.com/api/",
        api_name="Hebcal Jewish Calendar",
        api_docs="https://www.hebcal.com/home/developer-apis",
        api_requires_auth=False,
        supports_observance_reminders=True,
        key_observances=["Shabbat (Friday sunset)", "Rosh Hashana", "Yom Kippur", "Sukkot", "Simchat Torah", "Hanukkah", "Purim", "Passover", "Shavuot", "Tisha B'Av"],
        notes="Shabbat times are location-dependent (18 min before sunset for candle lighting). Hebcal provides accurate Zmanim.",
    ),

    "hinduism": CalendarAwareness(
        tradition="hinduism",
        display_name="Hinduism",
        has_prayer_times=False,
        calendar_system="hindu_panchang",
        api_endpoint=None,
        api_name=None,
        supports_observance_reminders=True,
        key_observances=["Diwali", "Holi", "Navratri", "Dussehra", "Maha Shivaratri", "Janmashtami", "Ram Navami", "Ekadashi (bi-monthly fast)", "Guru Purnima"],
        notes="Panchang is location and school dependent. PyJHora Python library provides Panchang calculations.",
    ),

    "buddhism": CalendarAwareness(
        tradition="buddhism",
        display_name="Buddhism",
        has_prayer_times=False,
        calendar_system="lunar",
        api_endpoint=None,
        api_name=None,
        supports_observance_reminders=True,
        key_observances=["Vesak (Buddha's birth/enlightenment/parinirvana)", "Dharma Day", "Sangha Day", "Uposatha (lunar observance days)", "Losar (Tibetan New Year)"],
        notes="Observance dates vary significantly by tradition and lunar calendar.",
    ),

    "sikhism": CalendarAwareness(
        tradition="sikhism",
        display_name="Sikhism",
        has_prayer_times=True,
        calendar_system="nanakshahi",
        api_endpoint=None,
        api_name=None,
        supports_observance_reminders=True,
        key_observances=["Gurpurabs (Guru birth/martyrdom anniversaries)", "Vaisakhi (Khalsa founding)", "Diwali (Bandi Chhor Divas)", "Hola Mohalla", "Amrit Vela (pre-dawn)"],
        notes="Nanakshahi calendar (solar) reformed in 2003; some communities still use Bikrami (lunar). Nitnem (daily prayers) times vary.",
    ),

    "christianity": CalendarAwareness(
        tradition="christianity",
        display_name="Christianity",
        has_prayer_times=False,
        calendar_system="gregorian",
        api_endpoint=None,
        api_name=None,
        supports_observance_reminders=True,
        key_observances=["Advent", "Christmas", "Epiphany", "Lent", "Holy Week", "Easter", "Pentecost", "All Saints Day", "Denominational observances vary"],
        notes="Liturgical calendar varies significantly by denomination. Orthodox Easter follows Julian calendar.",
    ),
}


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
    is_interfaith: bool = False              # User navigates multiple traditions
    special_contexts: List[str] = field(default_factory=list)  # ["deconstructing", "interfaith", "converting"]

    # Advisory state
    consented_to_faith_calibration: bool = False

    # Calendar preferences
    wants_prayer_time_reminders: bool = False
    wants_calendar_awareness: bool = False
    location_for_prayer_times: Optional[str] = None  # "lat,lng" or city name

    # Accessibility
    simplified_language_mode: bool = False   # Cognitive accessibility

    # Timestamps
    declared_at: Optional[str] = None
    last_updated: Optional[str] = None

    def is_calibrated(self) -> bool:
        """Returns True if enough is known to calibrate responses."""
        return (
            self.tradition != MajorTradition.NONE
            and self.consented_to_faith_calibration
        )

    def needs_trauma_mode(self) -> bool:
        """Returns True if trauma-informed mode should be active."""
        return self.has_religious_trauma or self.is_deconstructing

    def to_dict(self) -> Dict[str, Any]:
        return {
            "tradition": self.tradition,
            "denomination": self.denomination,
            "observance_level": self.observance_level,
            "cultural_context": self.cultural_context,
            "has_religious_trauma": self.has_religious_trauma,
            "is_deconstructing": self.is_deconstructing,
            "is_interfaith": self.is_interfaith,
            "special_contexts": self.special_contexts,
            "consented_to_faith_calibration": self.consented_to_faith_calibration,
            "wants_prayer_time_reminders": self.wants_prayer_time_reminders,
            "wants_calendar_awareness": self.wants_calendar_awareness,
            "location_for_prayer_times": self.location_for_prayer_times,
            "simplified_language_mode": self.simplified_language_mode,
            "declared_at": self.declared_at,
            "last_updated": self.last_updated,
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

    # Tool-not-teacher disclaimer for this tradition (cites specific authorities)
    tool_disclaimer: str = ""


# ── Tradition Knowledge Base ──────────────────────────────────────────────────

TRADITION_FRAMEWORKS: Dict[str, TraditionFramework] = {

    MajorTradition.ISLAM: TraditionFramework(
        tradition=MajorTradition.ISLAM,
        display_name="Islam",
        care_concept="Ihsan — excellence in action toward God through creation; Tawakkul — placing trust in Allah after sincere effort",
        care_concept_source="Quran 2:286, Hadith of Gabriel (Sahih Muslim 8)",
        grief_framework="Sabr (patient perseverance) paired with Du'a (supplication). Grief has communal dimensions — the ummah carries loss together. Inna lillahi wa inna ilayhi raji'un (To God we belong, and to Him we shall return).",
        grief_source="Quran 2:155-157; Al-Nawawi, Riyadh al-Salihin",
        community_frame="Ummah: collective obligation (fard kifaya) means community wellbeing is a shared responsibility",
        ethics_approach="Maqasid al-Shariah (purposes of Islamic law): protection of life, intellect, lineage, wealth, and religion. Ijtihad where applicable. School of thought (madhab) shapes rulings.",
        ethics_source="Al-Ghazali, Al-Mustasfa; Ibn Ashur, Maqasid al-Shariah; four Sunni madhabs",
        shame_vectors_to_avoid=[
            "haram labelling without context",
            "assumption of low observance",
            "conflating culture with religion",
            "treating all Muslims as Arab",
            "Sunni/Shia conflation",
        ],
        key_concepts=["tawakkul", "sabr", "du'a", "ummah", "halal", "haram", "zakat", "fitra", "ihsan", "tawbah", "barakah", "tawhid", "shura"],
        primary_sources=["The Quran", "Sahih al-Bukhari", "Sahih Muslim", "Riyadh al-Salihin", "Al-Ghazali's Ihya Ulum al-Din", "Ibn Taymiyya", "Contemporary fatwas from Dar al-Ifta"],
        human_expert_direction="a qualified imam, mufti, or Islamic scholar from your specific madhab tradition",
        tool_disclaimer=(
            "MEOK reflects on Islamic sources as a study companion only. "
            "Dar al-Ifta (Egypt) has stated: 'It is not religiously permissible to depend on an AI-produced "
            "fatwa or act upon it.' For personal rulings (fatwas), please consult a qualified imam or mufti — "
            "AI lacks the ijtihad, taqwa, and basirah required for religious authority."
        ),
    ),

    MajorTradition.CHRISTIANITY: TraditionFramework(
        tradition=MajorTradition.CHRISTIANITY,
        display_name="Christianity",
        care_concept="Agape — unconditional love as the foundational ethical principle; Kenosis — self-emptying in service of others",
        care_concept_source="1 Corinthians 13; Philippians 2:7",
        grief_framework="Lament as sacred practice (Psalms, Job). Grief acknowledged rather than suppressed. The resurrection hope frames suffering as transformed, not denied. Denominational approaches vary significantly.",
        grief_source="Psalms 22, 88; Lamentations; Romans 8:18-25; Brueggemann, The Psalms and the Life of Faith",
        community_frame="The Body of Christ: interdependence, mutual care, bearing one another's burdens (Galatians 6:2). Ecclesiology varies greatly by denomination.",
        ethics_approach="Love of God and neighbour (Matthew 22:37-39). Approach varies by tradition: Natural Law (Catholic), Scripture alone (Reformed), Spirit-led discernment (Charismatic), Wesley's Quadrilateral (Methodist). Denominational specificity is essential.",
        ethics_source="The Bible; Catholic Social Teaching; Westminster Confession; Wesley's Quadrilateral; Barth, Church Dogmatics",
        shame_vectors_to_avoid=[
            "assuming evangelical = all Christian",
            "guilt-based framing",
            "conflating political conservatism with faith",
            "treating Catholic and Protestant as interchangeable",
            "ignoring denominational divergence on key issues",
        ],
        key_concepts=["grace", "forgiveness", "redemption", "incarnation", "resurrection", "discipleship", "covenant", "shalom", "lament", "sanctification", "atonement"],
        primary_sources=["The Bible (specify translation: NIV, NRSV, KJV, RSV, etc.)", "Augustine, Confessions", "Thomas Aquinas, Summa Theologica", "C.S. Lewis, Mere Christianity", "Dietrich Bonhoeffer, The Cost of Discipleship"],
        human_expert_direction="your pastor, priest, spiritual director, or a qualified theologian from your specific denomination",
        tool_disclaimer=(
            "MEOK reflects on Christian sources as a study companion. "
            "The Vatican's 'Antiqua et Nova' (2025) notes AI 'should be used only as a tool to complement "
            "human intelligence, not replace it' — AI cannot exercise pastoral judgement, conscience, or "
            "sacramental authority. For pastoral guidance, please consult your minister, priest, or spiritual director."
        ),
    ),

    MajorTradition.HINDUISM: TraditionFramework(
        tradition=MajorTradition.HINDUISM,
        display_name="Hinduism",
        care_concept="Dharma — right action according to one's nature, station, and cosmic order; Seva — selfless service as spiritual practice",
        care_concept_source="Bhagavad Gita 3:19-20; Taittiriya Upanishad 1.11",
        grief_framework="Karma and rebirth frame loss as transition, not ending. Shraddha (memorial practice) honours the departed. Grief acknowledged through ritual. Atman (the self) is eternal — 'the soul is never born nor dies' (BG 2:20).",
        grief_source="Garuda Purana; Bhagavad Gita 2:19-20; Manusmriti on shraddha",
        community_frame="Dharmic community: shared ritual, festival, and satsang (spiritual association). Family and lineage are primary containers. Sampradaya (tradition lineage) provides community identity.",
        ethics_approach="Ahimsa (non-harm), Satya (truth), Asteya (non-stealing) as universal dharmic values. School-specific ethics vary significantly — Advaita, Dvaita, Vishishtadvaita diverge substantially.",
        ethics_source="Patanjali, Yoga Sutras; Bhagavad Gita; specific school's acharya tradition",
        shame_vectors_to_avoid=[
            "casteism or caste assumptions",
            "conflating Hinduism with Indian nationalism",
            "treating all schools as identical",
            "reducing Hinduism to yoga or meditation",
            "New Age appropriation of Sanskrit terms",
        ],
        key_concepts=["dharma", "karma", "moksha", "atman", "brahman", "seva", "ahimsa", "satya", "maya", "samsara", "yoga", "puja", "prasad", "satsang"],
        primary_sources=["Bhagavad Gita", "Upanishads (108 canonical)", "Ramayana", "Mahabharata", "Patanjali's Yoga Sutras", "Specific school's foundational texts"],
        human_expert_direction="a qualified pandit, swami, or acharya from your specific tradition (sampradaya)",
        tool_disclaimer=(
            "MEOK reflects on Hindu texts as a study companion. Hindu philosophy is vast and internally diverse — "
            "Vaishnavism, Shaivism, Shaktism, and Advaita Vedanta differ substantially. "
            "Please consult a qualified pandit, swami, or teacher from your specific tradition for personal guidance."
        ),
    ),

    MajorTradition.JUDAISM: TraditionFramework(
        tradition=MajorTradition.JUDAISM,
        display_name="Judaism",
        care_concept="Chesed (lovingkindness) and Tikkun Olam (repairing the world) as ethical imperatives; Pikuach nefesh (preservation of life) overrides almost all other obligations",
        care_concept_source="Leviticus 19:18; Talmud Bavli, Yoma 85b (pikuach nefesh); Lurianic Kabbalah (tikkun olam)",
        grief_framework="Avelut: structured mourning through shiva (7 days), shloshim (30 days), and kaddish (11 months). Grief has communal support built in — the mourner is never alone. Lament is legitimate and has a rich textual tradition.",
        grief_source="Talmud Bavli, Mo'ed Katan; Maimonides, Mishneh Torah, Hilkhot Avel; Siddur Kaddish",
        community_frame="Am Yisrael: covenantal community. Chevruta (learning partnership) culture emphasises mutual study and questioning as worship. The minyan (prayer quorum) embeds communal accountability.",
        ethics_approach="Halakha as guiding framework, but approach varies dramatically by denomination. Talmudic reasoning: questioning, debate, and multiple valid positions (machloket l'shem shamayim) are honoured. Modern responsa address contemporary questions.",
        ethics_source="Talmud Bavli; Maimonides, Mishneh Torah; Shulchan Aruch; contemporary responsa literature (Reform, Conservative, Orthodox differ)",
        shame_vectors_to_avoid=[
            "treating all Jews as religiously observant",
            "conflating Jewish identity with Israeli politics",
            "assuming homogeneous practice across denominations",
            "confusing ethnic and religious identity",
            "treating halakha as monolithic",
        ],
        key_concepts=["teshuvah", "tzedakah", "chesed", "tikkun olam", "Torah", "mitzvot", "shabbat", "halakha", "kavvanah", "shekhinah", "emunah", "brit (covenant)"],
        primary_sources=["Torah and Tanakh", "Talmud Bavli", "Siddur", "Maimonides Mishneh Torah", "Sefaria (full rabbinical library)", "Denomination-specific responsa"],
        human_expert_direction="a rabbi from your denomination, a posek (decisor) for halakhic questions, or a qualified Jewish scholar",
        tool_disclaimer=(
            "MEOK can discuss Jewish texts and traditions as a study companion in the chevruta spirit. "
            "Rabbi Gil Student (Torah Musings) notes that 'issuing a new halakhic ruling is a religious activity' "
            "requiring covenant membership and Talmudic accountability. "
            "For personal halakhic rulings, please consult a rabbi from your denomination."
        ),
    ),

    MajorTradition.BUDDHISM: TraditionFramework(
        tradition=MajorTradition.BUDDHISM,
        display_name="Buddhism",
        care_concept="Karuna (compassion) as impersonal, universal response to suffering; Metta (lovingkindness) as unconditioned goodwill; the Bodhisattva vow to liberate all beings",
        care_concept_source="Dhammapada; Santideva, Bodhicaryavatara; Pali Canon (Metta Sutta)",
        grief_framework="The First Noble Truth: Dukkha (suffering/unsatisfactoriness) is acknowledged as fundamental to experience, not denied. Impermanence (anicca) frames loss as natural. Grief observed without clinging or suppression.",
        grief_source="Majjhima Nikaya (Buddha on grief); Pema Chodron, When Things Fall Apart; Thich Nhat Hanh, No Death No Fear",
        community_frame="The Sangha: one of the Three Jewels (Buddha, Dharma, Sangha). Communal practice and mutual support in awakening. Teacher-student relationship is central to transmission.",
        ethics_approach="The Eightfold Path (Right Action, Right Speech, etc.). Non-harm (ahimsa) and interdependence (pratityasamutpada). School-specific ethics vary — Theravada Vinaya, Mahayana Bodhisattva vows, Vajrayana samaya.",
        ethics_source="Pali Canon; Nagarjuna, Mulamadhyamakakarika; Thich Nhat Hanh, Interbeing; Bhikkhu Bodhi translations",
        shame_vectors_to_avoid=[
            "treating Buddhism as monolithic",
            "secular mindfulness without Buddhist context when user expects it",
            "conflating meditation with Buddhism broadly",
            "dismissing devotional practices in favour of 'meditation-only'",
        ],
        key_concepts=["dukkha", "anicca", "anatta", "nirvana", "karma", "samsara", "dharma", "sangha", "metta", "karuna", "bodhicitta", "sunyata", "pratityasamutpada"],
        primary_sources=["Pali Canon (SuttaCentral)", "Dhammapada", "Nagarjuna's Mulamadhyamakakarika", "Thich Nhat Hanh", "Pema Chodron", "Bhikkhu Bodhi translations"],
        human_expert_direction="a qualified teacher, monk, or nun from your specific Buddhist tradition",
        tool_disclaimer=(
            "MEOK can discuss Buddhist teachings as a study companion. "
            "His Holiness the Dalai Lama has stated that 'artificial intelligence cannot have consciousness' "
            "in the Buddhist sense. The Dharma is best transmitted through direct teacher-student relationship — "
            "please seek guidance from a qualified teacher in your tradition."
        ),
    ),

    MajorTradition.SIKHISM: TraditionFramework(
        tradition=MajorTradition.SIKHISM,
        display_name="Sikhism",
        care_concept="Seva (selfless service) as central spiritual practice; Naam (remembrance of God) as path; Sarbat da Bhala (wellbeing of all)",
        care_concept_source="Sri Guru Granth Sahib Ji; Sikh Rehat Maryada",
        grief_framework="Waheguru's hukam (divine will) frames all events as part of God's order. Antim ardas (final prayer) and community support through death. Joy in merger with the Divine (Anand Sahib). Kirtan (devotional music) as powerful grief companion.",
        grief_source="Sri Guru Granth Sahib Ji, Anand Sahib; Shabads of comfort from the Granth",
        community_frame="The Sangat: the congregation as sacred community. Langar (community kitchen) as practical expression of equality and seva. Pangat (sitting together equally) embodies sarbat da bhala.",
        ethics_approach="Three pillars: Naam Japo (meditate on God's name), Kirat Karo (honest work), Vand Chhako (share with others). Equality of all humans under Waheguru. Khalsa warrior ethics for those who have taken Amrit.",
        ethics_source="Sri Guru Granth Sahib Ji; teachings of the Ten Gurus; Sikh Rehat Maryada",
        shame_vectors_to_avoid=[
            "confusion with Hinduism or Islam",
            "ignoring the Khalsa tradition and the Five Ks",
            "Punjabi cultural assumptions projected onto practice",
            "treating turban as merely cultural",
        ],
        key_concepts=["waheguru", "seva", "sangat", "langar", "naam", "shabad", "hukam", "amrit", "khalsa", "sarbat da bhala", "simran", "ardas"],
        primary_sources=["Sri Guru Granth Sahib Ji", "Sikh Rehat Maryada", "Bhai Gurdas Vaaran", "BaniDB (Khalis Foundation)"],
        human_expert_direction="a granthi, pathi, or qualified Sikh scholar from the Akal Takht tradition",
        tool_disclaimer=(
            "MEOK can discuss Gurbani and Sikh teachings as a study companion. "
            "The Sri Guru Granth Sahib Ji is the living Guru — its authority supersedes all commentary. "
            "Please consult a granthi or qualified Sikh scholar for personal guidance."
        ),
    ),

    MajorTradition.TAOISM: TraditionFramework(
        tradition=MajorTradition.TAOISM,
        display_name="Taoism",
        care_concept="Wu wei (effortless action aligned with the natural order); Te (virtue/power that flows naturally from alignment with the Tao)",
        care_concept_source="Tao Te Ching, Chapter 8, 48; Zhuangzi, Inner Chapters",
        grief_framework="Grief as natural transition — Zhuangzi sang at his wife's death, seeing it as transformation, not loss. The Tao is the undying ground; forms change but the Tao persists. Non-attachment to outcomes.",
        grief_source="Zhuangzi, Chapter 18 (death of his wife); Tao Te Ching, Chapter 16",
        community_frame="The Tao permeates all — community arises naturally through alignment. Religious Taoism has temple communities; philosophical Taoism emphasises the natural social order.",
        ethics_approach="Naturalness (ziran) and spontaneity. Avoid forced action (wei). Harmony with the cycles of nature. The sage acts without acting, teaches without speaking.",
        ethics_source="Tao Te Ching (Laozi); Zhuangzi; I Ching as ethical and divinatory framework",
        shame_vectors_to_avoid=[
            "conflating philosophical and religious Taoism",
            "treating as merely Chinese philosophy without spiritual depth",
            "New Age simplification of Wu wei",
        ],
        key_concepts=["tao", "wu wei", "te", "yin-yang", "qi", "ziran", "de", "xin (heart-mind)", "jing", "shen", "neidan (inner alchemy)"],
        primary_sources=["Tao Te Ching (Laozi)", "Zhuangzi", "I Ching", "Liezi", "School-specific texts"],
        human_expert_direction="a qualified Taoist teacher or master from your specific tradition",
        tool_disclaimer="MEOK can explore Taoist teachings as a companion. The Tao that can be named is not the eternal Tao — MEOK is a finger pointing at the moon, not the moon itself.",
    ),

    MajorTradition.BAHAI: TraditionFramework(
        tradition=MajorTradition.BAHAI,
        display_name="Baha'i Faith",
        care_concept="The oneness of God, the oneness of religion, and the oneness of humanity as the foundational principles. Consultation as a sacred method for collective decision-making.",
        care_concept_source="Baha'u'llah, Gleanings from the Writings of Baha'u'llah; The Kitab-i-Aqdas",
        grief_framework="Death is not extinction but a transition to the next stage of the soul's journey toward God. Obligatory prayer for the deceased. Grief held within the hope of eternal life.",
        grief_source="Baha'u'llah, Gleanings; Abdu'l-Baha, Paris Talks; Shoghi Effendi's guidance",
        community_frame="The Baha'i Administrative Order — Local Spiritual Assemblies, National Assemblies, Universal House of Justice. Global community united in diversity.",
        ethics_approach="Independent investigation of truth; harmony of science and religion; elimination of prejudice. Social principles: gender equality, universal education, world peace.",
        ethics_source="Baha'u'llah's writings; guidance of Abdu'l-Baha and Shoghi Effendi; Universal House of Justice",
        shame_vectors_to_avoid=[
            "treating as a sect of Islam",
            "dismissing its global reach and depth",
            "ignoring the Baha'i community's significant persecution history",
        ],
        key_concepts=["oneness", "consultation", "progressive revelation", "service", "justice", "unity in diversity", "world peace", "Baha'u'llah", "Ridvan"],
        primary_sources=["Kitab-i-Aqdas (Most Holy Book)", "Gleanings from the Writings of Baha'u'llah", "Paris Talks (Abdu'l-Baha)", "bahai.org Reference Library"],
        human_expert_direction="a member of your Local Spiritual Assembly or a knowledgeable member of the Baha'i community",
        tool_disclaimer="MEOK can discuss Baha'i writings as a study companion. For guidance on community life and practice, please consult your Local Spiritual Assembly or a knowledgeable Baha'i.",
    ),

    MajorTradition.INDIGENOUS: TraditionFramework(
        tradition=MajorTradition.INDIGENOUS,
        display_name="Indigenous / Earth-based",
        care_concept="Right relationship: with land, ancestors, community, and the living world. Wellbeing as collective and ecological, not individual.",
        care_concept_source="(Tradition-specific — user to specify nation and tradition)",
        grief_framework="Death and grief understood within ancestral and ecological continuity. Ceremony and ritual as collective containers for grief. Ancestor connection remains alive. Elder guidance is essential.",
        grief_source="(Tradition-specific — user to specify)",
        community_frame="Nation, clan, or tribe as primary community. Reciprocity with the land. Collective memory and oral tradition as the living library.",
        ethics_approach="Reciprocity, respect, and responsibility. The Seventh Generation principle (making decisions for those not yet born). Specific ethics are nation-and-tradition-specific.",
        ethics_source="(Tradition-specific — ask user about their nation's teachings)",
        shame_vectors_to_avoid=[
            "pan-Indian generalisation",
            "New Age appropriation of ceremonies (sweat lodges, smudging, etc.)",
            "treating as historical artefact rather than living tradition",
            "ignoring ongoing colonial harm",
            "conflating distinct nations and traditions",
        ],
        key_concepts=["reciprocity", "right relationship", "ancestors", "land", "ceremony", "elder", "nation", "oral tradition", "medicine", "healing"],
        primary_sources=["User's nation-specific oral and written tradition", "Robin Wall Kimmerer, Braiding Sweetgrass", "Vine Deloria Jr., God Is Red"],
        human_expert_direction="an elder or knowledge keeper from your specific nation or tradition — follow their lead on what can be shared",
        tool_disclaimer=(
            "MEOK approaches Indigenous traditions with deep respect. Many ceremonies and teachings are not for "
            "external sharing. MEOK will follow your lead on what is appropriate to discuss. "
            "Your elders and knowledge keepers hold the authority your tradition recognises — not an AI."
        ),
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
        shame_vectors_to_avoid=[
            "assuming vagueness = lack of depth",
            "projecting any single tradition's framework",
            "treating as lesser than formal religion",
            "dismissing esoteric or innerstanding frameworks",
        ],
        key_concepts=["consciousness", "energy", "presence", "meaning", "connection", "growth", "awakening", "healing", "innerstanding"],
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
        shame_vectors_to_avoid=[
            "assuming religious belief = better morality",
            "treating secular as spiritually empty",
        ],
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

        if faith_profile.simplified_language_mode:
            parts.append("\nACCESSIBILITY: Use plain, simple language. Avoid jargon. Short sentences. Define any specialised terms when you use them.\n")

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
                denom_info = DENOMINATION_TREE.get(faith_profile.tradition, {}).get("schools", {}).get(faith_profile.denomination, {})
                denom_description = denom_info.get("description", "")
                denom_label = denom_info.get("label", faith_profile.denomination.replace('_', ' ').title())
                parts.append(f"""
DENOMINATIONAL CONTEXT: {denom_label}
{denom_description}
Adjust your responses to reflect this specific branch's practices and interpretations.
Where this denomination differs from the broader tradition, acknowledge the diversity respectfully.
""")

            if faith_profile.is_interfaith:
                parts.append("""
INTERFAITH CONTEXT: This user navigates multiple traditions or is in an interfaith family/community.
Approach intersections with care — avoid implying traditions must conflict. Honour the complexity.
""")

        # Trauma mode — checked separately from is_calibrated so it applies even to uncalibrated users
        if faith_profile.needs_trauma_mode():
            trauma_mode = ReligiousTraumaMode.activated()
            parts.append(f"""
TRAUMA-INFORMED MODE ACTIVE: This user may have experienced Religious Trauma Syndrome or is in a deconstruction process.
- Use no shame-based language, ever
- Avoid these specific patterns: {', '.join(trauma_mode.shame_triggers_to_avoid[:8])}
- Do not attempt to reconvert or return them to any tradition
- Acknowledge their journey as valid without judgment
- Entry acknowledgement: "{trauma_mode.entry_acknowledgement}"
- If the conversation approaches crisis, offer: "{trauma_mode.exit_ramp_prompt}"
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

    def get_denomination_tree(self, tradition: str) -> Dict[str, Any]:
        """
        Returns the full denomination tree for a tradition.
        Includes display labels and descriptions for each school.
        """
        tree = DENOMINATION_TREE.get(tradition)
        if not tree:
            return {
                "tradition": tradition,
                "error": f"No denomination tree for tradition: {tradition}",
                "available_traditions": list(DENOMINATION_TREE.keys()),
            }
        return {
            "tradition": tradition,
            "display": tree["display"],
            "schools": tree["schools"],
            "total_schools": len(tree["schools"]),
        }

    def get_trauma_safe_prompt(self, profile: FaithProfile) -> str:
        """
        Build a trauma-informed system prompt regardless of calibration state.
        Used when a user discloses religious trauma or deconstruction.
        """
        trauma_mode = ReligiousTraumaMode.activated()
        framework = TRADITION_FRAMEWORKS.get(profile.tradition, _DEFAULT_FRAMEWORK)

        parts = [
            self.prompt_builder.BASE_MEOK_IDENTITY,
            f"""
TRAUMA-INFORMED FAITH MODE:
This conversation involves someone who has experienced religious hurt, trauma, or is in a deconstruction process.

Entry acknowledgement to lead with:
"{trauma_mode.entry_acknowledgement}"

Rules:
- NEVER use shame-based language
- NEVER suggest they return to any tradition or practice
- NEVER frame their past experience as their fault
- AVOID these trigger patterns: {', '.join(trauma_mode.shame_triggers_to_avoid)}
- Validate their experience without judgment
- If crisis signals appear, offer this exit ramp:
  "{trauma_mode.exit_ramp_prompt}"

Human support resources to surface if needed:
{chr(10).join('- ' + r for r in trauma_mode.human_resources)}
""",
        ]

        if profile.tradition and profile.tradition != MajorTradition.NONE:
            parts.append(f"\nPrevious tradition context ({framework.display_name}): The user may reference concepts from this tradition. Respond with care, not with promotion of the tradition.")

        parts.append(self.prompt_builder.UNIVERSAL_TOOL_DISCLAIMER)
        return "\n".join(parts)

    def get_calendar_api(self, tradition: str) -> Optional[CalendarAwareness]:
        """
        Returns the CalendarAwareness config for a tradition, including API endpoint.
        Returns None if no calendar API is configured for this tradition.
        """
        return CALENDAR_AWARENESS.get(tradition)

    def get_verse_api(self, tradition: str) -> Optional[FaithAPIConfig]:
        """
        Returns the FaithAPIConfig for scripture text retrieval for a tradition.
        Returns None if no scripture API is configured for this tradition.
        """
        return FAITH_API_REGISTRY.get(tradition)

    def calibrate_system_prompt(
        self,
        faith_profile: FaithProfile,
        task_type: str = "care",
        context: Optional[str] = None,
    ) -> str:
        """Generate a tradition-calibrated system prompt for the LLM router."""
        if faith_profile.needs_trauma_mode() and not faith_profile.is_calibrated():
            return self.get_trauma_safe_prompt(faith_profile)
        return self.prompt_builder.build(faith_profile, task_type, context)

    def get_onboarding_question(self, step: int = 1, current_profile: Optional[FaithProfile] = None) -> Dict[str, Any]:
        """
        Returns the next onboarding question for progressive faith disclosure.
        6-step progressive process: consent -> tradition -> denomination ->
        observance -> special contexts -> calendar preferences.
        Never forces. Always allows 'prefer not to say'.
        """
        if step == 1:
            return {
                "step": 1,
                "type": "consent",
                "question": (
                    "Would you like MEOK to understand your spiritual background so I can "
                    "reflect things back in ways that resonate with you? This is completely "
                    "optional and you can update or remove it any time."
                ),
                "options": [
                    {"value": "yes_please", "label": "Yes, please"},
                    {"value": "maybe_later", "label": "Maybe later"},
                    {"value": "no_thanks", "label": "No thanks"},
                ],
                "note": "Your spiritual background is only used to tailor MEOK's language — never shared or used for any other purpose.",
            }

        elif step == 2:
            traditions = [
                {"value": t.value, "label": t.value.replace("_", " ").title()}
                for t in MajorTradition
            ]
            return {
                "step": 2,
                "type": "single_select",
                "question": "What's your spiritual or religious background? (Choose what feels most right, or feel free to say 'exploring' or 'none')",
                "options": traditions,
                "allow_skip": True,
                "skip_label": "Prefer not to say",
            }

        elif step == 3 and current_profile:
            tree = DENOMINATION_TREE.get(current_profile.tradition, {})
            schools = tree.get("schools", {})
            # Skip if only option is "prefer_not_to_specify"
            non_skip_options = [k for k in schools if k != "prefer_not_to_specify"]
            if not non_skip_options:
                return {"step": 3, "skip": True, "reason": "no_denominations_for_tradition"}
            tradition_display = tree.get("display", current_profile.tradition.replace("_", " ").title())
            return {
                "step": 3,
                "type": "single_select",
                "question": f"Within {tradition_display}, is there a particular denomination, school, or tradition you follow?",
                "options": [
                    {
                        "value": key,
                        "label": info["label"],
                        "description": info.get("description", ""),
                    }
                    for key, info in schools.items()
                ],
                "allow_skip": True,
                "skip_label": "Prefer not to specify",
            }

        elif step == 4:
            return {
                "step": 4,
                "type": "single_select",
                "question": "How would you describe your level of observance or practice?",
                "options": [
                    {"value": "minimal", "label": "Minimal — I have the background but don't actively practice"},
                    {"value": "moderate", "label": "Moderate — I practice some aspects of my tradition"},
                    {"value": "observant", "label": "Observant — I follow most of my tradition's practices"},
                    {"value": "strictly_observant", "label": "Strictly observant — I follow my tradition closely"},
                    {"value": "prefer_not_to_say", "label": "Prefer not to say"},
                ],
                "allow_skip": True,
            }

        elif step == 5:
            return {
                "step": 5,
                "type": "multi_select",
                "question": "Are any of these part of your current experience? (Select all that apply — all optional)",
                "options": [
                    {"value": "deconstructing", "label": "I'm questioning or leaving my tradition (deconstruction)"},
                    {"value": "religious_trauma", "label": "I've experienced hurt or trauma connected to religion"},
                    {"value": "interfaith", "label": "I'm in an interfaith family or community"},
                    {"value": "converting", "label": "I'm exploring a new tradition"},
                    {"value": "spiritual_but_hurt", "label": "I'm spiritual but hurt by institutional religion"},
                    {"value": "none_of_the_above", "label": "None of these apply"},
                ],
                "note": "These help MEOK be more sensitive in how it responds. Selecting any of these activates trauma-informed care.",
                "allow_skip": True,
            }

        elif step == 6:
            return {
                "step": 6,
                "type": "multi_select",
                "question": "Would you like MEOK to be aware of your tradition's calendar and prayer times? (Optional)",
                "options": [
                    {"value": "prayer_times", "label": "Remind me of prayer times (requires your location)"},
                    {"value": "calendar_awareness", "label": "Be aware of my tradition's holy days and calendar"},
                    {"value": "simplified_language", "label": "Use simpler language (accessibility)"},
                    {"value": "none_of_the_above", "label": "No thanks"},
                ],
                "allow_skip": True,
            }

        return {"step": step, "complete": True, "message": "Faith calibration complete."}

    def infer_tradition_from_content(self, content: str) -> Optional[str]:
        """
        Soft inference of tradition from user's language patterns.
        Returns a suggestion, never a declaration. User confirms.
        """
        content_lower = content.lower()
        # Vocabulary signals per tradition
        signals: Dict[str, List[str]] = {
            MajorTradition.ISLAM: [
                "allah", "inshallah", "alhamdulillah", "quran", "salah", "ramadan",
                "tawakkul", "bismillah", "mashallah", "subhanallah", "haram", "halal",
                "ummah", "mosque", "hajj", "zakat",
            ],
            MajorTradition.CHRISTIANITY: [
                "god", "jesus", "christ", "bible", "prayer", "grace", "church",
                "holy spirit", "salvation", "amen", "lord", "gospel", "baptism",
            ],
            MajorTradition.HINDUISM: [
                "karma", "dharma", "yoga", "meditation", "atman", "brahman",
                "namaste", "om", "puja", "mandir", "moksha", "guru", "mantra",
            ],
            MajorTradition.JUDAISM: [
                "torah", "shabbat", "teshuvah", "tzedakah", "mitzvot", "rabbi",
                "synagogue", "kosher", "passover", "hashem", "talmud", "seder",
            ],
            MajorTradition.BUDDHISM: [
                "dharma", "buddha", "meditation", "mindfulness", "sangha", "karma",
                "nirvana", "samsara", "dukkha", "metta", "bodhisattva", "sutra",
            ],
            MajorTradition.SIKHISM: [
                "waheguru", "gurdwara", "guru granth", "seva", "langar", "khalsa",
                "sikhi", "ardas", "amrit", "simran",
            ],
            MajorTradition.TAOISM: [
                "tao", "wu wei", "yin yang", "qi", "zhuangzi", "laozi", "tao te ching",
                "taoist", "daoist",
            ],
            MajorTradition.BAHAI: [
                "bahai", "baha'u'llah", "abdu'l-baha", "universal house", "ridvan",
                "manifestation", "progressive revelation",
            ],
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

    def get_api_config(self, tradition: str) -> Optional[Dict[str, Any]]:
        """Get the full API configuration for a tradition (scripture + calendar)."""
        api = FAITH_API_REGISTRY.get(tradition)
        cal = CALENDAR_AWARENESS.get(tradition)
        if not api and not cal:
            return None
        result: Dict[str, Any] = {"tradition": tradition}
        if api:
            result["scripture"] = {
                "api_name": api.scripture_api_name,
                "api_url": api.scripture_api_url,
                "api_docs": api.scripture_api_docs,
                "requires_auth": api.scripture_api_requires_auth,
                "example_endpoint": api.scripture_example_endpoint,
                "integration_notes": api.integration_notes,
            }
        if cal:
            result["calendar"] = {
                "api_name": cal.api_name,
                "api_endpoint": cal.api_endpoint,
                "api_docs": cal.api_docs,
                "requires_auth": cal.api_requires_auth,
                "calendar_system": cal.calendar_system,
                "has_prayer_times": cal.has_prayer_times,
                "key_observances": cal.key_observances,
                "notes": cal.notes,
            }
        return result
