import React from 'react';

export default function Home() {
  return (
        <div>
            <header>
                <h1><img src="../assets/img/logo.png" alt="" /> Bijou Maker </h1>
            </header>
            <section id="contenedorPuzzle">
                <h2>Personaliza</h2>
                <div class="col-md-6" id="puzzle">
                    <div class="contenedorPieza" id="uno" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)" style={{width:70, height:75, marginTop:"23%", marginLeft:"21%"}}></div>
                    <div class="contenedorPieza" id="dos" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)" style={{width:70, height:75, marginTop:"34%", marginLeft:"-15%"}}></div>
                    <div class="contenedorPieza" id="tres" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)" style={{width:70, height:75, marginTop:"45%", marginLeft:"-14%"}}></div>
                    <div class="contenedorPieza" id="cuatro" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)" style={{width:70, height:75, marginTop:"55%", marginLeft:"-12%"}}></div>
                    <div class="contenedorPieza" id="cinco" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)" style={{width:70, height:75, marginTop:"63%", marginLeft:"-7%"}}></div>
                    <div class="contenedorPieza" id="seis" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)" style={{width:70, height:75, marginTop:"55%", marginLeft:"-7%"}}></div>
                    <div class="contenedorPieza" id="siete" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)" style={{width:70, height:75, marginTop:"45%", marginLeft:"-12%"}}></div>
                    <div class="contenedorPieza" id="ocho" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)" style={{width:70, height:75, marginTop:"34%", marginLeft:"-14%"}}></div>
                    <div class="contenedorPieza" id="nueve" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)" style={{width:70, height:75, marginTop:"23%", marginLeft:"-15%"}}></div>
                </div>
                <div class="col-md-6">
                    <div >
                        <table>
                            <tr>
                                <td>
                                    <table>
                                        <tr>
                                            <td><a href="#opentam"><img src="../assets/img/btnf.png" width="55" height="50" /></a></td>
                                            <div id="opentam" class="modalDialog">
                                                <div>
                                                    <a href="#close" title="Close" class="close">X</a>
                                                    <a href="" onclick="cambio('../assets/img/peque.jpg')" class="publ"><img src="../assets/img/peque.jpg" width="132" height="200" /></a>
                                                    <a href="" onclick="cambio('../assets/img/mediano.jpg')" class="priv"><img src="../assets/img/mediano.jpg" width="132" height="200" /></a>
                                                </div>
                                            </div>
                                            <td><a href=""><img src="../assets/img/tmo.png" width="55" height="50" /></a></td>
                                            <td><a href=""><img src="../assets/img/hlp.png" width="55" height="50" /></a></td>
                                        </tr>
                                        <tr>
                                            <td><a href=""><img src="../assets/img/piedra2.png" width="55" height="50" /></a></td>
                                            <td><a href=""></a><img src="../assets/img/piedra2.png" width="55" height="50" /></td>
                                            <td><a href=""></a><img src="../assets/img/separadores.png" width="55" height="50" /></td>
                                        </tr>
                                    </table>
                                </td>	
                                    <td><a href=""><img src="../assets/img/perfil.png" width="90" height="101" /></a></td>
                                    <td><a href=""><img src="../assets/img/galeria.png" width="90" height="101" /></a></td>
                            </tr>
                        </table><br />
                    </div>
                    <div id="contenedorPiezas" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)">
                        <img id="pieza1" src="../assets/img/p1.png" alt="pieza1" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.2);" />
                        <img id="pieza3" src="../assets/img/p1.png" alt="pieza1" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.2);" />
                        <img id="pieza5" src="../assets/img/p1.png" alt="pieza1" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.2);" />
                        <img id="pieza7" src="../assets/img/p1.png" alt="pieza1" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.2);" />
                        <img id="pieza11" src="../assets/img/p1.png" alt="pieza1" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.2);" />
                        <img id="pieza13" src="../assets/img/p1.png" alt="pieza1" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.2);" />
                        <img id="pieza15" src="../assets/img/p2.png" alt="pieza2" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,1.2);" />
                        <img id="pieza2" src="../assets/img/p2.png" alt="pieza2" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,1.2);" />
                        <img id="pieza6" src="../assets/img/p2.png" alt="pieza2" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,1.2);" />
                        <img id="pieza12" src="../assets/img/p2.png" alt="pieza2" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,1.2);" />
                        <img id="pieza4" src="../assets/img/p3.png" alt="pieza4" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.4);" />
                        <img id="pieza8" src="../assets/img/p3.png" alt="pieza4" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.4);" />
                        <img id="pieza9" src="../assets/img/p3.png" alt="pieza4" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.4);" />
                        <img id="pieza10" src="../assets/img/p3.png" alt="pieza4" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.4);" />
                        <img id="pieza14" src="../assets/img/p3.png" alt="pieza4" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.4);" />
                        <img id="pieza16" src="../assets/img/p3.png" alt="pieza4" width="70" height="75" draggable="true" ondragstart="start(event)" ondragend="end(event)" onclick="sumas(this,0.4);" />
                    </div>
                </div>	
                <div class="compra">
                    <ul class="nav">
                        <li><a href=""><img src="../assets/img/cmp.png" width="35" height="30" /></a>
                            <ul>
                                <li><a href="http://www.facebook.com" target="_blank"><img src="../assets/img/facebook.png" alt="" /></a></li>
                                <li><a href="http://www.linkedin.com" target="_blank"><img src="../assets/img/Linkedin.png" alt="" /></a></li>
                                <li><a href="http://www.twitter.com" target="_blank"><img src="../assets/img/twitter.png" alt="" /></a></li>
                            </ul>
                        </li>
                    </ul>
                    $<input type="text" id="total" value="0.00" disabled /><input type="button" value="Comprar" />
                    <a href="#openModal"><img src="../assets/img/guardar.png" height="30" /></a>
                    <div id="openModal" class="modalDialog">
                        <div>
                            <a href="#close" title="Close" class="close">X</a>
                            <a href="" class="publ"><img src="../assets/img/public.png" alt="" /></a>
                            <a href="" class="priv"><img src="../assets/img/private.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <span id="autor">Derechos Reservados</span>
                <span id="blog"><a href="">Bijou Maker</a></span>
            </footer>
        </div>
  );
};
