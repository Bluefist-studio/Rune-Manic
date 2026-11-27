# Rune Manic

## Current step: playable prototype

The JavaScript engine in `src/engine.js` models two players' hands, a 4-, 6-, or 8-rune battlefield, movement, basic upgrades, combat, and victory. Each player's slots 0-3 are the frontline; slots 4-7 are the corresponding backline positions, with at most four runes in either line. `getLegalActions(game)` lists turn actions and `applyAction(game, action)` returns a new state. Concession is a separate, turn-independent action, `{ type: "concede", player: 0 or 1 }`, and is not included in the AI's turn choices.

The catalog in `src/cards.js` contains all 47 playable card designs, including Focus, the four Rank 1 expansion runes, the first eight Rank 2 expansion runes, Berserk, Execution, Infusion, Command, and Transpose, with their original artwork paths and implemented attributes. Uprising stats require its owner as the second argument to `getRuneStats`. The engine rejects unsupported attributes rather than silently ignoring them.

Execution (Rank 4) uses a normal attack from the frontline: if the target's current HP is below its current maximum HP and it is not Intangible, it is destroyed without retaliation. Losing temporary HP alone does not make a target wounded; a successful Deflecting roll prevents Execution.

Transpose (Rank 3) uses an action from the frontline to swap two eligible opposing runes chosen by its controller. Both positions must be legal; a backline rune needs its corresponding frontline occupied unless it is Phantom. Intangible and backline Cloak cannot be selected. Transpose ignores Snare and does not consume either target's normal movement.

Berserk (Rank 3) has no HP bonus; each damage marker gives it +1 attack, and healing removes the marker and its attack bonus. Losing temporary HP does not increase its attack.

Infusion uses an action to give another friendly rune +2 attack until the start of its owner's next turn. Infusion pays 1 HP, temporary HP first, and may pay its last HP; its bonuses stack.

Command can refresh an ally that already used its action, granting one more attack, attribute, or upgrade; movement remains separate. Command can let Frenzy exceed its normal two-attack cap.

**This is a prototype.** Two local players can choose prebuilt decks or build their own from the playable cards. The separate Reach Major image is excluded per the designer's ruling. Some tests use fictional cards as isolated rule fixtures, not as game content.

## Run the browser prototype

Open `index.html` in a desktop browser. Keep the `dist`, `src`, and `Cards online` folders alongside the HTML file.

From the main menu, choose **New game**, then select **Local two-player** or **Play against AI**, choose a game format (4 runes by default, 6, or 8 per player), and choose a deck for each player. Each line remains limited to four runes, and the opening player may play up to the selected format's total on the first turn. Both decks initially default to **Random deck**. Deck selections, including unsaved custom decks, remain selected between games until the page is refreshed. **Random deck** remains selected and chooses again each game. Use **Build / edit** to customize either player's deck before starting. Against the AI, you play as Player 1; select its difficulty and deck in setup. Both AI difficulties use legal engine actions and simple board evaluations; neither guarantees optimal play.

Choose who goes first in game setup. The default is **Random**, which chooses either player equally and shows the result in the action history. Against the AI, choose **AI** to play second; in local games, either player can start. After a draw, the player who went second starts the next round.

The experimental first-turn upgrade rule is enabled by default: the player going second may upgrade each newly played rune once on their first turn, but those runes cannot attack or use an active attribute. To restore the original rule, set `ALLOW_SECOND_PLAYER_FIRST_TURN_UPGRADE` to `false` in `src/engine.js`, run `npm run build`, and refresh the game. Set it back to `true` and rebuild to enable the variant again.

Choose **Concede** in the turn panel and confirm to end the game and award the win to the opponent. In local play, the current player concedes; against the AI, Player 1 can concede even on the AI's turn. A concession in a Learning game counts as a completed loss for Player 1.

The experimental **Learning** difficulty explores legal actions and adjusts a small set of strategic weights after each completed game against it. Its model remains fixed during a game; abandoned games, Basic games and local two-player games do not train it. All AI opponents skip moves they can identify as equivalent to staying put, while preserving tactically different moves. Learning favors staying put over needless repositioning, balancing movement choices against other actions rather than treating every possible move as a separate reason to move. It still explores potentially useful moves. Wins and losses are noisy, so it may play worse after an update and improvement is not guaranteed. Learning requires a current desktop browser with local storage and cross-tab coordination support.

Choose **Learning AI settings** from the main menu to see completed games and wins, export or import a JSON model, or reset it. Import replaces the current model after confirmation; reset and import are unavailable during a Learning game or while a result is pending. The model stores weights and aggregate statistics, not match histories. It is local to the browser and its storage origin: another browser, device, or address may have separate data. Clearing browser site data deletes it unless exported. If saving fails or another tab changes the model during a match, the battlefield displays retry and export options. Export the pending model before discarding it or starting a new game; after discarding, import that file to replace the existing model.

**Level 30**, **Level 40**, **Level 80**, **Level 100** and **Level 150** are built into the AI difficulty menu and do not depend on browser storage. In **Learning AI settings**, enter a name and choose **Save current AI as opponent** to preserve the currently saved model. Choose that named opponent in the AI difficulty menu when starting a game. Use **Delete** beside a saved opponent to remove it after confirmation. Saved opponents do not learn from matches and are unaffected by later training, imports or resets. Improvements to the shared AI decision rules apply to saved opponents without changing their saved weights. Saved opponents are stored in the same browser and address as the Learning AI; clearing browser site data deletes them. Saving and deleting are unavailable during an unfinished Learning game or while its update is pending. To back up a particular version, export the current Learning AI model before it changes.

Choose **Random deck** for either player to select independently from all prebuilt and saved decks when the game starts. Unsaved custom decks are not included. The selected deck names appear at the start of the game.

Choose **Generate random deck** in game setup or the deck builder to create a new 24-rank deck. Each generated upgrade has its own compatible lower-rank chain, and each deck starts with at least six rank 1 runes. Generated decks can be edited and saved in the deck builder. Generating replaces the current custom deck or builder contents; it does not overwrite saved decks.

The prebuilt decks are Arcane, Specter, Standfast, and Uprising from the rulebook, plus Mixed and Brawling Uprising, using the current card designs. Arcane replaces two Deflecting with Mending and uses Lightning and Acid in place of the older rank-2 Mending cards, as clarified by the designer; the older rank-3 Fire is Fire Ball.

Choose **Build a deck** from the main menu to create or edit a deck independently. Use the sort menu and rank/color filters to find cards; each filter matches any selected value, and different filters combine. **In current deck only** shows cards already added. Use + and − to change card quantities, enter a name, and choose **Save deck**. Saved decks are stored locally in the same browser and can be selected in a later game; clearing browser site data removes them. Saving under an existing name asks before replacing it. Decks can contain repeated cards, must contain a rank 1 rune, and cannot exceed 24 total ranks. Unsaved custom decks can also be used from game setup. Refreshing resets the current game but not saved decks.

In the deck builder, open **Import / export text deck list** to copy the current deck or paste a list and import it. Use one card per line, such as `2x Mending` or `1 Fire`; a name without a quantity means one copy. Import replaces the current draft after confirmation and does not save it automatically.

Matching cards in the hand overlap in a stack, with the top card selectable and the number of copies shown. Select a hand card and a highlighted position, or drag the card onto that position, to play or upgrade. Drag a friendly rune to a highlighted friendly position to move or swap it. Alternatively, select a friendly rune to open its action wheel on the card, then choose Move, Attack, or Attribute and a highlighted target; the sidebar buttons remain available. The wheel's center X cancels the selection. For Masterful, Bolt and Double Bolt, choose how many hit points to trade in the pop-up, then select an enemy once for each damage point; select the same enemy repeatedly to assign it multiple points. Use **Undo last target** to revise an unfinished selection. Bolt and Double Bolt can use their attribute from either row, and resolve all damage assigned to each target as one hit; Masterful resolves each point as a separate hit. Trading the last hit point destroys the rune. Leech restores 1 HP once per positive combat hit it deals, whether attacking or retaliating; damage to temporary HP counts, and Leech must survive the full exchange to heal. Martyr uses its action from either row to sacrifice itself and refresh an ally that already used an action this turn; upgrading counts, but playing does not, and movement remains separate. Recall uses an action from either row to return another friendly rune from either row, with its full upgrade stack, to your hand; a vacated frontline promotes its backline. Snare uses an action from either row to prevent an eligible enemy from moving or swapping during its next turn; it does not prevent other actions. Splinter automatically damages other enemy runes when it deals damage in combat, whether attacking or defending. Amplifying gives another friendly rune +1 attack until its owner's next turn; multiple bonuses stack. Soulbind uses an action from either row to protect another friendly rune until its next turn; its defenses apply first, then any HP loss (including ability costs) is redirected to Soulbind without overflow. Only one Soulbind can protect a rune at a time, and the newest link replaces the previous one. For Acid, select the required distinct targets; selecting a target again removes it, and the attribute resolves when all targets are chosen. For Fire Ball, select the main target; all other enemy runes are hit automatically. Deflecting rolls automatically when attacked or hit by a damaging attribute; the result appears in the action message. Lightning deals normal combat damage and disables the opposing rune through the end of its next full turn when attacking or defending; a successful deflection against its attack prevents both damage and disable, and Intangible is immune. Frontline Spectral can disable an enemy until its owner's next turn, unless Spectral is destroyed, upgraded or moved to the backline; Intangible is immune. Disabled runes cannot move, swap, upgrade or act, but retain their defensive effects. Soul heals damage before gaining temporary health, which absorbs damage first and cannot be restored once lost. A surviving, enabled Necrotic automatically rolls when another friendly rune is destroyed; on 3+ it adds a Haunting rune to its owner's hand. End turn passes the device to the other player. You may inspect an opponent's rune by selecting it.

The hand defaults to sorting by rank. Use **Sort** to switch between rank and color order. Color order groups runes by their complete color combination, with ranks ascending within each group; multicolor runes appear once, not once per color.

The opponent's remaining hand count is shown above their battlefield without revealing their cards.

Right-click the game to cancel the current selection, including an unfinished attribute target selection.

Occupied battlefield columns group together visually and face the other player's group. Empty positions appear while selecting or dragging a move, or when they are valid places to play a selected hand card. When a rune enters an empty frontline position, it remains on the selected side as the group re-centers. With three frontline runes, **Frontline 5** is an alternative for playing the fourth rune on the right; it uses the same logical position as the empty slot on the left and does not increase the four-rune limit. This visual arrangement does not move runes in the game: slot labels retain their original numbers, and each backline remains behind its corresponding frontline.

Effects such as Haunted and Disabled appear in a fixed area above each rune's artwork; health and action availability remain below. Status changes do not move the battlefield. If unusually many labels do not fit, scroll within their area or select the rune for details.

The battlefield and hand adapt to the desktop window's height; the side panels scroll independently when their contents need more space. The hand box stays a consistent width as cards are played, narrowing when needed to fit between the side panels.

After four consecutive turns without meaningful progress, the round is a draw. Playing, upgrading, damaging, healing or destroying a rune, or changing an attribute status (including an effect expiring at a turn change), resets the counter. Movement alone and actions that have no effect do not.

On your turn, choose **Offer draw** in the turn panel and confirm to ask the opponent to accept or decline. In local play, pass the device while the current hand is hidden; a declined offer returns to the same turn. The AI accepts when its board evaluation is no better than its opponent's, after both players have completed a turn.

On your runes, ○ means movement or action is available; ✓ means it has already been used this turn. Newly played runes have already used their action, except that an eligible second-player first-turn upgrade is shown as **UPGRADE ○**.

Hover over or focus an available target to preview a red attack arrow or gold attribute arrow. Multi-target attribute selections stay linked while you choose them.

Mending can heal only damaged friendly runes, including itself and friendly backline runes. Enemy attributes cannot select Intangible when they cannot affect it. Mending and friendly Amplifying can still target friendly Intangible, and normal attacks remain available. Acid selects up to three eligible enemies; Fire Ball's automatic secondary damage still includes all other enemies, but cannot damage Intangible.

Dashed violet arrows point from an active Spectral to the rune it disables; solid teal arrows point from an active Amplifying rune to its target. Select either rune to see the connection in Rune Details. Effects without a source still on the battlefield remain visible as status labels.

At the start of its owner's turn, Focus chooses a friendly non-Focus rune's attribute or none without spending its action. The choice remains until the next turn even if the source leaves or upgrades. A disabled Focus automatically chooses none; losing a copied health bonus can destroy it.

Select a rune in the hand or battlefield and choose **More info** in Rune Details to see its clarified rules and interactions. Focus also shows the rules for its currently copied attribute. The panel includes expandable general game rules.

Choose **?** in the top-right corner of the turn panel for a quick guide during a game.

After a game ends, choose **New game** on the result screen to go directly to setup, or **View battlefield** to inspect the result. Setup offers the current AI log for download before it is replaced. Starting a new game after a finished round only requires confirmation if a learning update is unsaved; replacing an unfinished game still asks for confirmation.

Transmute can upgrade any rank 1 rune, regardless of colour, and can itself be upgraded to any rank 3 rune. Upgrades must still advance exactly one rank.

The action history records both players' moves, attacks, attributes, dice rolls, health changes, destroyed runes, turn changes, and victory. Scroll the history to review earlier actions; it resets when a new game starts.
If both players lose their last battlefield runes simultaneously, the round is a draw. A Spectral stalemate also draws when each player has one rune, Spectral disables its opponent, neither player has a rank 1 card in hand, Spectral has no upgrade available, and attacking would destroy Spectral but not its target. Deflecting and Focus targets are excluded because their effects can change the outcome. Choose **Play next round** to replay with the same decks and the other player starting. Action history and AI logs are retained; Learning AI updates only when a round produces a winner.
In an AI game, **Download AI log** in the action history saves a JSON file for analysis, even before the game ends. It includes both players' hands and full game states, actual actions and dice rolls, and each AI decision's legal candidates, scores and simulated sample rolls. Learning games also record the model, decision probabilities, features and update status. Simulated rolls are not actual dice results. Share the file only with people you trust. The log stays in memory only: download it before refreshing or starting a new game, or it will be lost.
Runes slide when moving or swapping and lunge at their targets when attacking. Destroyed runes flash and fade, then any surviving rune behind them slides forward. Turn changes highlight the current player on the battlefield and in the turn indicators; local games also show a pass-the-device screen. Action and deflection rolls appear before their effects; Necrotic rolls appear after destruction. A victory pop-up can be dismissed to inspect the battlefield. Animations respect the browser's reduced-motion preference.

For development, run the tests and rebuild the browser bundle with Node.js:

```text
npm test
npm run build
```
