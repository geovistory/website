export function getOntoExlorerUrl(projectId: number, title: string) {
    const queryParamsOntoExplorer = new URLSearchParams();
    queryParamsOntoExplorer.append(
        'endpoints',
        JSON.stringify([{
            name: title,
            url: `https://sparql.geovistory.org/api_v1_project_${projectId}`,
        }])
    );
    return `https://ontoexplorer.geovistory.org/?${queryParamsOntoExplorer.toString()}`;
}