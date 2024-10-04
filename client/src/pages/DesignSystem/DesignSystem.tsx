import Tag from "@/components/_atoms/Tag";
import { useState } from "react";

export default function DesignSystem() {
    const today = new Date().toISOString().split("T")[0];
    const [selectedDate] = useState(today);

    return (
        <div className="page-ds-layout">
            <div>
                <div>
                    <h1 className="h1">Heading 01</h1>
                    <p>Sert à donner un nom à la page. Il y a un seul texte dans ce style par page.</p>
                    <h2>Heading 02</h2>
                    <p>Sert à donner des titres de niveau de la page.</p>
                    <h3>Heading 03</h3>
                    <p>Sert pour les sous-titres.</p>
                    <h4>Heading 04</h4>
                    <p>Sert pour donner des titres à des paragraphes.</p>
                    <h5>Heading 05</h5>
                    <p>Sert pour les label de formulaires.</p>
                </div>
                <div>
                    <blockquote className="quote1">Quote 01</blockquote>
                    <p>Sert à mettre en valeur des accroches.</p>
                    <blockquote className="quote2">Display 02</blockquote>
                    <p>Sert à mettre en valeur des citations.</p>
                </div>
                <div>
                    <p className="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, pretium in cursus at, gravida tincidunt leo. Fusce lacinia vel ipsum non iaculis. Etiam iaculis posuere sapien. Sed faucibus, sapien nec rhoncus eleifend, leo libero laoreet dui, ut porttitor justo ante quis lacus. Nunc in scelerisque arcu. Mauris efficitur libero mi, quis condimentum elit ullamcorper ac. Fusce ac odio at nunc ultrices pretium ut ac augue. Pellentesque porttitor egestas tellus, et hendrerit tellus sodales et. Vivamus sed neque turpis. Praesent feugiat, quam id congue sollicitudin, enim orci condimentum enim, quis ullamcorper orci elit non nibh. Pellentesque lacus ex, lobortis vitae neque at, aliquam bibendum ligula. Mauris venenatis lorem in vestibulum vestibulum. Sed quis facilisis elit.                     </p>
                    <p>
                        Paragraphes de texte.
                    </p>
                </div>
                <div>
                    <figure>
                        <img src="https://placehold.co/600x400" alt="empty placeholder" />
                        <figcaption>Caption — Détails</figcaption>
                    </figure>
                    <p>
                        Image et caption.
                    </p>
                </div>
                <div>
                    <div>
                        <div>
                            <button type="button">Button</button>
                            <button type="button">Button</button>
                            <button type="button" disabled>Disabled</button>
                            <button type="button" />
                        </div>
                        <div>
                            <button type="button">Button 2</button>
                            <button type="button">Button 2</button>
                            <button type="button">Button 2</button>
                            <button type="button" />
                        </div>
                        <div>
                            <button type="button">
                                Special button
                            </button>
                            <button type="button">
                                Special button
                            </button>
                            <button type="button">
                                Special button
                            </button>
                        </div>
                        <p>Boutons</p>
                        <div>
                            <Tag color="#167024" href="/first-tag">First Tag</Tag>
                            <Tag color="#1b1670" href="/second-tag">Second Tag</Tag>
                            <Tag color="#c728c4" href="/third-tag">Third Tag</Tag>
                            <Tag color="#ff3729" href="/fourth-tag">Fourth Tag</Tag>
                        </div>
                        <p>Tags</p>
                    </div>
                </div>
                <div>
                    <input type="checkbox" />
                    <input type="checkbox" disabled={true} />
                    <input type="radio" name="radio" value={1} />
                    <input type="radio" name="radio" value={2} />
                    <input type="radio" name="radio" value={3} disabled={true} />
                    <br />
                    <input type="date" name="date" value={selectedDate} />
                    <br />
                    <input type="number" name="number" />
                    <br />
                    <input type="password" name="password" />
                    <br />
                    <input type="range" />
                    <br />
                    <input type="search" />
                </div>
                <p>Inputs.</p>
            </div>
        </div>
    );
}
