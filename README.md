# Get PR action

This action get pull request associated with the commit.

## Inputs

### `repo-token`

**Required** The repository token, i.e. `secrets.GITHUB_TOKEN`

## Outputs

### `pull_request`

The pull request associated with the commit

## Example usage

```
uses: shioyang/get-pr-action@v2.0.2
with:
  repo-token: ${{ secrets.GITHUB_TOKEN }}
```
