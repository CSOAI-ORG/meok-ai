'use client'

// MEOK OpenPatent Catalog Widget
// 17 government APIs + 1.13B records, $8-15/patent
// MIT licensed

const GOV_APIS = [
  { name: 'PubMed',          records: '36M citations',    url: 'pubmed.ncbi.nlm.nih.gov',   free: true },
  { name: 'arXiv',           records: '2.4M papers',      url: 'arxiv.org',                free: true },
  { name: 'CrossRef',        records: '150M DOIs',        url: 'crossref.org',             free: true },
  { name: 'OpenAlex',        records: '250M works',       url: 'openalex.org',             free: true },
  { name: 'NCBI Entrez',     records: '40M records',      url: 'ncbi.nlm.nih.gov/gquery',  free: true },
  { name: 'PubChem',         records: '110M compounds',   url: 'pubchem.ncbi.nlm.nih.gov',  free: true },
  { name: 'Lens.org',        records: '250M patents',     url: 'lens.org',                 free: true },
  { name: 'Google Patents',  records: '120M patents',     url: 'patents.google.com',       free: true },
  { name: 'NIH Reporter',    records: '3M grants',        url: 'reporter.nih.gov',         free: true },
  { name: 'USPTO',           records: '12M patents',      url: 'uspto.gov',                free: true },
  { name: 'EPO',            records: '8M patents',       url: 'worldwide.espacenet.com',  free: true },
  { name: 'WIPO',           records: '5M PCT',           url: 'wipo.int',                 free: true },
  { name: 'UK IPO',         records: '3M patents',       url: 'ipo.gov.uk',               free: true },
  { name: 'DE DPMA',        records: '2M patents',       url: 'dpma.de',                  free: true },
  { name: 'JP JPO',         records: '5M patents',       url: 'jpo.go.jp',                free: true },
  { name: 'CNIPA',          records: '8M patents',       url: 'cnipa.gov.cn',             free: true },
  { name: 'KR KIPO',        records: '2M patents',       url: 'kipo.go.kr',               free: true },
];

export function OpenpatentCatalog() {
  const totalRecords = '1.13B';
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <h3 className="text-lg font-bold mb-3 text-amber-300">📜 OpenPatent · 17 Gov APIs · {totalRecords} records</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {GOV_APIS.map((api) => (
          <div key={api.name} className="bg-slate-800/50 rounded p-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-amber-300 font-bold">{api.name}</span>
              {api.free && <span className="bg-green-500/20 text-green-300 px-1 rounded text-[10px]">free</span>}
            </div>
            <div className="text-slate-300">{api.records}</div>
            <a href={`https://${api.url}`} target="_blank" rel="noopener noreferrer"
               className="text-slate-400 text-[10px] hover:text-amber-300">{api.url}</a>
          </div>
        ))}
      </div>
      <div className="mt-3 p-2 bg-amber-500/10 border border-amber-500/30 rounded text-xs text-amber-200">
        💰 $8-15/patent · 1-2 hours from idea to filing · 100+ filing formats
      </div>
    </div>
  );
}

export default OpenpatentCatalog;
